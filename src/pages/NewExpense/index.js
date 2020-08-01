import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Alert,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  TextInput,
  SafeAreaView,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {format, parseISO} from 'date-fns';
import {useDispatch, useSelector} from 'react-redux';

import {newExpense} from '../../store/fetchActions';
import styles from './styles';

export default function NewExpense() {
  const navigation = useNavigation(null);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth);

  const [item, setItem] = useState('');
  const [value, setValue] = useState('');
  const [date, setDate] = useState(new Date());
  const [info, setInfo] = useState('');
  const [datePressed, setDatePressed] = useState(false);

  const formattedDate = format(date, 'dd/MM/yyyy');
  const formattedDateToSend = format(date, 'yyyy/MM/dd');

  const assignDate = (event, selectedDate) => {
    setDatePressed(false);
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  // function navigateToBack() {
  //   navigation.goBack();
  // }

  function navigateToHome() {
    navigation.navigate('Home');
  }

  function submit(item, value, date, info) {
    if (item == '' || value == '' || date == '') {
      Alert.alert(
        'Ops!',
        'Os campos Item, Valor e Data são obrigatórios',
        [
          {
            text: 'Ok, vou informar esses campos!',
            onPress: () => console.log('Ok pressed'),
            style: 'cancel',
          },
        ],
        {cancelable: false},
      );
    } else {
      try {
        dispatch(newExpense(item, value, date, info, token));
        navigation.navigate('Home');
      } catch (err) {
        alert('Erro ao cadastrar aula, tente novamente!');
      }
    }
  }

  return (
    <>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.select({
          ios: 'padding',
          android: null,
        })}>
        <View style={styles.horizontalPadding}>
          <StatusBar barStyle="dark-content" />
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigateToHome()}>
              <Icon name="arrow-left" size={22} color="#9acd32" />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.horizontalPadding}>
            <View style={styles.expense}>
              <Text style={styles.expenseTitle}>Nova Despesa</Text>

              <Text style={styles.expenseProperty}>ITEM</Text>
              <TextInput
                style={styles.expenseValue}
                placeholder="Item"
                onChangeText={(item) => setItem(item)}
                placeholderTextColor={'#737380'}></TextInput>

              <Text style={styles.expenseProperty}>VALOR</Text>
              <TextInput
                style={styles.expenseValue}
                placeholder="Valor"
                onChangeText={(value) => setValue(value)}
                autoCompleteType="cc-number"
                keyboardType="decimal-pad"
                placeholderTextColor={'#737380'}></TextInput>

              <Text style={styles.expenseProperty}>DATA</Text>
              <View style={styles.date}>
                <TextInput
                  style={styles.expenseValue}
                  placeholder="Selecione uma data"
                  onChangeText={(date) => setDate(date)}
                  placeholderTextColor={'#737380'}>
                  {formattedDate}
                </TextInput>
                <TouchableOpacity
                  style={styles.calendarButton}
                  onPress={(datePressed) => setDatePressed(true)}>
                  <Icon name="calendar-plus-o" size={20} color="#fff" />
                </TouchableOpacity>

                {datePressed && (
                  <DateTimePicker
                    display="default"
                    value={date}
                    mode="date"
                    timeZoneOffsetInMinutes={0}
                    onChange={assignDate}
                  />
                )}
              </View>

              <Text style={styles.expenseProperty}>OBSERVAÇÃO</Text>
              <TextInput
                style={styles.expenseValue}
                placeholder="Informação adicional"
                multiline={true}
                onChangeText={(info) => setInfo(info)}
                placeholderTextColor={'#737380'}></TextInput>
            </View>
          </View>
          <TouchableOpacity
            style={styles.createButton}
            onPress={() => submit(item, value, formattedDateToSend, info)}>
            <Icon name="check" size={20} color="#222222" />
            <Text style={styles.createText}>Confirmar Despesa</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}
