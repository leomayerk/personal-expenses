import React, { useState } from 'react';
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
import { format } from "date-fns";

import styles from './styles';

export default function NewExpense() {
  const navigation = useNavigation(null);

  const [datePressed, setDatePressed] = useState(false);
  const [date, setDate] = useState(new Date());

  const formattedDate = format(date, "dd/MM/yyyy");

  const assignDate = (event, selectedDate) => {
    setDatePressed(false)
    const currentDate = selectedDate || date;
    setDate(currentDate);
    console.log(currentDate);
  }

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
              <View style={styles.date}>
                <TextInput
                  style={styles.expenseValue}
                  placeholder="Selecione uma data"
                  placeholderTextColor={'#737380'}>{formattedDate}</TextInput>
                <TouchableOpacity style={styles.calendarButton} onPress={datePressed => setDatePressed(true)}>
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
