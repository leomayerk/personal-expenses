import {showMessage} from 'react-native-flash-message';

import api from '../../services/api';
import {
  addExpenses,
  addExpense,
  removeExpense,
  updateExpense,
} from '../ducks/expenses';
import {login, logout} from '../ducks/auth';

// Expenses List
export const allExpenses = (page, token) => {
  return (dispatch) => {
    api
      .get('/expenses', {
        params: {
          page: page,
          perPage: 20,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(addExpenses(res.data));
        if (!res.data) {
          showMessage({
            message: `Ops!`,
            description: 'Você ainda não possui despesas. Cadastre uma! ;)',
            type: 'info',
          });
        }
      })
      .catch((error) => {
        showMessage({
          message: `Vish!`,
          description: `Erro: ${error}`,
          type: 'danger',
        });
      });
  };
};

// New Expense
export const newExpense = (item, value, date, info, token) => {
  return (dispatch) => {
    api
      .post(
        '/expenses',
        {
          date: date,
          item: item,
          value: value,
          additionalInfo: {info},
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res) => {
        dispatch(addExpense(res.data));
        showMessage({
          message: `Ai sim! :D`,
          description: 'Despesa cadastrada com sucesso!',
          type: 'success',
        });
      })
      .catch((error) => {
        showMessage({
          message: `Problemas ao criar despesa!`,
          description: `Erro: ${error}`,
          type: 'danger',
        });
      });
  };
};

// Edit Expense
export const editExpense = (id, date, item, value, info, token) => {
  return (dispatch) => {
    api
      .put(
        `/expenses/${id}`,
        {
          date: date,
          item: item,
          value: value,
          additionalInfo: {info},
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res) => {
        dispatch(updateExpense(res.data));
        showMessage({
          message: `Certo...`,
          description: 'Despesa alterada com sucesso!',
          type: 'success',
        });
      })
      .catch((error) => {
        showMessage({
          message: `Problemas ao editar despesa!`,
          description: `Erro: ${error}`,
          type: 'danger',
        });
      });
  };
};

// Delete Expense
export const deleteExpense = (id, token) => {
  return (dispatch) => {
    api
      .delete(`/expenses/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(removeExpense(res.data));
        showMessage({
          message: `Certo...`,
          description: 'Despesa excluida com sucesso!',
          type: 'success',
        });
      })
      .catch((error) => {
        showMessage({
          message: `Problemas ao eliminar despesa!`,
          description: `Erro: ${error}`,
          type: 'danger',
        });
      });
  };
};

// Authorization
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

// Logout
export const authLogout = () => {
  return (dispatch) => {
    dispatch(logout());
    showMessage({
      message: `Até logo :)`,
      description: 'Logout realizado com sucesso',
      type: 'info',
    });
  };
};
