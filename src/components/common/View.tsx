import React, {
  FC,
  forwardRef,
  memo
} from 'react';
import { ViewProps, View as RNView } from 'react-native';
import useTheme from '../../hooks/useTheme';

const View: FC<ViewProps> = forwardRef(({ children, style, ...props }, ref) => {
  const { value } = useTheme();
  return (
    <RNView
      // @ts-ignore
      ref={ref}
      style={[{
        backgroundColor: value.background,
        // @ts-ignore
        ...style
      }]}
      {...props}
    >
      {children}
    </RNView>
  )
});

export default memo<ViewProps>(View);