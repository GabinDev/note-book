import React, {
  FC,
  memo,
  useEffect
} from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';
import { IconButton } from '../buttons';
import { Width } from '../../utils/constants';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useAtom } from 'jotai';
import { textInput } from '../../store/description';
import useTheme from '../../hooks/useTheme';


type AddDescriptionButtonProps = {
  onPress?: () => void
}

const AddDescriptionButton: FC<AddDescriptionButtonProps> = ({ onPress }) => {
  const { value } = useTheme();
  const [text] = useAtom(textInput);
  const scale = useSharedValue(0);

  const uas = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  useEffect(() => {
    scale.value = withTiming(text === '' ? 0 : 1);
  }, [text]);

  return (
    <Animated.View
      style={[uas]}
      pointerEvents={text === '' ? 'none' : 'auto'}
    >
      <IconButton
        onPress={onPress}
        style={styles.button}
        icon={
          <MaterialIcon
            name="playlist-add"
            color={value.text}
            size={Width / 20}
          />
        }
      />
    </Animated.View>
  )
}

export default memo<AddDescriptionButtonProps>(AddDescriptionButton);

const styles = StyleSheet.create({
  button: {
    width: Width / 12,
    height: Width / 12,
    backgroundColor: 'transparent'
  }
})