import React, {
  FC, memo,
} from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';


const AnimatedTask: FC<TouchableWithoutFeedbackProps> = ({ children, ...props }) => {
  const scale = useSharedValue(1);

  const uas = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }]
  }));

  return (
    <TouchableWithoutFeedback
      onPressIn={() => (scale.value = withTiming(0.97))}
      onPressOut={() => (scale.value = withTiming(1))}
      {...props}
    >
      <Animated.View style={[uas]}>
        {children}
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

export default memo<TouchableWithoutFeedbackProps>(AnimatedTask);

const styles = StyleSheet.create({});