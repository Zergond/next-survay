import survey from "@/src/data/surveyConfig.json";
import Header from "@/src/components/Header";
import Question from "@/src/components/Question";
import { SurveyQuestion } from "@/src/types/survey";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
  return survey.questions.map((q) => ({
    id: q.id,
  }));
}

interface QuestionPageParams {
  params: { id: string };
}

export default async function QuestionPage({ params }: QuestionPageParams) {
  const { id } = await params;
  const question = survey.questions.find((q) => q.id === id) as SurveyQuestion;

  if (!question) {
    redirect("/");
  }

  return (
    <div>
      <Header question={question} />
      <div className="grid grid-cols-[320px] justify-center">
        <Question question={question} />
      </div>
    </div>
  );
}
