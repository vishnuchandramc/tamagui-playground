import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DrawerNavigator from './drawer-navigator';
import Modal from '../screens/modal';
import { useTheme } from 'tamagui';

export type RootStackParamList = {
  DrawerNavigator: undefined;
  Modal: undefined;
  TabNavigator: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  const theme = useTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DrawerNavigator">
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Modal"
          component={Modal}
          options={{
            presentation: 'modal',
            headerLeft: () => null,
            headerBackgroundContainerStyle: { backgroundColor: theme.orange1.val },
            headerTintColor: theme.color.val,
            headerStyle: { backgroundColor: theme.orange2.val, shadowColor: theme.shadowColor.val },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
