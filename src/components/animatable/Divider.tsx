import React, { FC, memo } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { Height } from '../../utils/constants';
import useTheme from '../../hooks/useTheme';

type DividerProps = {}

const Divider: FC<DividerProps> = ({ }) => {
  const { value } = useTheme();
  
  const uas = useAnimatedStyle(() => ({
    width: '100%',
    backgroundColor: value.primary

  }));

  return (
    <Animated.View
      style={[
        uas,
        styles.divider
      ]}
    />
  )
}

export default memo<DividerProps>(Divider);

const styles = StyleSheet.create({
  divider: {
    height: Height / 300,
    borderRadius: Height
  }
})