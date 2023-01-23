import React, { FC, memo } from 'react';
import { ViewProps, View } from 'react-native';
import useTheme from '../../hooks/useTheme';
import { Width } from '../../utils/constants';

const Layout: FC<ViewProps> = ({ children, style, ...props }) => {
  const { value } = useTheme();
  return (
    <View
      style={[
        {
          backgroundColor: value.background,
          paddingHorizontal: Width / 50,
          // @ts-ignore
          ...style
        },
      ]}
      {...props}
    >
      {children}
    </View>
  )
}

export default memo<ViewProps>(Layout);