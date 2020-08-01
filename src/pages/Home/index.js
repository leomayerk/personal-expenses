import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {format, parseISO} from 'date-fns';

import styles from './styles';
import {allExpenses} from '../../store/fetchActions';

export default function Home() {
  const [expense, setExpense] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const expenses = useSelector((state) => state.expenses);
  const token = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    const getExpenses = navigation.addListener('focus', () => {
      loadExpenses();
    });

    return getExpenses;
  }, []);

  function navigateToNewExpense() {
    navigation.navigate('NewExpense');
  }

  function navigateToEditDetail(expense) {
    navigation.navigate('EditDetail', {expense});
  }

  async function loadExpenses() {
    if (loading) {
      return;
    }

    setLoading(true);

    await dispatch(allExpenses(page, token));
    console.log(expenses);

    setPage(page + 1);
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bem-vindo!</Text>
        <TouchableOpacity
          style={styles.addExpense}
          onPress={navigateToNewExpense}>
          <Icon name="plus" size={18} color="#9acd32" />
          <Text style={styles.addExpenseText}>Despesa</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={expenses}
        style={styles.expenseList}
        keyExtractor={(expenses) => String(expenses._id)}
        showsVerticalScrollIndicator={false}
        // onEndReached={loadExpenses}
        onEndReachedThreshold={0.2} //indica quantos por cento está do fim da pagina (de 0 a 1)
        renderItem={({item: expenses}) => (
          <View style={styles.expense}>
            <Text style={styles.expenseProperty}>ITEM</Text>
            <Text style={styles.expenseValue}>{expenses.item}</Text>

            <Text style={styles.expenseProperty}>VALOR</Text>
            <Text style={styles.expenseValue}>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(expenses.value)}
            </Text>

            <Text style={styles.expenseProperty}>DATA</Text>
            {console.log(
              expenses.date,
              parseISO(expenses.date),
              String(format(parseISO(expenses.date), 'dd/MM/yyyy')),
            )}
            <Text style={styles.expenseValue}>
              {format(parseISO(expenses.date), 'dd/MM/yyyy')}
            </Text>

            {expenses.additionalInfo != undefined && (
              <>
                <Text style={styles.expenseProperty}>OBSERVAÇÃO</Text>
                <Text style={styles.expenseValue}>
                  {expenses.additionalInfo.info}
                </Text>
              </>
            )}

            <TouchableOpacity style={styles.detailsButton}
              onPress={() => navigateToEditDetail(expenses)}>
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Icon name="arrow-right" size={18} color="#9acd32" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
