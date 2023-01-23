import React, { FC } from 'react';
import {
  View,
  TextInput,
  Text
} from '../../components/common';
import { ViewProps } from 'react-native';

type SearchHomeProps = ViewProps & {

}

const SearchHome: FC<SearchHomeProps> = ({ ...props }) => {
  return (
    <View {...props}>
      <TextInput
        placeholder="Entrer le titre ici..."
      />
    </View>
  )
}

export default SearchHome