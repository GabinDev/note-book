import React, { FC } from 'react';
import { View, TextInput } from '../../components/common';
import { ViewProps, StyleSheet } from 'react-native';
import { Height, Width } from '../../utils/constants';
import { IconButton } from '../../components/buttons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import useTheme from '../../hooks/useTheme';
import Divider from '../../components/animatable/Divider';
import { useAtom } from 'jotai';
import {
  textFocused,
  textInput
} from '../../store/newTask';

type SearchHomeProps = ViewProps & {}

const SearchHome: FC<SearchHomeProps> = ({ ...props }) => {
  const { value } = useTheme();
  const [text, setText] = useAtom(textInput);
  const [, setTextFocused] = useAtom(textFocused);

  return (
    <View style={styles.container}  {...props}>
      <View
        style={{
          ...styles.inputContainer,
          backgroundColor: value.variant1,
        }}
      >
        <TextInput
          value={text}
          onChangeText={setText}
          onFocus={() => setTextFocused(true)}
          onBlur={() => setTextFocused(false)}
          placeholder="Entrer le titre ici..."
          style={styles.input}
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
            style={{ marginLeft: 5 }}
            color={value.background}
          />
        }
      />
    </View >
  )
}

export default SearchHome;


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: Height / 25,
    alignItems: 'center',
    columnGap: Width / 20
  },
  inputContainer: {
    flexGrow: 1,
    borderRadius: Width / 5,
    overflow: 'hidden',
    alignItems: 'center'
  },
  input: {
    width: '100%',
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