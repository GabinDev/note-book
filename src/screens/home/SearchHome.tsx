import React, { FC } from 'react';
import {
  View,
  TextInput,
  Text
} from '../../components/common';
import { ViewProps, StyleSheet } from 'react-native';
import { Height, Width } from '../../utils/constants';
import { IconButton } from '../../components/buttons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import useTheme from '../../hooks/useTheme';
import Divider from '../../components/animatable/Divider';

type SearchHomeProps = ViewProps & {

}

const SearchHome: FC<SearchHomeProps> = ({ ...props }) => {
  const { value } = useTheme();
  return (
    <View
      style={styles.container}
      {...props}
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Entrer le titre ici..."
          style={{
            backgroundColor: value.variant1,
            ...styles.input
          }}
        />
        <Divider />
      </View>
      <IconButton
        style={{
          ...styles.button,
          backgroundColor: value.primary
        }}
        icon={
          <Ionicon
            name="add"
            size={Width / 12}
            color={value.background}
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
  inputContainer: {
    flexGrow: 1,
    borderRadius: Width / 5,
    overflow : 'hidden',
    alignItems:'center'
  },
  input: {
    width : '100%',
    fontSize: Width / 20,
    paddingHorizontal: Width / 25,
    paddingVertical: Height / 60
  },
  button: {
    width: Width / 8,
    height: Width / 8,
    margin: 0,
    padding: 0
  }
})