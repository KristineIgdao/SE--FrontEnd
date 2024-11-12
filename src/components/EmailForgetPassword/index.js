import React from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';

const EmailForgetPassword = () => (
  <View style={styles.inputContainer}>
    {/* Logo Image */}
    <Image 
      source={require('../../assets/Forgetpasswordlogo.png')} // Update this path based on your file structure
      style={styles.logo} 
    />

    <Text style={styles.subtitle}>
      Forgot Password?{'\n'}
      Don't worry! It happens. Please enter the email address linked with your account.
    </Text>
    <Text style={styles.title}>Enter email address</Text>
    <TextInput
      placeholder="Enter your email"
      style={styles.input}
      keyboardType="email-address"
      autoCapitalize="none"
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    marginBottom: 15,
    alignItems: 'center', 
  },
  logo: {
    width: 300, 
    height: 300, 
    marginBottom: 40, 
    resizeMode: 'contain', 
  },
  subtitle: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 15,
    borderRadius: 25,
    width: '100%',
    borderColor: '#000000',
    fontWeight: 'bold',
  },
});

export default EmailForgetPassword;
