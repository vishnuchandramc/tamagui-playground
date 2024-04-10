import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import { HeaderButton } from 'components/HeaderButton';

import { RootStackParamList } from '.';
import TabNavigator from './tab-navigator';
import Home from '../screens/home';
import { useTheme } from 'tamagui';

type Props = StackScreenProps<RootStackParamList, 'DrawerNavigator'>;

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({ navigation }: Props) {
  const theme = useTheme();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerContentStyle: { backgroundColor: theme.orange1.val },
        drawerActiveTintColor: theme.orange10.val,
        drawerInactiveTintColor: theme.orange10.val,
        headerTintColor: theme.color.val,
        headerStyle: { backgroundColor: theme.orange2.val, shadowColor: theme.shadowColor.val },
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ size, color }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Tabs"
        component={TabNavigator}
        options={{
          headerRight: () => <HeaderButton onPress={() => navigation.navigate('Modal')} />,
          drawerIcon: ({ size, color }) => (
            <MaterialIcons name="border-bottom" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
