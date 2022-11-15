/* eslint-disable @typescript-eslint/naming-convention */
import { graphql } from './gql/gql';

export const CHECK_AUTHOR = graphql(`
query CheckAuthor {
  checkAuthor(data: {quizId: "cl9ws0ggu0016utrwhh9e1y8j"}) {
    isAuthor
  }
}
`);

export const ME = graphql(`
  query Me {
    me {
      firstname
      lastname 
      email
    }
  }  
`);

export const GET_ALL_QUIZES = graphql(`
  query GetAllQuizes {
    allQuizes {
      id
      title
      author {
        firstname
        lastname
      }
    }
  }
`);

export const GET_RESULTS = graphql(`
  query GetUserResults { 
    listUserResults {
      id
      quizTitle
      points
      total
    }
  }
`);

export const GET_CREATED = graphql(`
  query GetCreated { 
    listCreated {
      id
      title
    }
  }
`);
