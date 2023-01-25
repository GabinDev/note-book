import React, { FC, memo, useEffect } from 'react';
import {
  StyleSheet,
  TouchableNativeFeedback,
  View
} from 'react-native';
import { Text } from '../common';
import type { Priority } from '../../utils/types';
import { Height, Width } from '../../utils/constants';
import useTheme from '../../hooks/useTheme';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Animated, { SharedValue, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

type ChipsProps = Priority & {
  selected?: boolean;
  onPress?: () => void
}

const Chips: FC<ChipsProps> = ({ id, text, color, selected, onPress, ...props }) => {
  const { value } = useTheme();

  return (
    <View style={styles.row}>
      <View style={styles.rounded}>
        <TouchableNativeFeedback onPress={onPress}>
          <View
            style={{
              ...styles.container,
              backgroundColor: color ?? value.variant1
            }}
            {...props}
          >
            <Text style={{ ...styles.text, color: value.background }}>{text}</Text>
            <AnimatedIcon
              color={value.background}
              selected={selected}
            />
          </View>
        </TouchableNativeFeedback>
      </View>
      <View />
    </View>
  )
}



type AnimatedIconProps = {
  color?: string;
  selected: boolean | undefined;
}


const AnimatedIcon = memo<AnimatedIconProps>(({ color, selected }) => {
  const scale = useSharedValue(0);
  const left = useSharedValue(0);
  const uas = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    marginLeft : left.value
  }));

  useEffect(() => {
    scale.value = withTiming(selected ? 1 : 0);
    left.value = withTiming(selected ? 5 : 0);
  }, [selected]);

  return (
    <Animated.View style={[uas]}>
      <Ionicon
        name="checkmark-outline"
        color={color}
        size={Width / 30}
      />
    </Animated.View>
  );
})


export default memo<ChipsProps>(Chips);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    columnGap: Width / 60
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
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