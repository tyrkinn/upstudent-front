/* eslint-disable @typescript-eslint/naming-convention */
import {graphql} from './gql/gql';

export const REFRESH_TOKEN = graphql(`
mutation RefreshToken($token: JWT!) {
  refreshToken(token: $token) {
    accessToken
  }
}
`);

export const SIGNUP = graphql(`
  mutation Signup($data: SignupInput!) {
    signup(data: $data) {
      accessToken
      refreshToken
    }
  }
`);

export const LOGIN = graphql(`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      user {
        firstname
        lastname
        email
      }
      accessToken
      refreshToken
    }
  }
`);

export const CREATE_QUIZ = graphql(`
  mutation CreateQuiz($data: CreateFullQuizInput!) {
    createFullQuiz(data: $data) {
      id
    }
  }
`);

export const CREATE_RESULT = graphql(`
  mutation CreateResult($data: CreateQuizResultInput!) {
    createQuizResult(data: $data) {
      id
    }
  }
`);
