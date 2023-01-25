import React, {
  FC,
  memo
} from 'react';
import { StyleSheet } from 'react-native';
import type { Task } from '../../utils/types';
import { Text, View } from '../common';
import { Height, Width } from '../../utils/constants';
import useTheme from '../../hooks/useTheme';
import moment from 'moment';

interface TaskProps {
  task: Task
}

moment().locale('fr');
moment().format('dddd, MMMM, yyyy');

const Task: FC<TaskProps> = ({ task }) => {
  const { value } = useTheme();

  return (
    <View
      style={{
        backgroundColor: value.variant1,
        ...styles.container
      }}
    >
      <View style={{ backgroundColor: 'transparent' }}>
        <Text style={styles.title}>{task.title}</Text>
        <Text style={styles.description}>{task.description}</Text>
      </View>
      <Text style={styles.date}>11 Janvier, 2023</Text>
    </View>
  )
}

export default memo<TaskProps>(Task);

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    justifyContent: 'space-between',
    borderRadius: Width / 50,
    paddingHorizontal: Width / 50,
    paddingVertical: Height / 50,
  },
  title: {
    fontFamily: 'Raleway-ExtraBold',
    fontSize: Width / 25,
  },
  date : {
    fontFamily: 'Raleway-Regular',
    fontSize: Width / 40,
    marginTop: Height / 100,
    opacity : 0.7
  },
  description: {
    marginTop: Height / 190,
    fontFamily: 'Raleway-Regular',
    fontSize: Width / 30,
  }
})