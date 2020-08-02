import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';
import 'moment/locale/pt-br';

import styles from './styles';
import {allExpenses, authLogout} from '../../store/fetchActions';

export default function Home() {
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

    setPage(page + 1);
    setLoading(false);
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  async function logout() {
    await dispatch(authLogout());
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bem-vindo!</Text>
        <TouchableOpacity style={styles.logout} onPress={() => logout()}>
          <Icon name="sign-out" size={24} color="#ca3433" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addExpense}
          onPress={navigateToNewExpense}>
          <Icon name="plus" size={18} color="#9acd32" />
          <Text style={styles.addExpenseText}>Despesa</Text>
        </TouchableOpacity>
      </View>
      {expenses && (
        <FlatList
          data={expenses}
          style={styles.expenseList}
          keyExtractor={(expense) => String(expense._id)}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.2} //indica quantos por cento está do fim da pagina (de 0 a 1)
          renderItem={({item: expense}) => (
            <View style={styles.expense}>
              <Text style={styles.expenseProperty}>ITEM</Text>
              <Text style={styles.expenseValue}>{expense.item}</Text>

              <Text style={styles.expenseProperty}>VALOR</Text>
              <Text style={styles.expenseValue}>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(expense.value)}
              </Text>

              <Text style={styles.expenseProperty}>DATA</Text>
              <Text style={styles.expenseValue}>
                {capitalize(
                  moment(expense.date).locale('pt-br').format('dddd, DD [de] '),
                )}
                {capitalize(
                  moment(expense.date).locale('pt-br').format('MMMM [de] YYYY'),
                )}
              </Text>

              {expense.additionalInfo != undefined && (
                <>
                  <Text style={styles.expenseProperty}>OBSERVAÇÃO</Text>
                  <Text style={styles.expenseValue}>
                    {expense.additionalInfo.info}
                  </Text>
                </>
              )}

              <TouchableOpacity
                style={styles.detailsButton}
                onPress={() => navigateToEditDetail(expense)}>
                <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                <Icon name="arrow-right" size={18} color="#9acd32" />
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      {expenses == undefined ||
        expenses == [] ||
        (expenses == '' && (
          <View style={styles.notExpenses}>
            <View style={styles.notExpensesTitle}>
              <Icon name="meh-o" size={60} color="#222222" />
              <Text style={styles.notExpensesText}>Oops!</Text>
            </View>
            <Text style={styles.notExpensesSub}>
              Você ainda não possui despesas...
            </Text>
          </View>
        ))}
    </View>
  );
}
