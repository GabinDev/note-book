import React, { FC, memo } from 'react';
import { StyleSheet, ViewProps } from 'react-native';
import { Width } from '../../utils/constants';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { IconButton } from '../buttons';
import Animated from 'react-native-reanimated';
import useTheme from '../../hooks/useTheme';


const ButtonAddTask: FC<ViewProps> = ({ ...props }) => {
  const { value } = useTheme();

  return (
    <Animated.View {...props}>
      <IconButton
        style={{
          ...styles.button,
          backgroundColor: value.primary
        }}
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

export default memo(ButtonAddTask);

const styles = StyleSheet.create({
  button: {
    width: Width / 8,
    height: Width / 8,
    margin: 0,
    padding: 0
  }
})