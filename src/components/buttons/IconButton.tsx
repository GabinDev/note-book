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

const IconButton: FC<IconButtonProps> = ({ icon, style, ...props }) => {
  return (
    <View
      style={{
        ...styles.rounded,
        // @ts-ignore
        ...style
      }}
      {...props}
    >
      <TouchableNativeFeedback {...props}>
        <View style={styles.container}>
          {icon}
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

export default memo<IconButtonProps>(IconButton)

const styles = StyleSheet.create({
  rounded: {
    overflow: 'hidden',
    borderRadius: Width,
  },
  container : {
    width : '100%',
    height : '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : 'transparent'
  }
})