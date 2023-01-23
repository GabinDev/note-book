import React, { FC } from 'react';
import {
  View,
  TextInput
} from '../../components/common';
import { ViewProps, StyleSheet } from 'react-native';
import { Height, Width } from '../../utils/constants';

type SearchHomeProps = ViewProps & {

}

const SearchHome: FC<SearchHomeProps> = ({ ...props }) => {
  return (
    <View
      style={styles.container}
      {...props}
    >
      <TextInput
        placeholder="Entrer le titre ici..."
        style={styles.input}
      />
    </View>
  )
}

export default SearchHome;


const styles = StyleSheet.create({
  container: {
    width : '100%',
    marginTop: Height / 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex :1,
    fontSize: Width / 20,
    backgroundColor: 'rgba(255,255,255,.8)',
    borderRadius: Width / 5,
    paddingHorizontal: Width / 25,
    paddingVertical: Height / 60
  }
})