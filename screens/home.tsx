import { AccordionDemo } from 'components/Accordion';
import { AlertModal } from 'components/Alert';
import { ScreenContent } from 'components/ScreenContent';
import { Input } from 'tamagui';
import { Button, Card, Slider, Spinner, Switch, Text, useTheme, XStack, YStack } from 'tamagui';
import { Subtitle, Title } from 'tamagui.config';

export default function Home() {
  const theme = useTheme();
  return (
    <ScreenContent path="screens/home.tsx" title="Home">
      <YStack alignItems="center">
        <Card my={'$4'}>
          <Card.Header>
            <Text color={'$color'}>Card title</Text>
            <Title>tamaGUI</Title>
          </Card.Header>
          <Card.Background />
        </Card>
        <XStack gap="$3" w={'$19'} $xs={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text color={'$color'}>Are you sure?</Text>
          <Switch size={'$3'} defaultChecked={true}>
            <Switch.Thumb animation={'bouncy'} />
          </Switch>
        </XStack>

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
        <XStack my={'$8'} mx={'$4'} alignItems="center">
          <Input
            flex={1}
            size={'$4'}
            placeholder={`Enter something`}
            placeholderTextColor={'$color'}
          />
          <Button size={'$3'}>Go</Button>
        </XStack>
        <AlertModal />
      </YStack>
    </ScreenContent>
  );
}
