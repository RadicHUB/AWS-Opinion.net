/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStarFactOpinion = /* GraphQL */ `
  query GetStarFactOpinion($id: ID!) {
    getStarFactOpinion(id: $id) {
      id
      Opinionkey
      UserKey
      PostKey
      VoteKey
      Post_exp_date
      createdAt
      updatedAt
    }
  }
`;
export const listStarFactOpinions = /* GraphQL */ `
  query ListStarFactOpinions(
    $filter: ModelStarFactOpinionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStarFactOpinions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Opinionkey
        UserKey
        PostKey
        VoteKey
        Post_exp_date
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStarDimVote = /* GraphQL */ `
  query GetStarDimVote($id: ID!) {
    getStarDimVote(id: $id) {
      id
      Vote_id
      Vote_choice
      Vote_choice_remove
      Vote_last_applied
      StarFactOpinion {
        items {
          id
          Opinionkey
          UserKey
          PostKey
          VoteKey
          Post_exp_date
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listStarDimVotes = /* GraphQL */ `
  query ListStarDimVotes(
    $filter: ModelStarDimVoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStarDimVotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Vote_id
        Vote_choice
        Vote_choice_remove
        Vote_last_applied
        StarFactOpinion {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStarDimUser = /* GraphQL */ `
  query GetStarDimUser($id: ID!) {
    getStarDimUser(id: $id) {
      id
      User_id
      User_age
      User_gender
      User_institution
      StarFactOpinion {
        items {
          id
          Opinionkey
          UserKey
          PostKey
          VoteKey
          Post_exp_date
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listStarDimUsers = /* GraphQL */ `
  query ListStarDimUsers(
    $filter: ModelStarDimUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStarDimUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        User_id
        User_age
        User_gender
        User_institution
        StarFactOpinion {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStarDimPost = /* GraphQL */ `
  query GetStarDimPost($id: ID!) {
    getStarDimPost(id: $id) {
      id
      Post_id
      Post_text
      Post_posting_date
      Post_connotation_header
      StarFactOpinion {
        items {
          id
          Opinionkey
          UserKey
          PostKey
          VoteKey
          Post_exp_date
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listStarDimPosts = /* GraphQL */ `
  query ListStarDimPosts(
    $filter: ModelStarDimPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStarDimPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Post_id
        Post_text
        Post_posting_date
        Post_connotation_header
        StarFactOpinion {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
