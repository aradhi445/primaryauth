import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type AnswerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OptionsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuestionsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AnswerUserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OptionsQuestionsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Answer {
  readonly id: string;
  readonly Option_text1?: string | null;
  readonly Option_text2?: string | null;
  readonly Option_text3?: string | null;
  readonly Option_text4?: string | null;
  readonly Users?: (AnswerUser | null)[] | null;
  readonly questionsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Answer, AnswerMetaData>);
  static copyOf(source: Answer, mutator: (draft: MutableModel<Answer, AnswerMetaData>) => MutableModel<Answer, AnswerMetaData> | void): Answer;
}

export declare class User {
  readonly id: string;
  readonly Username?: string | null;
  readonly questionsID: string;
  readonly optionsID: string;
  readonly answers?: (AnswerUser | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Options {
  readonly id: string;
  readonly Option1?: string | null;
  readonly Option2?: string | null;
  readonly Option3?: string | null;
  readonly Option4?: string | null;
  readonly Users?: Questions | null;
  readonly Questions?: (OptionsQuestions | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly optionsUsersId?: string | null;
  constructor(init: ModelInit<Options, OptionsMetaData>);
  static copyOf(source: Options, mutator: (draft: MutableModel<Options, OptionsMetaData>) => MutableModel<Options, OptionsMetaData> | void): Options;
}

export declare class Questions {
  readonly id: string;
  readonly Question_Text?: string | null;
  readonly optionss?: (OptionsQuestions | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Questions, QuestionsMetaData>);
  static copyOf(source: Questions, mutator: (draft: MutableModel<Questions, QuestionsMetaData>) => MutableModel<Questions, QuestionsMetaData> | void): Questions;
}

export declare class AnswerUser {
  readonly id: string;
  readonly answer: Answer;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<AnswerUser, AnswerUserMetaData>);
  static copyOf(source: AnswerUser, mutator: (draft: MutableModel<AnswerUser, AnswerUserMetaData>) => MutableModel<AnswerUser, AnswerUserMetaData> | void): AnswerUser;
}

export declare class OptionsQuestions {
  readonly id: string;
  readonly options: Options;
  readonly questions: Questions;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<OptionsQuestions, OptionsQuestionsMetaData>);
  static copyOf(source: OptionsQuestions, mutator: (draft: MutableModel<OptionsQuestions, OptionsQuestionsMetaData>) => MutableModel<OptionsQuestions, OptionsQuestionsMetaData> | void): OptionsQuestions;
}