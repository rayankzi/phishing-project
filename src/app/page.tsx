import { Button, buttonVariants } from "@/components/ui/button"
import { QuestionAccordion } from "@/components/QuestionAccordion";
import Link from "next/link";
import {cn} from "@/lib/utils";

export default function Home() {
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
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "default" }), "w-full")}
          >
            Click here to access the survey
          </Link>
        </div>


      </div>
    </div>
  );
}
