import React, {
  FC,
  forwardRef,
  memo
} from 'react';
import {
  TextInputProps,
  TextInput as RNTextInput
} from 'react-native';
import useTheme from '../../hooks/useTheme';

const TextInput: FC<TextInputProps> = forwardRef(({ style, ...props }, ref) => {
  const { value } = useTheme();
  return (
    <RNTextInput
      // @ts-ignore
      ref={ref}
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
})

export default memo<TextInputProps>(TextInput);