import React, { FC, memo } from 'react';
import {
  StatusBar,
  StatusBarProps
} from 'react-native';
import useTheme from '../../hooks/useTheme';

interface StatusLightProps extends StatusBarProps { }

const StatusLight: FC<StatusLightProps> = ({ ...props }) => {
  const { theme } = useTheme();
  return (
    <StatusBar
      translucent
      backgroundColor="transparent"
      barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
      {...props}
    />
  )
}

export default memo<StatusBarProps>(StatusLight);