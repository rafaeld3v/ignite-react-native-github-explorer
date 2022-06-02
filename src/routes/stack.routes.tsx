import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import theme from '../global/styles/theme';

import { Dashboard } from '../screens/Dashboard';
import { Repository } from '../screens/Repository';
import { Header } from '../components/Header';

export type RootStackParamList = {
  Dashboard: undefined;
  Repository: {
    repositoryId: number;
  };
};

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.gray_50,
        },
        header: ({ navigation }) => {
          if (navigation.canGoBack()) {
            return <Header goBack={navigation.goBack} />;
          }
          return <Header />;
        },
        headerTransparent: true,
      }}
    >
      <Screen name="Dashboard" component={Dashboard} />

      <Screen name="Repository" component={Repository} />
    </Navigator>
  );
}
