"use client"

import { Button } from "@/components/ui/button"
import { QuestionAccordion } from "@/components/QuestionAccordion";
import type { MouseEventHandler } from "react";
import { sendToNewLink } from "@/app/actions";

export default function Home() {
  const urls: string[] = [
    "https://forms.gle/jTEsijvRaN9rZSPF8",
    "https://forms.gle/aSYQfYQqW3vj1hdr8",
    "https://forms.gle/zFw5UyYwxD66k3J1A",
    "https://forms.gle/KJDfefbTJTuDuLZg9"
  ]

  const redirectToSurvey: MouseEventHandler<HTMLButtonElement> = (e) => {
    const url = urls[Math.floor(Math.random() * urls.length)]

    sendToNewLink(url)
    e.preventDefault()
  }

  return (
    <div className="p-4 md:p-0 md:pt-4 md:flex md:justify-center md:items-center md:mx-auto md:w-2/5">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Generating Phishing Emails with AI: Which Email Does It Best?</h1>

        <p>
          Hello! I am humbly asking you for voluntary participation in a survey for my independent research project.
          This is for my Advanced Placement Research class, where students are required to complete a year long
          research project on a topic of inquiry they desire.
        </p>

        <QuestionAccordion />


        <p>Remember that participation in this survey is completely voluntary!</p>

        <p>Anything mentioned in the emails participants read are completely fictional and have no relation to the real world.</p>


        <div className="w-full">
          <Button className="w-full cursor-pointer" onClick={redirectToSurvey}>Click here to access the survey</Button>
        </div>
      </div>
    </div>
  );
}
