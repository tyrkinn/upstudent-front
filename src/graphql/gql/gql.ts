/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\nmutation RefreshToken($token: JWT!) {\n  refreshToken(token: $token) {\n    accessToken\n  }\n}\n": types.RefreshTokenDocument,
    "\n  mutation Signup($data: SignupInput!) {\n    signup(data: $data) {\n      accessToken\n      refreshToken\n    }\n  }\n": types.SignupDocument,
    "\n  mutation Login($data: LoginInput!) {\n    login(data: $data) {\n      user {\n        firstname\n        lastname\n        email\n      }\n      accessToken\n      refreshToken\n    }\n  }\n": types.LoginDocument,
    "\n  mutation CreateQuiz($data: CreateFullQuizInput!) {\n    createFullQuiz(data: $data) {\n      id\n    }\n  }\n": types.CreateQuizDocument,
    "\n  mutation CreateResult($data: CreateQuizResultInput!) {\n    createQuizResult(data: $data) {\n      id\n    }\n  }\n": types.CreateResultDocument,
    "\nquery CheckAuthor {\n  checkAuthor(data: {quizId: \"cl9ws0ggu0016utrwhh9e1y8j\"}) {\n    isAuthor\n  }\n}\n": types.CheckAuthorDocument,
    "\n  query Me {\n    me {\n      firstname\n      lastname \n      email\n    }\n  }  \n": types.MeDocument,
    "\n  query GetAllQuizes {\n    allQuizes {\n      id\n      title\n      author {\n        firstname\n        lastname\n      }\n    }\n  }\n": types.GetAllQuizesDocument,
    "\n  query GetUserResults { \n    listUserResults {\n      id\n      quizTitle\n      quizId\n      points\n      total\n    }\n  }\n": types.GetUserResultsDocument,
    "\n  query GetCreated { \n    listCreated {\n      id\n      title\n    }\n  }\n": types.GetCreatedDocument,
    "\n  query GetQuiz($id: String!) { \n    quiz(id: $id) {\n      id\n      title\n      questions {\n        id\n        text\n        answers {\n          id\n          text\n          valid\n        }\n      }\n    }\n  }\n": types.GetQuizDocument,
    "\n  query GetQuizResults($data: ListQuizResultsInput!) { \n    listQuizResults(data: $data) {\n        id\n        points\n        total\n        userFullName\n    }\n  }\n": types.GetQuizResultsDocument,
};

export function graphql(source: "\nmutation RefreshToken($token: JWT!) {\n  refreshToken(token: $token) {\n    accessToken\n  }\n}\n"): (typeof documents)["\nmutation RefreshToken($token: JWT!) {\n  refreshToken(token: $token) {\n    accessToken\n  }\n}\n"];
export function graphql(source: "\n  mutation Signup($data: SignupInput!) {\n    signup(data: $data) {\n      accessToken\n      refreshToken\n    }\n  }\n"): (typeof documents)["\n  mutation Signup($data: SignupInput!) {\n    signup(data: $data) {\n      accessToken\n      refreshToken\n    }\n  }\n"];
export function graphql(source: "\n  mutation Login($data: LoginInput!) {\n    login(data: $data) {\n      user {\n        firstname\n        lastname\n        email\n      }\n      accessToken\n      refreshToken\n    }\n  }\n"): (typeof documents)["\n  mutation Login($data: LoginInput!) {\n    login(data: $data) {\n      user {\n        firstname\n        lastname\n        email\n      }\n      accessToken\n      refreshToken\n    }\n  }\n"];
export function graphql(source: "\n  mutation CreateQuiz($data: CreateFullQuizInput!) {\n    createFullQuiz(data: $data) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateQuiz($data: CreateFullQuizInput!) {\n    createFullQuiz(data: $data) {\n      id\n    }\n  }\n"];
export function graphql(source: "\n  mutation CreateResult($data: CreateQuizResultInput!) {\n    createQuizResult(data: $data) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateResult($data: CreateQuizResultInput!) {\n    createQuizResult(data: $data) {\n      id\n    }\n  }\n"];
export function graphql(source: "\nquery CheckAuthor {\n  checkAuthor(data: {quizId: \"cl9ws0ggu0016utrwhh9e1y8j\"}) {\n    isAuthor\n  }\n}\n"): (typeof documents)["\nquery CheckAuthor {\n  checkAuthor(data: {quizId: \"cl9ws0ggu0016utrwhh9e1y8j\"}) {\n    isAuthor\n  }\n}\n"];
export function graphql(source: "\n  query Me {\n    me {\n      firstname\n      lastname \n      email\n    }\n  }  \n"): (typeof documents)["\n  query Me {\n    me {\n      firstname\n      lastname \n      email\n    }\n  }  \n"];
export function graphql(source: "\n  query GetAllQuizes {\n    allQuizes {\n      id\n      title\n      author {\n        firstname\n        lastname\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAllQuizes {\n    allQuizes {\n      id\n      title\n      author {\n        firstname\n        lastname\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query GetUserResults { \n    listUserResults {\n      id\n      quizTitle\n      quizId\n      points\n      total\n    }\n  }\n"): (typeof documents)["\n  query GetUserResults { \n    listUserResults {\n      id\n      quizTitle\n      quizId\n      points\n      total\n    }\n  }\n"];
export function graphql(source: "\n  query GetCreated { \n    listCreated {\n      id\n      title\n    }\n  }\n"): (typeof documents)["\n  query GetCreated { \n    listCreated {\n      id\n      title\n    }\n  }\n"];
export function graphql(source: "\n  query GetQuiz($id: String!) { \n    quiz(id: $id) {\n      id\n      title\n      questions {\n        id\n        text\n        answers {\n          id\n          text\n          valid\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetQuiz($id: String!) { \n    quiz(id: $id) {\n      id\n      title\n      questions {\n        id\n        text\n        answers {\n          id\n          text\n          valid\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query GetQuizResults($data: ListQuizResultsInput!) { \n    listQuizResults(data: $data) {\n        id\n        points\n        total\n        userFullName\n    }\n  }\n"): (typeof documents)["\n  query GetQuizResults($data: ListQuizResultsInput!) { \n    listQuizResults(data: $data) {\n        id\n        points\n        total\n        userFullName\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;