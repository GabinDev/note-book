import React, { FC, memo } from 'react';
import {
  StyleSheet,
  TextInputProps,
  View
} from 'react-native';
import { Height, Width } from '../../utils/constants';
import { TextInput } from '../common';
import { atom, useAtom } from 'jotai';
import {
  textFocused,
  textInput
} from '../../store/newTask';
import Animated, {
  Easing,
  Layout
} from 'react-native-reanimated';


const textLength = atom(
  get => get(textInput).split('\n').length
);

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const InputTextArea: FC<TextInputProps> = () => {

  const [length] = useAtom(textLength);
  const [text, setText] = useAtom(textInput);
  const [, setTextFocused] = useAtom(textFocused);

  return (
    <View style={styles.container}>
      <AnimatedTextInput
        layout={Layout.duration(300).easing(Easing.ease)}
        value={text}
        onChangeText={setText}
        multiline
        numberOfLines={length}
        onFocus={() => setTextFocused(true)}
        onBlur={() => setTextFocused(false)}
        placeholder="Ajouter une description..."
        style={styles.teaxtarea}
      />
    </View>
  )
}

export default memo<TextInputProps>(InputTextArea);

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  teaxtarea: {
    maxHeight: Height / 3,
    fontSize: Width / 28,
    paddingHorizontal: Width / 25,
    paddingVertical: Height / 60,
    fontFamily: 'Raleway-Regular.ttf'
  },
})