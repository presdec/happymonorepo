import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertTitle,
  Button,
} from '@nxmonorepo-shadcn-ui/ui';
import { Terminal } from 'lucide-react';
import Balancer from 'react-wrap-balancer';

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <Balancer>
        <h1 className="text-3xl font-bold">Finaly something on the screen!</h1>
      </Balancer>
      <Button variant="outline">Hello World!</Button>
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>General Information</AccordionTrigger>
          <AccordionContent>
            <h1 className="text-2xl">
              The call for expressions of interest for a translation grant
              concerning the translation of an entire work written in Greek into
              a foreign language is accompanied by an application form which is
              submitted online. The call is addressed to foreign private and
              public legal entities, both ‘for-profit’ and ‘not-for-profit’,
              including but not limited to educational institutions,
              universities and foreign publishing houses. Such entities will be
              referred to henceforth as “the Publisher”. The programme funds up
              to 75% of the total cost of the translation, as this is presented
              in the budget submitted along with the application. The Committee
              may review the proposed budget at its discretion, should it
              deviate significantly from the budgets submitted for the
              translation and publication of similar works in the same, or a
              comparable, language. In reaching this decision, the usual
              translation price per page for the country / language and literary
              genre may be taken into account, along with any other factors
              which the Committee may consider to cause the budgeted amount to
              differ from the amount submitted in the application.
            </h1>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Alert variant="destructive">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
    </div>
  );
}
