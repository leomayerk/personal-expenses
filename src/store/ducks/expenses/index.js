import {createAction, createReducer} from '@reduxjs/toolkit';

const INITIAL_STATE = [];

export const addExpense = createAction('ADD_EXPENSE');
export const addExpenses = createAction('ADD_EXPENSES');
export const updateExpense = createAction('UPDATE_EXPENSE');
export const removeExpense = createAction('REMOVE_EXPENSE');

export default createReducer(INITIAL_STATE, {
  [addExpense.type]: (state, action) => [...state, action.payload],
  [addExpenses.type]: (state, action) => [...action.payload],
  [updateExpense.type]: (state, action) => [...state, action.payload],
  [removeExpense.type]: (state, action) => state,
});
