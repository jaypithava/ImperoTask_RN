import * as React from 'react';
import {Button, View, StyleSheet, SafeAreaView} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainViewStyle}>
        <Button
          title="Product Screen"
          onPress={() => navigation.navigate('ProductScreen')}
        />
        <Button
          title="Color Screen"
          onPress={() => navigation.navigate('ColorDesignScreen')}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainViewStyle: {
    width: '100%',
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 5,
  },
});
