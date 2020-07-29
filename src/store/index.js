import { configureStore } from '@reduxjs/toolkit';

import rootExpenses from './ducks/expenses';
import rootAuth from './ducks/auth';

export default configureStore({
  reducer: {
    expenses: rootExpenses,
    auth: rootAuth
  }
});
