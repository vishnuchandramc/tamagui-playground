import { ChevronRight, Cloud, Moon, Star, Sun } from '@tamagui/lucide-icons';
import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { ListItem, Separator } from 'tamagui';
import { YGroup } from 'tamagui';

export default function Modal() {
  return (
    <>
      <ScreenContent path="screens/modal.tsx" title="Modal">
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        <YGroup w={'95%'} alignSelf="center" size="$8" separator={<Separator />}>
          <YGroup.Item>
            <ListItem
              hoverTheme
              size={'$5'}
              pressTheme
              title="Dark mode"
              subTitle="choose the theme as per your preference"
            />
          </YGroup.Item>
          <YGroup.Item>
            <ListItem
              size={'$5'}
              hoverTheme
              pressTheme
              title="Language"
              subTitle="Choose the language"
            />
          </YGroup.Item>
        </YGroup>
      </ScreenContent>
    </>
  );
}
