export class CreateQuestionDto {
  text: string;
  type: QuestionType;
}

export enum QuestionType {
  SINGLE_CHOICE,
  MULTIPLE_CHOICE,
  DISSERTATION,
}
