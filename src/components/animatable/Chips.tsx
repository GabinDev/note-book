import React, { FC, memo } from 'react';
import {
  StyleSheet,
  TouchableNativeFeedback,
  View
} from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { Text } from '../common';
import type { Description } from '../../utils/types';
import { Height, Width } from '../../utils/constants';
import useTheme from '../../hooks/useTheme';

type ChipsProps = Description & {
  onPress?: () => void
}


const Chips: FC<ChipsProps> = ({ id, text, color, onPress, ...props }) => {
  const { value } = useTheme();

  const uas = useAnimatedStyle(() => ({}))

  return (
    <View style={styles.row}>
      <View style={styles.rounded}>
        <TouchableNativeFeedback onPress={onPress}>
          <Animated.View
            style={[
              uas,
              styles.container,
              { backgroundColor: color }
            ]}
            {...props}
          >
            <Text style={{ ...styles.text }}>{text}</Text>
          </Animated.View>
        </TouchableNativeFeedback>
      </View>
      <View />
    </View>
  )
}

export default memo<ChipsProps>(Chips);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    columnGap: Width / 60
  },
  container: {
    paddingHorizontal: Width / 20,
    paddingVertical: Height / 80,
  },
  rounded: {
    borderRadius: Width / 20,
    overflow: 'hidden',
  },
  text: {
    fontFamily: 'Raleway-SemiBold'
  },
})