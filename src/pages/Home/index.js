import React from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

export default function Home() {
  // const [expense, setExpense] = useState([]);
  // const [total, setTotal] = useState(0);
  // const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function navigateToNewExpense() {
    navigation.navigate('NewExpense');
  }

  function navigateToEditDetail() {
    navigation.navigate('EditDetail');
  }

  // async function loadExpenses() {
  //   if (loading) {
  //     return;
  //   }

  //   if (total > 0 && expense.length == total) {
  //     return;
  //   }

  //   setLoading(true);

  //   const response = await api.get('expense', {
  //     params: { page }
  //   });

  //   //copia todos os valores q já tem nas despesas (...) + retorno da requisição
  //   setExpense([...expense, ...response.data]);

  //   setTotal(response.headers['x-total-count'])
  //   setPage(page + 1);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   loadExpenses();
  // }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bem-vindo!</Text>
        <TouchableOpacity style={styles.addExpense} onPress={navigateToNewExpense}>
          <Icon name="plus" size={18} color="#9acd32" />
          <Text style={styles.addExpenseText}>Despesa</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.totalText}>
        Total de <Text style={styles.headerTextBold}>20 despesas</Text>.
      </Text>
      {/* <FlatList
        data={expense}
        style={styles.expenseList}
        keyExtractor={expense => String(expense.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadExpenses}
        onEndReachedThreshold={0.2} //indica quantos por cento está do fim da pagina (de 0 a 1)
        renderItem={({ item: expense }) => ( */}
      <View style={styles.expense}>
        <Text style={styles.expenseProperty}>ITEM</Text>
        <Text style={styles.expenseValue}>Netflix</Text>

        <Text style={styles.expenseProperty}>VALOR</Text>
        <Text style={styles.expenseValue}>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(20)}
        </Text>

        <Text style={styles.expenseProperty}>DATA</Text>
        <Text style={styles.expenseValue}>17/08/2020</Text>

        <Text style={styles.expenseProperty}>OBSERVAÇÃO</Text>
        <Text style={styles.expenseValue}>.........</Text>

        <TouchableOpacity style={styles.detailsButton} onPress={navigateToEditDetail}>
          <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
          <Icon name="arrow-right" size={18} color="#9acd32" />
        </TouchableOpacity>
      </View>
      {/* )}
      /> */}
    </View>
  );
}
