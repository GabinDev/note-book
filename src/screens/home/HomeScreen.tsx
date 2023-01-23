import React from 'react';
import { View } from '../../components/common';
import { StyleSheet } from 'react-native';
import SearchHome from './SearchHome';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <SearchHome/>
    </View>
  )
}

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})