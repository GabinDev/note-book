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
import type { Priority } from '../../utils/types';
import Chips from '../../components/animatable/Chips';
import {
  Height,
  PRIORITIES,
  Width
} from '../../utils/constants';
import { useAtom } from 'jotai';
import { selected } from '../../store/priorites';


const ListPriorities: FC<ViewProps> = ({ ...props }) => {
  const [value, setValue] = useAtom(selected);

  const renderItem = useMemo(() => ({ item }: ListRenderItemInfo<Priority>) => {
    return (
      <Chips
        {...item}
        selected={value?.id === item.id}
        onPress={() => setValue(item)}
      />
    )
  }, [value]);

  return (
    <View style={styles.container} {...props}>
      <Animated.FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={PRIORITIES}
        renderItem={renderItem}
      />
    </View>
  )
}

export default memo<ViewProps>(ListPriorities);

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