import React, {
  FC,
  memo,
  useMemo
} from 'react';
import {
  ListRenderItemInfo,
  StyleSheet,
  ViewProps,
  View
} from 'react-native';
import Animated from 'react-native-reanimated';
import { useAtom } from 'jotai';
import { descriptions } from '../../store/description';
import type { Description } from '../../utils/types';
import Chips from '../../components/animatable/Chips';
import { Height, Width } from '../../utils/constants';


const ListDescriptions: FC<ViewProps> = ({ ...props }) => {
  const [data] = useAtom(descriptions);

  const renderItem = useMemo(() => ({ item }: ListRenderItemInfo<Description>) => {
    return (
      <Chips
        {...item}
      />
    )
  }, []);

  return (
    <View style={styles.container} {...props}>
      <Animated.FlatList
        horizontal
        data={data}
        renderItem={renderItem}
      />
    </View>
  )
}

export default memo<ViewProps>(ListDescriptions);

const styles = StyleSheet.create({
  container: {
    marginTop: Height / 50
  },
  separator: {
    width: Width / 20,
    height: Height / 30,
    backgroundColor: 'red'
  }
})