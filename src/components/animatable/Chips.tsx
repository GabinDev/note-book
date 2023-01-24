import React, { FC } from 'react';
import { StyleSheet,View } from 'react-native';
import Animated from 'react-native-reanimated';
import { Text } from '../common';

interface ChipsProps { }

const Chips: FC<ChipsProps> = ({ ...props }) => {
  return (
    <View>
      <Animated.View>

      </Animated.View>
      <Text>Chips</Text>
    </View>
  )
}

export default Chips

const styles = StyleSheet.create({})