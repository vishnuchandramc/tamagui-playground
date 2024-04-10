import { AccordionDemo } from 'components/Accordion';
import { ScreenContent } from 'components/ScreenContent';

export default function TabOneScreen() {
  return (
    <ScreenContent path="screens/one.tsx" title="Tab One">
      <AccordionDemo />
    </ScreenContent>
  );
}
