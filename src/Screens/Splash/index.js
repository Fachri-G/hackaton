import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Splash = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('LOGIN');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.txtSplash}>Ringkas</Text>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtSplash: {
    fontSize: 24,
    color: 'black',
  },
});
