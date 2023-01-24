import React, { FC, memo } from 'react';
import {
  StyleSheet,
  ViewProps
} from 'react-native';
import { TextInput, View } from '../../components/common';
import { Height, Width } from '../../utils/constants';
import useTheme from '../../hooks/useTheme';
import { IconButton } from '../../components/buttons';
import AddDescriptionButton from '../../components/animatable/AddDescriptionButton';


const AddDescription: FC<ViewProps> = ({ style, ...props }) => {
  const { value } = useTheme();

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: value.variant2
      }}
      {...props}
    >
      <TextInput
        placeholder="Ajouter une description..."
        style={styles.input}
      />
      <AddDescriptionButton  />
    </View>
  )
}

export default memo<ViewProps>(AddDescription);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Height / 100,
    borderRadius: Width / 90,
    paddingHorizontal: Width / 50
  },
  input: {
    flex: 1,
  },

})