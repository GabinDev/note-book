import React, { FC, memo } from 'react';
import { StyleSheet, ViewProps } from 'react-native';
import Animated from 'react-native-reanimated';
import { View } from '../../components/common';


const Descriptions: FC<ViewProps> = ({ ...props }) => {
  return (
    <View {...props}>
      <Animated.FlatList
      />
    </View>
  )
}

export default memo<ViewProps>(Descriptions);

const styles = StyleSheet.create({
  container: {

  }
})