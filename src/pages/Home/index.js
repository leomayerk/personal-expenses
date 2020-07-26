
import React  from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import logoImg from '../../assets/logo.png'
import styles from './styles'

export default function Home() {
  // const [incident, setIncident] = useState([]);
  // const [total, setTotal] = useState(0);
  // const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  // function navigateToDetail(incident) {
  //   navigation.navigate('Detail', { incident });
  // }

  // async function loadIncidents() {
  //   if (loading) {
  //     return;
  //   }

  //   if (total > 0 && incident.length == total) {
  //     return;
  //   }

  //   setLoading(true);

  //   const response = await api.get('incident', {
  //     params: { page }
  //   });

  //   //copia todos os valores q já tem nos incidentes (...) + retorno da requisição
  //   setIncident([...incident, ...response.data]);

  //   setTotal(response.headers['x-total-count'])
  //   setPage(page + 1);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   loadIncidents();
  // }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Image source={logoImg}></Image> */}
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>20 despesas</Text>.
        </Text>
      </View>
      <Text style={styles.title}>Bem-vindo</Text>
      <Text style={styles.description}>Essas são as suas despesas ... ;)</Text>

      {/* <FlatList
        data={incident}
        style={styles.incidentList}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2} //indica quantos por cento está do fim da pagina (de 0 a 1)
        renderItem={({ item: incident }) => ( */}
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ITEM:</Text>
            <Text style={styles.incidentValue}>Netflix</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(20)}
            </Text>

            <Text style={styles.incidentProperty}>DATA:</Text>
            <Text style={styles.incidentValue}>17/08/2020</Text>

            <Text style={styles.incidentProperty}>OBSERVAÇÕES:</Text>
            <Text style={styles.incidentValue}>.........</Text>

            <TouchableOpacity
              style={styles.detailsButton}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              {/* <Icon name="person-add" size={22} color="#9acd32" /> */}
            </TouchableOpacity>
          </View>
        {/* )}
      /> */}
    </View>
  );
}
