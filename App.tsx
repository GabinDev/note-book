import React from 'react';
import StatusLight from './src/components/common/StatusLight';
import Navigation from './src/navigations/Navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusLight />
      <Navigation />
    </GestureHandlerRootView>
  )
}

export default App
