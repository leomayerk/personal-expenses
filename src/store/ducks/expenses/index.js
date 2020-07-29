import {createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = [];

export const addExpense = createAction('ADD_EXPENSE');
export const addExpenses = createAction('ADD_EXPENSES');

export default createReducer(INITIAL_STATE, {
  [addExpense.type]: (state, action) => [...state, action.payload],
  [addExpenses.type]: (state, action) => [...action.payload]
})
