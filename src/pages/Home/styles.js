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

	headerText: {
		fontSize: 15,
		color: '#13131a',
	},

    headerTextBold: {
			fontWeight:'bold'
	},

	title: {
		fontSize: 30,
		marginBottom: 16,
		marginTop: 48,
		color: '#9acd32',
		fontWeight: 'bold',
	},

	description:{
		fontSize: 16,
		lineHeight: 24,
		color: '#9acd32'
	},

	incidentList:{
		marginTop:32,
	},

	incident: {
		padding:24,
		borderRadius:8,
		backgroundColor: '#FFF',
		marginBottom: 16,
	},

	incidentProperty: {
		fontSize: 14,
		color: '#41414d',
		fontWeight: 'bold'
	},

	incidentValue: {
		marginTop: 8,
		fontSize:15,
		marginBottom: 24,
		color: '#737380'
	},

	detailsButton: {
		flexDirection: 'row',
		justifyContent:'space-between',
		alignItems: 'center',
	},

	detailsButtonText: {
		color: '#e02041',
		fontSize: 15,
		fontWeight:'bold'
	},

});
