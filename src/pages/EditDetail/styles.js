import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#404040',
  },

  horizontalPadding: {
    paddingHorizontal: 24,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },

  headerTouchable: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerText: {
    fontSize: 22,
    color: '#9acd32',
    fontWeight: 'bold',
    marginLeft: 12
  },

  expense: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#222222',
    marginBottom: 106,
    marginTop: 20,
  },

  expenseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  iconExpenseHeader: {
    marginEnd: '55%',
  },

  expenseTitle: {
    fontSize: 26,
    color: '#9acd32',
    fontWeight: 'bold',
    flexDirection: 'row',
    marginBottom: 8,
  },

  expenseProperty: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 22,
  },

  expenseValue: {
    marginTop: 8,
    fontSize: 15,
    color: '#737380',
  },

  date: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  calendarButton: {
    marginEnd: '35%',
  },

  deleteButton: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ca3433',
    flexDirection: 'row',
  },

  deleteText: {
    color: '#222222',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 6,
    marginRight: 6,
    marginTop: 3,
  },
});
