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

	title: {
		fontSize: 30,
		marginBottom: 16,
		color: '#9acd32',
		fontWeight: 'bold',
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

});
