import { YStack, H1, Separator, Theme } from 'tamagui';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ children }: ScreenContentProps) => {
  const isDarkMode = useColorScheme() == 'dark';
  return (
    <Theme name="orange">
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      <YStack
        flex={1}
        alignItems="center"
        justifyContent="flex-start"
        backgroundColor={'$background'}>
        {children}
      </YStack>
    </Theme>
  );
};
