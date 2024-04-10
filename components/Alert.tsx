import { X } from '@tamagui/lucide-icons';
import { Unspaced, useTheme } from 'tamagui';
import { Button, Dialog, Text } from 'tamagui'; // or '@tamagui/dialog'
export const AlertModal = () => {
  const theme = useTheme();
  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button>Show Dialog</Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay
          key="overlay"
          animation={'quick'}
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />

        <Dialog.Content
          bordered
          elevation={'$0'}
          key="content"
          animateOnly={['transform', 'opacity']}
          animation={[
            'quick',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          gap="$2">
          <Dialog.Title size={'$8'}>Congratulations!</Dialog.Title>
          <Dialog.Description py={'$2'}>You have successfully opened new modal.</Dialog.Description>

          <Unspaced>
            <Dialog.Close asChild>
              <Button px="$2">Close</Button>
            </Dialog.Close>
          </Unspaced>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
};
