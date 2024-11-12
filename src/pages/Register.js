import React from 'react';
import { View, StyleSheet } from 'react-native';
import RegisterUserName from '../components/RegisterUserName';
import RegisterEmail from '../components/RegisterEmail';
import RegisterPassword from '../components/RegisterPassword';
import RegisterReEnterPassword from '../components/RegisterReEnterPassword';
import RegisterButtonSignUp from '../components/RegisterButtonSignUp';

const Register = () => {
  return (
    <View style={styles.container}>
      <RegisterUserName />
      <RegisterEmail />
      <RegisterPassword />
      <RegisterReEnterPassword />
      <RegisterButtonSignUp />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF', 
  },
});

export default Register;
