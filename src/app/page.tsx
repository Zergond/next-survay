import { BaseSurveyQuestion } from "../types/survey";
import surveyConfig from "@/src/data/surveyConfig.json";
import Button from "../components/ui/Button";
import Header from "../components/Header";
import Link from "next/link";

export default function HomePage() {
  const firstQuestion = surveyConfig.questions[0] as BaseSurveyQuestion;

  return (
    <div className="min-h-screen bg-purple-gradient">
      <Header question={firstQuestion} />

      <div className="flex flex-col items-center justify-center">
        <div className="w-full max-w-80 text-center">
          <h1 className="mb-4 text-2xl font-bold text-white">
            So how does it work?
          </h1>
          <p className="mb-6 text-sm text-white">
            We analyze hundreds of data points to create your unique
            astrological blueprint. This is combined with AI to tailor-make your
            astrological insights, based on your answers. We&apos;re going to
            change your relationship with astrology.
          </p>
          <Link href={`/question/${firstQuestion.id}`}>
            <Button className="w-full">Start Survey</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
