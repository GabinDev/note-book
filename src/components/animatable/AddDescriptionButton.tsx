import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue
} from 'react-native-reanimated';
import { IconButton } from '../buttons';
import { Width } from '../../utils/constants';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';


type AddDescriptionButtonProps = {
  onPress?: () => void
}

const AddDescriptionButton: FC<AddDescriptionButtonProps> = ({ onPress, ...props }) => {
  const scale = useSharedValue(1);

  const uas = useAnimatedStyle(() => ({

  }));

  return (
    <Animated.View style={[uas]} >
      <IconButton
        onPress={onPress}
        style={styles.button}
        icon={
          <MaterialIcon
            name="playlist-add"
            size={Width / 20}
          />
        }
      />
    </Animated.View>
  )
}

export default AddDescriptionButton

const styles = StyleSheet.create({
  button: {
    width: Width / 12,
    height: Width / 12,
    backgroundColor: 'transparent'
  }
})