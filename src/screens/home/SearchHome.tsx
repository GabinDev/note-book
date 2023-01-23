import React, { FC } from 'react';
import {
  View,
  TextInput
} from '../../components/common';
import { ViewProps, StyleSheet } from 'react-native';
import { Height, Width } from '../../utils/constants';
import { IconButton } from '../../components/buttons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import useTheme from '../../hooks/useTheme';

type SearchHomeProps = ViewProps & {

}

const SearchHome: FC<SearchHomeProps> = ({ ...props }) => {
  const {value} = useTheme();
  return (
    <View
      style={styles.container}
      {...props}
    >
      <TextInput
        placeholder="Entrer le titre ici..."
        style={styles.input}
      />
      <IconButton
        style={{
          ...styles.button,
          backgroundColor : value.primary
        }}
        icon={
          <Ionicon
            name="add"
            size={Width / 12}
          />
        }
      />
    </View>
  )
}

export default SearchHome;


const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: Height / 25,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: Width / 20
  },
  input: {
    flex: 1,
    fontSize: Width / 20,
    backgroundColor: 'rgba(255,255,255,.8)',
    borderRadius: Width / 5,
    paddingHorizontal: Width / 25,
    paddingVertical: Height / 60
  },
  button: {
    width: Width / 8,
    height: Width / 8,
    backgroundColor: 'orange',
    margin :0,
    padding :0
  }
})