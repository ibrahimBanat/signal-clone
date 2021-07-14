import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, Input, Image } from 'react-native-elements';
const loginScreen = () => {
  return (
    <View>
      <StatusBar style='light' />
      <Image
        source={{
          uri: 'https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png',
        }}
        style={{ width: 200, height: 200 }}
      />
      <View styles={styles.inputContainer}></View>
    </View>
  );
};

export default loginScreen;

const styles = StyleSheet.create({});
