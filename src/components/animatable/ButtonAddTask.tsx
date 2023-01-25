import React, {
  FC,
  memo,
  useEffect
} from 'react';
import { StyleSheet, ViewProps } from 'react-native';
import { Height, Width } from '../../utils/constants';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { IconButton } from '../buttons';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';
import useTheme from '../../hooks/useTheme';
import { useAtom } from 'jotai';
import { tasks } from '../../store/tasks';
import { textInput, titleInput } from '../../store/newTask';


const ButtonAddTask: FC<ViewProps> = ({ ...props }) => {
  const { value } = useTheme();

  const [, setTasks] = useAtom(tasks);
  const [title] = useAtom(titleInput);
  const [text] = useAtom(textInput);

  const scale = useSharedValue(1);
  const uas = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }]
  }))

  useEffect(() => {
    scale.value = withTiming(title.length > 1 && text.length > 1 ? 1 : 0);
  }, [title, text]);


  return (
    <Animated.View
      pointerEvents={title.length > 1 && text.length ? 'auto' : 'none'}
      style={[uas, styles.container]}
      {...props}
    >
      <IconButton
        style={{ ...styles.button, backgroundColor: value.primary }}
        icon={
          <Ionicon
            name="add"
            size={Width / 12}
            style={{ marginLeft: 5 }}
            color={value.background}
          />
        }
      />
    </Animated.View>
  )
}

export default memo<ViewProps>(ButtonAddTask);

const styles = StyleSheet.create({
  container: {
    zIndex: 2,
    position: 'absolute',
    bottom: Height / 40,
    right: Width / 50
  },
  button: {
    width: Width / 8,
    height: Width / 8,
    margin: 0,
    padding: 0
  }
})