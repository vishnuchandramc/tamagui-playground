import { Avatar, YStack } from 'tamagui';
import { ScrollView, Text, XStack } from 'tamagui';
import { Accordion, Paragraph, Square, View } from 'tamagui';
export function AccordionDemo() {
  return (
    <ScrollView w={'100%'}>
      <Accordion overflow="hidden" mx={'$3'} type="multiple">
        <Accordion.Item bg={'$orange2'} value="a1">
          <Accordion.Trigger
            btc={'$colorTransparent'}
            blc={'$colorTransparent'}
            brc={'$colorTransparent'}
            flexDirection="row"
            justifyContent="space-between">
            {({ open }) => (
              <XStack jc={'flex-start'} ai={'center'} w={'$20'}>
                <Avatar circular size="$6">
                  <Avatar.Image
                    accessibilityLabel="Cam"
                    src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
                  />
                  <Avatar.Fallback backgroundColor="$blue10" />
                </Avatar>
                <YStack ml={'$4'}>
                  <Text fontSize={'$6'} color={'$color'}>
                    Chicken
                  </Text>
                  <Text fontSize={'$4'} color={'$color'}>
                    Raised on biosecure farm
                  </Text>
                </YStack>
                <Square animation="bouncy" rotate={open ? '180deg' : '0deg'}></Square>
              </XStack>
            )}
          </Accordion.Trigger>

          <Accordion.Content bg={'$orange2'}>
            <Paragraph color={'$color'}>
              Cold showers can help reduce inflammation, relieve pain, improve circulation, lower
              stress levels, and reduce muscle soreness and fatigue.
            </Paragraph>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item bg={'$orange2'} value="a2">
          <Accordion.Trigger
            btc={'$colorTransparent'}
            blc={'$colorTransparent'}
            brc={'$colorTransparent'}
            flexDirection="row"
            justifyContent="space-between">
            {({ open }) => (
              <XStack jc={'flex-start'} ai={'center'} w={'$20'}>
                <Avatar circular size="$6">
                  <Avatar.Image
                    accessibilityLabel="Cam"
                    src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80"
                  />
                  <Avatar.Fallback backgroundColor="$blue10" />
                </Avatar>
                <YStack ml={'$4'}>
                  <Text fontSize={'$6'} color={'$color'}>
                    Mutton
                  </Text>
                  <Text fontSize={'$4'} color={'$color'}>
                    Raised on biosecure farm
                  </Text>
                </YStack>
                <Square animation="bouncy" rotate={open ? '180deg' : '0deg'}></Square>
              </XStack>
            )}
          </Accordion.Trigger>

          <Accordion.Content bg={'$orange2'}>
            <Paragraph color={'$color'}>
              Cold showers can help reduce inflammation, relieve pain, improve circulation, lower
              stress levels, and reduce muscle soreness and fatigue.
            </Paragraph>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item bg={'$orange2'} value="a3">
          <Accordion.Trigger
            btc={'$colorTransparent'}
            blc={'$colorTransparent'}
            brc={'$colorTransparent'}
            flexDirection="row"
            justifyContent="space-between">
            {({ open }) => (
              <XStack jc={'flex-start'} ai={'center'} w={'$20'}>
                <Avatar circular size="$6">
                  <Avatar.Image accessibilityLabel="Cam" src="http://picsum.photos/200/300" />
                  <Avatar.Fallback backgroundColor="$blue10" />
                </Avatar>
                <YStack ml={'$4'}>
                  <Text fontSize={'$6'} color={'$color'}>
                    Liver and more
                  </Text>
                  <Text fontSize={'$4'} color={'$color'}>
                    Raised on biosecure farm
                  </Text>
                </YStack>
                <Square animation="bouncy" rotate={open ? '180deg' : '0deg'}></Square>
              </XStack>
            )}
          </Accordion.Trigger>

          <Accordion.Content bg={'$orange2'}>
            <Paragraph color={'$color'}>
              Cold showers can help reduce inflammation, relieve pain, improve circulation, lower
              stress levels, and reduce muscle soreness and fatigue.
            </Paragraph>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item bg={'$orange2'} value="a4">
          <Accordion.Trigger
            btc={'$colorTransparent'}
            blc={'$colorTransparent'}
            brc={'$colorTransparent'}
            flexDirection="row"
            justifyContent="space-between">
            {({ open }) => (
              <XStack jc={'flex-start'} ai={'center'} w={'$20'}>
                <Avatar circular size="$6">
                  <Avatar.Image accessibilityLabel="Cam" src="http://picsum.photos/400/300" />
                  <Avatar.Fallback backgroundColor="$blue10" />
                </Avatar>
                <YStack ml={'$4'}>
                  <Text fontSize={'$6'} color={'$color'}>
                    Eggs
                  </Text>
                  <Text fontSize={'$4'} color={'$color'}>
                    Raised on biosecure farm
                  </Text>
                </YStack>
                <Square animation="bouncy" rotate={open ? '180deg' : '0deg'}></Square>
              </XStack>
            )}
          </Accordion.Trigger>

          <Accordion.Content bg={'$orange2'}>
            <Paragraph color={'$color'}>
              Cold showers can help reduce inflammation, relieve pain, improve circulation, lower
              stress levels, and reduce muscle soreness and fatigue.
            </Paragraph>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </ScrollView>
  );
}
