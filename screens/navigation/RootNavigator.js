import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import TabNavigator from '..';
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;