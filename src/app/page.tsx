"use client";

import { useRouter } from "next/navigation";
import { BaseSurveyQuestion } from "./types/survey";
import surveyConfig from "@/src/app/data/surveyConfig.json";
import styles from "./style.module.css";
import clsx from "clsx";
import Button from "./components/ui/Button";
import Header from "./components/layout/Header";

export default function HomePage() {
  const router = useRouter();

  const firstQuestion: BaseSurveyQuestion | undefined =
    surveyConfig.questions[0];

  const handleStartSurvey = () => {
    if (firstQuestion) {
      router.push(`/${firstQuestion.id}`);
    }
  };

  return (
    <div className={clsx(styles.gradientBackground, "min-h-screen")}>
      <Header />

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
          <Button className="w-full" onClick={handleStartSurvey}>
            Start Survey
          </Button>
        </div>
      </div>
    </div>
  );
}
