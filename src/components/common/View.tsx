import React, { FC, memo } from 'react';
import { ViewProps, View as RNView } from 'react-native';
import useTheme from '../../hooks/useTheme';

const View: FC<ViewProps> = ({ children,style, ...props }) => {
  const { value } = useTheme();
  return (
    <RNView
      style={[
        {
          backgroundColor: value.background,
          // @ts-ignore
          ...style
        },
      ]}
      {...props}
    >
      {children}
    </RNView>
  )
}

export default memo<ViewProps>(View);