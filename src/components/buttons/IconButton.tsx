import React, { FC, ReactNode, memo } from 'react';
import { View } from '../common';
import {
  StyleSheet,
  ViewProps,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
} from 'react-native'
import { Width } from '../../utils/constants';
type IconButtonProps = ViewProps & TouchableNativeFeedbackProps & {
  icon: ReactNode
}

const IconButton: FC<IconButtonProps> = ({ icon, ...props }) => {
  return (
    <View
      style={[
        styles.rounded,
        {
          // @ts-ignore
          ...props.style
        }
      ]}
      {...props}
    >
      <TouchableNativeFeedback {...props}>
        {icon}
      </TouchableNativeFeedback>
    </View>
  )
}

export default memo<IconButtonProps>(IconButton)

const styles = StyleSheet.create({
  rounded: {
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Width,
  }
})