import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Avatar from '../components/Avatar';
import Email from '../components/Email';
import Password from '../components/Password';
import LogInButton from '../components/LogInButton';
import ForgetPasswordInLoginPage from '../components/ForgetPasswordInLoginPage';
import RegisterButton from '../components/RegisterButton';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Avatar />
      <Text style={styles.title}>Login to BikersHub</Text>
      <Text style={styles.subtitle}>Login to continue using the app</Text>
      <Email />
      <Password />
      <ForgetPasswordInLoginPage
        onPress={() => navigation.navigate('ForgetPassword')}
      />
      <LogInButton />
      <View style={styles.socialContainer}>
        <Text style={styles.orText}>OR</Text>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="facebook" size={30} color="#3b5998" />
          <MaterialCommunityIcons name="google" size={30} color="#db4a39" />
          <MaterialCommunityIcons name="instagram" size={30} color="#C13584" />
        </View>
      </View>
      <RegisterButton onPress={() => navigation.navigate('Register')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#000000',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
  },
  socialContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  orText: {
    color: '#000',
    fontSize: 16,
    marginBottom: 25,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
  },
});

export default Login;
