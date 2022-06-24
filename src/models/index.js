// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Answer, User, Options, Questions, AnswerUser, OptionsQuestions } = initSchema(schema);

export {
  Answer,
  User,
  Options,
  Questions,
  AnswerUser,
  OptionsQuestions
};