import {showMessage} from 'react-native-flash-message';

import api from '../../services/api';
import {addExpenses, addExpense} from '../ducks/expenses';
import {login} from '../ducks/auth';

export const allExpenses = () => {
  return (dispatch) => {
    api
      .get('/expenses')
      .then((res) => dispatch(addExpenses(res.data)))
      .catch(console.log);
  };
};

export const authLogin = (email) => {
  return (dispatch) => {
    api
      .get(`/start/${email.email}`)
      .then((res) => {
        if (res.data.token) {
          dispatch(login(res.data));
          showMessage({
            message: `Bem-vindo ${email.email}!`,
            description: 'Desfrute do seu app de despesas ;)',
            type: 'success',
          });
        }
      })
      .catch((error) => {
        showMessage({
          message: `Vish!`,
          description: 'Erro ao realizar autenticação, tente novamente',
          type: 'danger',
        });
      });
  };
};
