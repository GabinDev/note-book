import React, {
  FC,
  memo,
  useEffect
} from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated';
import { Height } from '../../utils/constants';
import { useAtom } from 'jotai';
import { textFocused } from '../../store/newTask';
import { lightTheme } from '../../utils/constants/theme';


type DividerProps = {}

const Divider: FC<DividerProps> = ({ }) => {
  const width = useSharedValue(0);
  const [focused] = useAtom(textFocused);

  const uas = useAnimatedStyle(() => ({
    width: `${width.value}%`
  }));

  useEffect(() => {
    width.value = withSpring(focused ? 100 : 0, { damping: 10 });
  }, [focused]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          uas,
          styles.divider
        ]}
      />
    </View>
  )
}

export default memo<DividerProps>(Divider);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: Height / 300,
    backgroundColor: 'transparent'
  },
  divider: {
    height: Height / 300,
    backgroundColor: lightTheme.value.primary
  }
})