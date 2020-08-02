import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import logoImg from '../../assets/sofit-logo.png';
import {authLogin} from '../../store/fetchActions';

export default function Login() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [lastToken, setLastToken] = useState('');

  async function Logon() {
    setLastToken(token);
    await dispatch(authLogin({email}));
  }

  useEffect(() => {
    if (token != undefined && token != '') {
      this.textInput.clear();
      navigation.navigate('Home');
    }

    // if (lastToken == token && token != undefined && token != '') {
    //   this.textInput.clear();
    //   navigation.navigate('Home');
    // }

    return () => {
      this.textInput.clear()
      setEmail('');
    };
  }, [token]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({
        ios: 'padding',
        android: null,
      })}>
      <View style={styles.logoRadius}></View>
      <Image source={logoImg} style={styles.logo}></Image>

      <Text style={styles.expenses}>Despesa$</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          onChangeText={(email) => setEmail(email)}
          ref={input => { this.textInput = input }}
        />

        <TouchableOpacity style={styles.button} onPress={() => Logon()}>
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
