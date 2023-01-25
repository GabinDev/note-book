import React, { FC } from 'react';
import { View } from '../../components/common';
import { ViewProps, StyleSheet } from 'react-native';
import { Height, Width } from '../../utils/constants';
import useTheme from '../../hooks/useTheme';
import Divider from '../../components/animatable/Divider';
import InputTextArea from '../../components/header/InputTextArea';
import Animated, { Easing, Layout } from 'react-native-reanimated';
import InputTextTitle from '../../components/header/InputTextTitle';

type SearchHomeProps = ViewProps & {}
const AnimatedView = Animated.createAnimatedComponent(View);

const SearchHome: FC<SearchHomeProps> = ({ ...props }) => {
  const { value } = useTheme();

  return (
    <AnimatedView
      layout={Layout.duration(200).easing(Easing.ease)}
      style={{
        ...styles.inputContainer,
        backgroundColor: value.variant1,
      }}
    >
      <View style={styles.column}>
        <InputTextTitle />
        <InputTextArea />
      </View>
      <Divider />
    </AnimatedView>
  )
}

export default SearchHome;


const styles = StyleSheet.create({
  inputContainer: {
    marginTop: Height / 25,
    borderRadius: Width / 18,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  column: {
    width: '100%',
    backgroundColor: 'transparent',
  }
})