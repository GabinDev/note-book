import React, { FC, memo } from 'react';
import { StyleSheet, TextInputProps } from 'react-native';
import { TextInput } from '../common';
import { Width } from '../../utils/constants';
import { useAtom } from 'jotai';
import { titleInput } from '../../store/newTask';

const InputTextTitle: FC<TextInputProps> = ({ ...props }) => {
  const [text, setText] = useAtom(titleInput);

  return (
    <TextInput
      placeholder="Entrer le titre ici..."
      value={text}
      onChangeText={setText}
      style={styles.input}
      {...props}
    />
  )
}

export default memo<TextInputProps>(InputTextTitle);

const styles = StyleSheet.create({
  input: {
    width: '100%',
    fontSize: Width / 20,
    backgroundColor: 'transparent',
    paddingHorizontal: Width / 25,
  }
})