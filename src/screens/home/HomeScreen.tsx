import React from 'react';
import { Layout } from '../../components/common';
import { StyleSheet } from 'react-native';
import SearchHome from './SearchHome';


const HomeScreen = () => {
  return (
    <Layout style={styles.container}>
      <SearchHome />
    </Layout>
  )
}

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})