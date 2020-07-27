import React from 'react';
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

import styles from './styles';

export default function NewExpense() {
  const navigation = useNavigation(null);

  // const assignDate = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setDate(currentDate);
  //   console.log(currentDate);
  // }

  const date = new Date();

  function navigateToBack() {
    navigation.goBack();
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
            <TouchableOpacity onPress={navigateToBack}>
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
                placeholderTextColor={'#737380'}></TextInput>

              <Text style={styles.expenseProperty}>VALOR</Text>
              <TextInput
                style={styles.expenseValue}
                placeholder="Valor"
                placeholderTextColor={'#737380'}></TextInput>

              <Text style={styles.expenseProperty}>DATA</Text>
              <DateTimePicker
                display="default"
                value={date}
                mode="date"
                timeZoneOffsetInMinutes={0}
              />
              {/* <DateTimePicker
                display="default"
                value={date}
                mode="date"
                timeZoneOffsetInMinutes={0}
                onChange={assignDate}
              /> */}

              <Text style={styles.expenseProperty}>OBSERVAÇÃO</Text>
              <TextInput
                style={styles.expenseValue}
                placeholder="Informação adicional"
                multiline={true}
                placeholderTextColor={'#737380'}></TextInput>
            </View>
          </View>
          <TouchableOpacity style={styles.createButton}>
            <Icon name="check" size={20} color="#222222" />
            <Text style={styles.createText}>Confirmar Despesa</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}
