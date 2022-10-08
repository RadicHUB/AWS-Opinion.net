/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createStarFactOpinion = /* GraphQL */ `
  mutation CreateStarFactOpinion(
    $input: CreateStarFactOpinionInput!
    $condition: ModelStarFactOpinionConditionInput
  ) {
    createStarFactOpinion(input: $input, condition: $condition) {
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
export const updateStarFactOpinion = /* GraphQL */ `
  mutation UpdateStarFactOpinion(
    $input: UpdateStarFactOpinionInput!
    $condition: ModelStarFactOpinionConditionInput
  ) {
    updateStarFactOpinion(input: $input, condition: $condition) {
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
export const deleteStarFactOpinion = /* GraphQL */ `
  mutation DeleteStarFactOpinion(
    $input: DeleteStarFactOpinionInput!
    $condition: ModelStarFactOpinionConditionInput
  ) {
    deleteStarFactOpinion(input: $input, condition: $condition) {
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
export const createStarDimVote = /* GraphQL */ `
  mutation CreateStarDimVote(
    $input: CreateStarDimVoteInput!
    $condition: ModelStarDimVoteConditionInput
  ) {
    createStarDimVote(input: $input, condition: $condition) {
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
export const updateStarDimVote = /* GraphQL */ `
  mutation UpdateStarDimVote(
    $input: UpdateStarDimVoteInput!
    $condition: ModelStarDimVoteConditionInput
  ) {
    updateStarDimVote(input: $input, condition: $condition) {
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
export const deleteStarDimVote = /* GraphQL */ `
  mutation DeleteStarDimVote(
    $input: DeleteStarDimVoteInput!
    $condition: ModelStarDimVoteConditionInput
  ) {
    deleteStarDimVote(input: $input, condition: $condition) {
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
export const createStarDimUser = /* GraphQL */ `
  mutation CreateStarDimUser(
    $input: CreateStarDimUserInput!
    $condition: ModelStarDimUserConditionInput
  ) {
    createStarDimUser(input: $input, condition: $condition) {
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
export const updateStarDimUser = /* GraphQL */ `
  mutation UpdateStarDimUser(
    $input: UpdateStarDimUserInput!
    $condition: ModelStarDimUserConditionInput
  ) {
    updateStarDimUser(input: $input, condition: $condition) {
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
export const deleteStarDimUser = /* GraphQL */ `
  mutation DeleteStarDimUser(
    $input: DeleteStarDimUserInput!
    $condition: ModelStarDimUserConditionInput
  ) {
    deleteStarDimUser(input: $input, condition: $condition) {
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
export const createStarDimPost = /* GraphQL */ `
  mutation CreateStarDimPost(
    $input: CreateStarDimPostInput!
    $condition: ModelStarDimPostConditionInput
  ) {
    createStarDimPost(input: $input, condition: $condition) {
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
export const updateStarDimPost = /* GraphQL */ `
  mutation UpdateStarDimPost(
    $input: UpdateStarDimPostInput!
    $condition: ModelStarDimPostConditionInput
  ) {
    updateStarDimPost(input: $input, condition: $condition) {
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
export const deleteStarDimPost = /* GraphQL */ `
  mutation DeleteStarDimPost(
    $input: DeleteStarDimPostInput!
    $condition: ModelStarDimPostConditionInput
  ) {
    deleteStarDimPost(input: $input, condition: $condition) {
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
