import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function QuestionAccordion() {
  return (
    <div className="border px-4 rounded-md ">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is my survey about?</AccordionTrigger>
          <AccordionContent>
            My survey seeks to determine which of the following AI models generates the most convincing phishing
            emails: GPT-4o (from OpenAI), Claude 3.7 Sonnet (from Anthropic), and Gemini 2.0 Flash (from Google).
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How long is the survey going to take?</AccordionTrigger>
          <AccordionContent>
            This survey should take about 3-5 minutes; it involves the participant answering one question about
            their knowledge of cybersecurity, reading an email, and answering one question about the authenticity
            of that email. After the participant submits the survey, no other action by the participant is required.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Who is able to participate?</AccordionTrigger>
          <AccordionContent>
            Participants muse be over the age of 18 to participate in this survey; otherwise, they will not be
            allowed to submit. Participating in this survey is completely voluntary, and if the participant
            chooses, they can freely stop taking the survey at any point in time.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>What about privacy?</AccordionTrigger>
          <AccordionContent>
            Please do not disclose any personally identifiable information on this survey. All of the results of
            the survey will be stored on a private computer only accessible with a password.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
