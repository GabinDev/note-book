import React, {
  FC,
  memo,
  useMemo
} from 'react';
import {
  ListRenderItemInfo,
  ViewProps,
  StyleSheet
} from 'react-native';
import { View } from '../../components/common';
import { FlatList } from 'react-native-gesture-handler';
import { useAtom } from 'jotai';
import { tasks } from '../../store/tasks';
import TaskComponent from '../../components/task/Task';
import { Task } from '../../utils/types';
import { Height } from '../../utils/constants';


const ListTasks: FC<ViewProps> = ({ ...props }) => {
  const [list] = useAtom(tasks);

  const renderItem = useMemo(() => ({ item }: ListRenderItemInfo<Task>) => {
    return <TaskComponent task={item} />
  }, []);

  return (
    <View style={styles.container} {...props}>
      <FlatList
        data={list}
        style={styles.list}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  )
}

export default memo<ViewProps>(ListTasks);

const styles = StyleSheet.create({
  container: {
    marginTop: Height / 40,
  },
  list: {},
  separator: {
    height: Height / 90
  }
});