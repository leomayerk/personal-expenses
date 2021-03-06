import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 24,
    paddingTop: 20,
    backgroundColor: '#404040'
	},

	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
  },

  logout: {
    alignItems:'center',
    justifyContent:'center',
    flexDirection: 'row',
    marginBottom: 60,
    marginStart:-300
  },

  logoutText:{
    marginLeft: 6,
    marginRight: 6,
    color: '#ca3433',
    fontSize: 14,
    fontWeight: 'bold',
  },

	title: {
		fontSize: 30,
		marginTop: 22,
		color: '#9acd32',
		fontWeight: 'bold',
  },

  listText: {
		fontSize: 20,
		color: '#9acd32',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
	},

	expenseList:{
		marginTop:32,
	},

	expense: {
		padding:24,
		borderRadius:8,
		backgroundColor: '#222222',
		marginBottom: 16,
	},

	expenseProperty: {
		fontSize: 14,
		color: '#737380',
		fontWeight: 'bold'
	},

	expenseValue: {
		marginTop: 8,
		fontSize:15,
		marginBottom: 24,
		color: '#fff'
	},

	detailsButton: {
		flexDirection: 'row',
		justifyContent:'space-between',
		alignItems: 'center',
	},

	detailsButtonText: {
		color: '#9acd32',
		fontSize: 15,
		fontWeight:'bold'
  },

  addExpense: {
    backgroundColor: '#222222',
    borderRadius: 8,
    height: 55,
    width: '40%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },

  addExpenseText: {
    marginLeft: 6,
    marginRight: 6,
    color: '#9acd32',
    fontSize: 20,
    fontWeight: 'bold',
  },

  notExpenses: {
		textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 220
  },

  notExpensesTitle: {
		flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
		color: '#222222',
    fontWeight: 'bold',
    marginBottom: 30
  },

  notExpensesText: {
		fontSize: 60,
		color: '#222222',
    fontWeight: 'bold',
    marginLeft: 12
  },

  notExpensesSub: {
		fontSize: 32,
		color: '#222222',
    fontWeight: 'bold',
    textAlign:'center'
  },


});
