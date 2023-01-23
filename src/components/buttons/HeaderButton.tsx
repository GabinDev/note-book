import React, { FC, memo } from 'react';
import {
  StyleSheet,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps
} from 'react-native';
import { View } from '../common';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { Width } from '../../utils/constants';
import useTheme from '../../hooks/useTheme';
import { RootStackParamList } from '../../utils/types/Navigations';
import { useRoute } from '@react-navigation/core';


interface HeaderButtonProps extends TouchableNativeFeedbackProps {
  icon: string;
  route?: keyof RootStackParamList;
}

const HeaderButton: FC<HeaderButtonProps> = ({route, icon, ...props }) => {
  const { theme } = useTheme();
  const { name } = useRoute();

  return (
    <View style={styles.rounded}>
      <TouchableNativeFeedback
        {...props}
      >
        <View style={styles.padding}>
          <Ionicon
            color={theme === 'light' ? 'rgba(0,0,0,.6)' : 'white'}
            size={Width / 18}
            name={name === route ? icon : `${icon}-outline`}
          />
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

export default memo<HeaderButtonProps>(HeaderButton);

const styles = StyleSheet.create({
  padding: {
    padding: Width / 100
  },
  rounded: {
    borderRadius: Width / 2,
    overflow: 'hidden',
  }
})