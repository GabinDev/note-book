import React, { FC, memo } from 'react';
import { TextProps, Text as RNText } from 'react-native';
import useTheme from '../../hooks/useTheme';

const Text: FC<TextProps> = ({ children, style, ...props }) => {
  const { value } = useTheme();
  return (
    <RNText
      style={[
        {
          color: value.text,
          fontFamily: 'Raleway-Black',
          // @ts-ignore
          ...style
        },
      ]}
      {...props}
    >
      {children}
    </RNText>
  )
}

export default memo<TextProps>(Text);