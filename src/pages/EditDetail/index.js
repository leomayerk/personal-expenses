import React, {useEffect, useState} from 'react';
import {
  View,
  Alert,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation, useRoute} from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {format} from 'date-fns';
import {useDispatch, useSelector} from 'react-redux';

import {deleteExpense, editExpense} from '../../store/fetchActions';
import styles from './styles';

export default function EditDetail() {
  const navigation = useNavigation(null);
  const route = useRoute();
  const expense = route.params.expense;
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth);
  const expenseDate = new Date(expense.date);


  const [item, setItem] = useState(expense.item);
  const [value, setValue] = useState(expense.value);
  const [date, setDate] = useState(expenseDate);
  const [info, setInfo] = useState(expense.additionalInfo.info);
  const [datePressed, setDatePressed] = useState(false);
  const [updated, setUpdated] = useState(false);

  const assignDate = (event, selectedDate) => {
    setDatePressed(false);
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  function navigateToBack() {
    navigation.goBack();
  }

  useEffect(() => {
    if (
      new Date(expense.date).getTime() !== new Date(date).getTime()||
      expense.value !== value ||
      expense.item !== item ||
      expense.additionalInfo.info !== info
    ) {
      setUpdated(true);
    }

  }, [item, value, date, info]);

  function confirmDelete(id) {
    Alert.alert(
      'Deseja excluir essa despesa?',
      'Se confirmar, não conseguirá acessar mais essa despesa',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: () => delExpense(id),
        },
      ],
      {cancelable: false},
    );
  }

  function confirmUpdate(id) {
    if (item == '' || date == '' || value == '') {
      Alert.alert(
        'Ops!',
        'Item, Data e Valor são campos obrigatórios.',
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
      Alert.alert(
        'Deseja salvar suas alterações?',
        'Se confirmar, suas alterações serão efetivadas.',
        [
          {
            text: 'Cancelar',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'Confirmar',
            onPress: () => updExpense(id, item, date, value, info),
          },
        ],
        {cancelable: false},
      );
    }
  }

  async function delExpense(id) {
    await dispatch(deleteExpense(id, token));
    navigation.navigate('Home');
  }

  async function updExpense(id, item, date, value, info) {
    await dispatch(editExpense(id, date, item, value, info, token));
    navigation.navigate('Home');
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
            {!updated && (
              <TouchableOpacity onPress={navigateToBack}>
                <Icon name="arrow-left" size={22} color="#9acd32" />
              </TouchableOpacity>
            )}
            {updated && (
              <TouchableOpacity
                style={styles.headerTouchable}
                onPress={() => confirmUpdate(expense._id)}>
                <Icon name="arrow-left" size={22} color="#9acd32" />
                <Text style={styles.headerText}>Salvar</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.horizontalPadding}>
            <View style={styles.expense}>
              <View style={styles.expenseHeader}>
                <Text style={styles.expenseTitle}>Despesa</Text>
                <Icon
                  name="edit"
                  size={20}
                  color="#9acd32"
                  style={styles.iconExpenseHeader}
                />
              </View>

              <Text style={styles.expenseProperty}>ITEM</Text>
              <TextInput
                style={styles.expenseValue}
                placeholder="Item"
                placeholderTextColor={'#737380'}
                onChangeText={(item) => setItem(item)}>
                {expense.item}
              </TextInput>

              <Text style={styles.expenseProperty}>VALOR</Text>
              <TextInput
                style={styles.expenseValue}
                placeholder="Valor"
                placeholderTextColor={'#737380'}
                autoCompleteType="cc-number"
                keyboardType="decimal-pad"
                onChangeText={(value) => setValue(value)}>
                {expense.value}
              </TextInput>

              <Text style={styles.expenseProperty}>DATA</Text>
              <View style={styles.date}>
                <TextInput
                  style={styles.expenseValue}
                  placeholder="Selecione uma data"
                  placeholderTextColor={'#737380'}
                  onChangeText={(date) => setDate(date)}>
                  {format(date, 'dd/MM/yyyy')}
                </TextInput>
                <TouchableOpacity
                  style={styles.calendarButton}
                  onPress={() => setDatePressed(true)}>
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
                placeholder="Informação Adicional"
                multiline={true}
                placeholderTextColor={'#737380'}
                onChangeText={(info) => setInfo(info)}>
                {expense.additionalInfo.info}
              </TextInput>
            </View>
          </View>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => confirmDelete(expense._id)}>
            <Icon name="trash" size={20} color="#222222" />
            <Text style={styles.deleteText}>Excluir</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}
