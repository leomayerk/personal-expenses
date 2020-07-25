import React, { useState }  from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';

import styles from './styles';
import logoImg from '../../assets/sofit-logo.png';

export default function Login() {

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
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
