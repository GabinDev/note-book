import React, { FC, memo } from 'react';
import { View } from '../common';
import { StackHeaderProps } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { Height, Width } from '../../utils/constants';
import HeaderButton from '../buttons/HeaderButton';

interface HeaderNavigationProps extends StackHeaderProps { }


const HeaderNavigation: FC<HeaderNavigationProps> = ({ route, ...props }) => {
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <HeaderButton route="Home" icon={'ios-create'} />
        <HeaderButton icon={'md-checkbox'} />
      </View>
      <View style={styles.right}>
        <HeaderButton icon={'settings'} />
      </View>
    </View>
  )
}

export default memo<HeaderNavigationProps>(HeaderNavigation)


const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingTop: Height / 19,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Width / 50
  },
  center: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: Width / 13
  },
  right: {
    position: 'absolute',
    right: Width / 30,
    bottom: 0
  }
})
