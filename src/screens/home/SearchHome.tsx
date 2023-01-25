import React, { FC } from 'react';
import { View, TextInput } from '../../components/common';
import { ViewProps, StyleSheet } from 'react-native';
import { Height, Width } from '../../utils/constants';
import { IconButton } from '../../components/buttons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import useTheme from '../../hooks/useTheme';
import Divider from '../../components/animatable/Divider';
import InputTextArea from '../../components/header/InputTextArea';
import Animated, { Easing, Layout } from 'react-native-reanimated';
import ButtonAddTask from '../../components/animatable/ButtonAddTask';

type SearchHomeProps = ViewProps & {}
const AnimatedView = Animated.createAnimatedComponent(View);

const SearchHome: FC<SearchHomeProps> = ({ ...props }) => {
  const { value } = useTheme();

  return (
    <View style={styles.container}  {...props}>
      <AnimatedView
        layout={Layout.duration(200).easing(Easing.ease)}
        style={{
          ...styles.inputContainer,
          backgroundColor: value.variant1,
        }}
      >
        <View style={styles.column}>
          <TextInput
            placeholder="Entrer le titre ici..."
            style={styles.input}
          />
          <InputTextArea />
        </View>
        <Divider />
      </AnimatedView>
      <ButtonAddTask />
    </View >
  )
}

export default SearchHome;


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: Height / 25,
    alignItems: 'flex-start',
    columnGap: Width / 20
  },
  inputContainer: {
    flexGrow: 1,
    maxWidth: Width / 1.28,
    borderRadius: Width / 18,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  column: {
    width: '100%',
    backgroundColor: 'transparent',
  },
  input: {
    width: '100%',
    fontSize: Width / 20,
    backgroundColor: 'transparent',
    paddingHorizontal: Width / 25,
  }
})