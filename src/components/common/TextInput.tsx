import React, { FC, memo } from 'react';
import {
  TextInputProps,
  TextInput as RNTextInput
} from 'react-native';
import useTheme from '../../hooks/useTheme';

const Text: FC<TextInputProps> = ({ style, ...props }) => {
  const { value } = useTheme();
  return (
    <RNTextInput
      cursorColor={value.text}
      placeholderTextColor={value.placeholder}
      style={[
        {
          color: value.text,
          fontFamily: 'Raleway-SemiBold',
          // @ts-ignore
          ...style
        },
      ]}
      {...props}
    />
  )
}

export default memo<TextInputProps>(Text);