import { ConditionalText, KeyQuestions } from "../types/survey";

export function replacePlaceholders(
  text: string,
  conditionalText: ConditionalText,
  userAnswers: Record<string, string>,
  keyQuestions: KeyQuestions,
): string {
  return text.replace(/\{(\w+)\}/g, (_, key) => {
    const keyQuestionId = keyQuestions[key];
    const answer = userAnswers[keyQuestionId];
    return answer && conditionalText[key]?.[answer] !== undefined
      ? conditionalText[key][answer]
      : "";
  });
}
