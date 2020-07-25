import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9acd32'
  },

  logoRadius:{
    width: 210,
    height: 210,
    borderRadius: 100,
    backgroundColor: '#fff',
    marginBottom: -180,
    marginTop: -10,
  },

  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },

  input: {
    marginTop: 15,

    width: 300,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 24
  },

  expenses:{
    color: '#404040',
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 20,
  },

  button: {
    width: 300,
    height: 42,
    backgroundColor: '#404040',
    marginTop: 15,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  }

});
