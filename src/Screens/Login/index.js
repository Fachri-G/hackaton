import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Login = ({navigation}) => {
  const submitLogin = () => {
    navigation.replace('HOME');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputLogin}>
        <View style={styles.itemInput}>
          <TextInput placeholder="Email" />
        </View>
        <View style={styles.itemInput}>
          <TextInput placeholder="Password" />
        </View>
        <TouchableOpacity style={styles.btnLogin} onPress={() => submitLogin()}>
          <Text style={styles.txtLogin}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemInput: {
    height: 38,
    width: 243,
    backgroundColor: 'lightgrey',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  inputLogin: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnLogin: {
    height: 38,
    width: 200,
    backgroundColor: '#000165',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtLogin: {
    color: 'white',
  },
});
