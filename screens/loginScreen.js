import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, Input, Image } from 'react-native-elements';
import { KeyboardAvoidingView } from 'react-native';
const loginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {};
  return (
    <KeyboardAvoidingView behavior='padding' styles={styles.container}>
      <StatusBar style='light' />
      <Image
        source={{
          uri: 'https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png',
        }}
        style={{ width: 200, height: 200 }}
      />
      <View styles={styles.inputContainer}>
        <Input
          placeholder='Email'
          autoFocus
          type='Email'
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Input
          placeholder='Password'
          secureTextEntry
          type='password'
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <Button title='Login' containerStyle={styles.button} onPress={signIn} />
      <Button
        title='Register'
        containerStyle={styles.button}
        type='outline'
        onPress={() => navigation.navigate('Register')}
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default loginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  button: {
    width: 200,
    marginTop: 10,
  },
  inputContainer: {
    width: 300,
  },
});
