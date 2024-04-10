import { YStack, H1, Separator, Theme } from 'tamagui';

import { EditScreenInfo } from './EditScreenInfo';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  const isDarkMode = useColorScheme() == 'dark';
  return (
    <Theme name="purple">
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      <YStack flex={1} alignItems="center" justifyContent="center" backgroundColor={'$background'}>
        {children}
      </YStack>
    </Theme>
  );
};
