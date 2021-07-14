import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import { useState, useLayoutEffect } from 'react';
import { auth } from '../firebase';
const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Back to Login',
    });
  }, [navigation]);
  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(authUser => {
        authUser.user.update({
          displayName: name,
          photoURL:
            imageUrl ||
            'https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png',
        });
      })
      .catch(error => alert(error.message));
  };

  return (
    <KeyboardAvoidingView behavior='padding' styles={styles.container}>
      <StatusBar style='light' />
      <Text h3 style={{ marginBottom: 50 }}>
        Create a Signal account
      </Text>
      <View styles={styles.inputContainer}>
        <Input
          placeholder='Full Name'
          autoFocus
          type='text'
          value={name}
          onChangeText={text => setName(text)}
        />
        <Input
          placeholder='Email'
          type='text'
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Input
          placeholder='Password'
          secureTextEntry
          type='text'
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <Input
          placeholder='Profile Picture URL (optional)'
          type='text'
          value={imageUrl}
          onChangeText={text => setImageUrl(text)}
          onSubmitEditing={register}
        />
      </View>
      <Button
        raised
        title='Register'
        onPress={register}
        containerStyle={styles.button}
      />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

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
