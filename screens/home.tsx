import { ScreenContent } from 'components/ScreenContent';
import { Button, Card, Text, useTheme, XStack, YStack } from 'tamagui';
import { Subtitle, Title } from 'tamagui.config';

export default function Home() {
  const theme = useTheme();
  return (
    <ScreenContent path="screens/home.tsx" title="Home">
      <YStack alignItems="center">
        <Card>
          <Card.Header>
            <Text color={'$color'}>Card title</Text>
            <Title>tamaGUI</Title>
          </Card.Header>
          <Card.Background />
        </Card>
        <Subtitle>What is this?</Subtitle>
        <XStack>
          <Button
            mr={'$1'}
            onPress={() => {
              console.log('hello');
            }}>
            Cancel
          </Button>
          <Button
            ml={'$1'}
            onPress={() => {
              console.log('hello');
            }}>
            Continue
          </Button>
        </XStack>
      </YStack>
    </ScreenContent>
  );
}
