import {StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Button, ScreenWrapper, Text} from '../../components';
import colors from '../../config/colors';
import VectorImage from 'react-native-vector-image';

interface SignInProps {}

const SignIn: React.FC<SignInProps> = ({}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignin = () => {
    console.log({email, password});
  };

  return (
    <ScreenWrapper containerStyles={styles.container}>
      <VectorImage
        source={require('../../config/assets/logo.svg')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.instruction}>Welcome Back</Text>
      <Text style={styles.title}>Sign In</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          placeholder="Email address"
          style={styles.input}
          onChangeText={setEmail}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Password"
          style={styles.input}
          onChangeText={setPassword}
        />
      </View>
      <Button
        text="Sign In"
        containerStyle={styles.button}
        onPress={handleSignin}
      />

      {/* Absolutely positioned circles. */}
      <View style={[styles.circle, styles.circleBottomLeft]} />
      <View style={[styles.circle, styles.circleTopRight]} />
    </ScreenWrapper>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  circle: {
    width: 250,
    height: 250,
    borderRadius: 250,
    backgroundColor: '#DEDDFA',
    position: 'absolute',
  },
  circleTopRight: {
    bottom: -140,
    left: -290,
  },
  circleBottomLeft: {
    top: -140,
    right: -290,
  },
  title: {
    fontSize: 28,
    color: colors.text,
  },
  instruction: {
    fontSize: 28,
    color: colors.primary,
  },
  logo: {
    width: 50,
    marginVertical: 16,
  },
  input: {
    width: '100%',
    padding: 8,
    color: colors.text,
    marginVertical: 8,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: colors.placeholder,
    backgroundColor: colors.white,
  },
  inputContainer: {
    paddingVertical: 8,
    marginTop: 32,
  },
  label: {
    color: colors.text,
  },
  button: {
    width: '100%',
  },
});
