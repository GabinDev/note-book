import React from 'react';
import { Layout } from '../../components/common';
import { StyleSheet } from 'react-native';
import SearchHome from './SearchHome';
import { IconButton } from '../../components/buttons';


const HomeScreen = () => {
  return (
    <Layout style={styles.container}>
      <SearchHome />
      <IconButton />
    </Layout>
  )
}

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})