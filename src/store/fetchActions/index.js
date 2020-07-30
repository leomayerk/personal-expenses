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
      .then(async (res) => {
        if (res.data.token) {
          try {
            await dispatch(login(res.data.token));
            showMessage({
              message: `Bem-vindo ${email.email}!`,
              description: 'Desfrute do seu app de despesas ;)',
              type: 'success',
            });
          } catch (error) {
            console.log(error);
          }
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
