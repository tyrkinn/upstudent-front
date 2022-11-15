/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A field whose value is a JSON Web Token (JWT): https://jwt.io/introduction. */
  JWT: any;
};

export type Answer = {
  __typename?: 'Answer';
  id: Scalars['ID'];
  text: Scalars['String'];
  valid: Scalars['Boolean'];
};

export type AnswersForQuizCreation = {
  text: Scalars['String'];
  valid: Scalars['Boolean'];
};

export type Auth = {
  __typename?: 'Auth';
  /** JWT access token */
  accessToken: Scalars['JWT'];
  /** JWT refresh token */
  refreshToken: Scalars['JWT'];
  user: User;
};

export type ChangePasswordInput = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type CheckAuthorInput = {
  quizId: Scalars['String'];
};

export type CheckAuthorResult = {
  __typename?: 'CheckAuthorResult';
  isAuthor: Scalars['Boolean'];
};

export type CreateAnswerInput = {
  text: Scalars['String'];
  valid: Scalars['Boolean'];
};

export type CreateFullQuizInput = {
  questions: Array<QuestionForQuizCreation>;
  title: Scalars['String'];
};

export type CreateQuestionInput = {
  answers: Array<CreateAnswerInput>;
  quizId: Scalars['String'];
  text: Scalars['String'];
};

export type CreateQuizInput = {
  title: Scalars['String'];
};

export type CreateQuizResultInput = {
  answerIds: Array<Scalars['String']>;
  quizId: Scalars['String'];
};

export type IsValidInput = {
  id: Scalars['String'];
};

export type IsValidResult = {
  __typename?: 'IsValidResult';
  isValid: Scalars['Boolean'];
};

export type ListQuizResults = {
  __typename?: 'ListQuizResults';
  id: Scalars['String'];
  points: Scalars['Int'];
  quizTitle: Scalars['String'];
  total: Scalars['Int'];
  userFullName: Scalars['String'];
};

export type ListQuizResultsInput = {
  quizId: Scalars['String'];
};

export type ListUserResultsOutput = {
  __typename?: 'ListUserResultsOutput';
  id: Scalars['String'];
  points: Scalars['Int'];
  quizId: Scalars['String'];
  quizTitle: Scalars['String'];
  total: Scalars['Int'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: User;
  createFullQuiz: Quiz;
  createQuestion: Question;
  createQuiz: Quiz;
  createQuizResult: QuizResult;
  login: Auth;
  refreshToken: Token;
  removeAnswer: Answer;
  removeQuestion: Question;
  removeQuiz: Quiz;
  signup: Auth;
  updateAnswer: Answer;
  updateQuiz: Quiz;
  updateText: Question;
  updateUser: User;
};


export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};


export type MutationCreateFullQuizArgs = {
  data: CreateFullQuizInput;
};


export type MutationCreateQuestionArgs = {
  data: CreateQuestionInput;
};


export type MutationCreateQuizArgs = {
  data: CreateQuizInput;
};


export type MutationCreateQuizResultArgs = {
  data: CreateQuizResultInput;
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationRefreshTokenArgs = {
  token: Scalars['JWT'];
};


export type MutationRemoveAnswerArgs = {
  id: Scalars['String'];
};


export type MutationRemoveQuestionArgs = {
  id: Scalars['String'];
};


export type MutationRemoveQuizArgs = {
  id: Scalars['String'];
};


export type MutationSignupArgs = {
  data: SignupInput;
};


export type MutationUpdateAnswerArgs = {
  data: UpdateAnswerInput;
};


export type MutationUpdateQuizArgs = {
  data: UpdateQuizInput;
};


export type MutationUpdateTextArgs = {
  updateQuestionInput: UpdateQuestionInput;
};


export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  allQuizes: Array<Quiz>;
  checkAuthor: CheckAuthorResult;
  hello: Scalars['String'];
  helloWorld: Scalars['String'];
  isValid: IsValidResult;
  listCreated: Array<Quiz>;
  listQuizResults: Array<ListQuizResults>;
  listUserResults: Array<ListUserResultsOutput>;
  me: User;
  question: Question;
  quiz: Quiz;
};


export type QueryCheckAuthorArgs = {
  data: CheckAuthorInput;
};


export type QueryHelloArgs = {
  name: Scalars['String'];
};


export type QueryIsValidArgs = {
  data: IsValidInput;
};


export type QueryListQuizResultsArgs = {
  data: ListQuizResultsInput;
};


export type QueryQuestionArgs = {
  id: Scalars['String'];
};


export type QueryQuizArgs = {
  id: Scalars['String'];
};

export type Question = {
  __typename?: 'Question';
  answers: Array<Answer>;
  id: Scalars['ID'];
  text: Scalars['String'];
};

export type QuestionForQuizCreation = {
  answers: Array<AnswersForQuizCreation>;
  text: Scalars['String'];
};

export type Quiz = {
  __typename?: 'Quiz';
  author: User;
  id: Scalars['ID'];
  questions: Array<Question>;
  results: Array<QuizResult>;
  title: Scalars['String'];
};

export type QuizResult = {
  __typename?: 'QuizResult';
  id: Scalars['ID'];
  points: Scalars['Int'];
  quiz: Quiz;
  user: User;
};

export type SignupInput = {
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  password: Scalars['String'];
};

export type Token = {
  __typename?: 'Token';
  /** JWT access token */
  accessToken: Scalars['JWT'];
  /** JWT refresh token */
  refreshToken: Scalars['JWT'];
};

export type UpdateAnswerInput = {
  id: Scalars['String'];
  text?: InputMaybe<Scalars['String']>;
  valid?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateQuestionInput = {
  id: Scalars['String'];
  text?: InputMaybe<Scalars['String']>;
};

export type UpdateQuizInput = {
  id: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  createdQuizes: Array<Quiz>;
  email: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastname?: Maybe<Scalars['String']>;
  results: Array<QuizResult>;
};

export type RefreshTokenMutationVariables = Exact<{
  token: Scalars['JWT'];
}>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: { __typename?: 'Token', accessToken: any } };

export type SignupMutationVariables = Exact<{
  data: SignupInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'Auth', accessToken: any, refreshToken: any } };

export type LoginMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Auth', accessToken: any, refreshToken: any, user: { __typename?: 'User', firstname?: string | null, lastname?: string | null, email: string } } };

export type CreateQuizMutationVariables = Exact<{
  data: CreateFullQuizInput;
}>;


export type CreateQuizMutation = { __typename?: 'Mutation', createFullQuiz: { __typename?: 'Quiz', id: string } };

export type CreateResultMutationVariables = Exact<{
  data: CreateQuizResultInput;
}>;


export type CreateResultMutation = { __typename?: 'Mutation', createQuizResult: { __typename?: 'QuizResult', id: string } };

export type CheckAuthorQueryVariables = Exact<{ [key: string]: never; }>;


export type CheckAuthorQuery = { __typename?: 'Query', checkAuthor: { __typename?: 'CheckAuthorResult', isAuthor: boolean } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', firstname?: string | null, lastname?: string | null, email: string } };

export type GetAllQuizesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllQuizesQuery = { __typename?: 'Query', allQuizes: Array<{ __typename?: 'Quiz', id: string, title: string, author: { __typename?: 'User', firstname?: string | null, lastname?: string | null } }> };

export type GetUserResultsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserResultsQuery = { __typename?: 'Query', listUserResults: Array<{ __typename?: 'ListUserResultsOutput', id: string, quizTitle: string, quizId: string, points: number, total: number }> };

export type GetCreatedQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCreatedQuery = { __typename?: 'Query', listCreated: Array<{ __typename?: 'Quiz', id: string, title: string }> };

export type GetQuizQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetQuizQuery = { __typename?: 'Query', quiz: { __typename?: 'Quiz', id: string, title: string, questions: Array<{ __typename?: 'Question', id: string, text: string, answers: Array<{ __typename?: 'Answer', id: string, text: string, valid: boolean }> }> } };

export type GetQuizResultsQueryVariables = Exact<{
  data: ListQuizResultsInput;
}>;


export type GetQuizResultsQuery = { __typename?: 'Query', listQuizResults: Array<{ __typename?: 'ListQuizResults', id: string, points: number, total: number, userFullName: string }> };


export const RefreshTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RefreshToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JWT"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refreshToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const SignupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Signup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignupInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<SignupMutation, SignupMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const CreateQuizDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateQuiz"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateFullQuizInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFullQuiz"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateQuizMutation, CreateQuizMutationVariables>;
export const CreateResultDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateResult"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateQuizResultInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createQuizResult"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateResultMutation, CreateResultMutationVariables>;
export const CheckAuthorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CheckAuthor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkAuthor"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"quizId"},"value":{"kind":"StringValue","value":"cl9ws0ggu0016utrwhh9e1y8j","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isAuthor"}}]}}]}}]} as unknown as DocumentNode<CheckAuthorQuery, CheckAuthorQueryVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const GetAllQuizesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllQuizes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allQuizes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllQuizesQuery, GetAllQuizesQueryVariables>;
export const GetUserResultsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserResults"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listUserResults"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quizTitle"}},{"kind":"Field","name":{"kind":"Name","value":"quizId"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<GetUserResultsQuery, GetUserResultsQueryVariables>;
export const GetCreatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<GetCreatedQuery, GetCreatedQueryVariables>;
export const GetQuizDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetQuiz"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quiz"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"answers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"valid"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetQuizQuery, GetQuizQueryVariables>;
export const GetQuizResultsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetQuizResults"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListQuizResultsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listQuizResults"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"userFullName"}}]}}]}}]} as unknown as DocumentNode<GetQuizResultsQuery, GetQuizResultsQueryVariables>;