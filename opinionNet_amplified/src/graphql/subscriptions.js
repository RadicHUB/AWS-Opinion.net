/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStarFactOpinion = /* GraphQL */ `
  subscription OnCreateStarFactOpinion(
    $filter: ModelSubscriptionStarFactOpinionFilterInput
  ) {
    onCreateStarFactOpinion(filter: $filter) {
      id
      UserKey
      PostKey
      VoteKey
      Post_exp_date
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStarFactOpinion = /* GraphQL */ `
  subscription OnUpdateStarFactOpinion(
    $filter: ModelSubscriptionStarFactOpinionFilterInput
  ) {
    onUpdateStarFactOpinion(filter: $filter) {
      id
      UserKey
      PostKey
      VoteKey
      Post_exp_date
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStarFactOpinion = /* GraphQL */ `
  subscription OnDeleteStarFactOpinion(
    $filter: ModelSubscriptionStarFactOpinionFilterInput
  ) {
    onDeleteStarFactOpinion(filter: $filter) {
      id
      UserKey
      PostKey
      VoteKey
      Post_exp_date
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStarDimVote = /* GraphQL */ `
  subscription OnCreateStarDimVote(
    $filter: ModelSubscriptionStarDimVoteFilterInput
  ) {
    onCreateStarDimVote(filter: $filter) {
      id
      Vote_choice
      Vote_choice_remove
      Vote_last_applied
      StarFactOpinion {
        items {
          id
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
export const onUpdateStarDimVote = /* GraphQL */ `
  subscription OnUpdateStarDimVote(
    $filter: ModelSubscriptionStarDimVoteFilterInput
  ) {
    onUpdateStarDimVote(filter: $filter) {
      id
      Vote_choice
      Vote_choice_remove
      Vote_last_applied
      StarFactOpinion {
        items {
          id
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
export const onDeleteStarDimVote = /* GraphQL */ `
  subscription OnDeleteStarDimVote(
    $filter: ModelSubscriptionStarDimVoteFilterInput
  ) {
    onDeleteStarDimVote(filter: $filter) {
      id
      Vote_choice
      Vote_choice_remove
      Vote_last_applied
      StarFactOpinion {
        items {
          id
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
export const onCreateStarDimUser = /* GraphQL */ `
  subscription OnCreateStarDimUser(
    $filter: ModelSubscriptionStarDimUserFilterInput
  ) {
    onCreateStarDimUser(filter: $filter) {
      id
      User_age
      User_gender
      User_institution
      StarFactOpinion {
        items {
          id
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
export const onUpdateStarDimUser = /* GraphQL */ `
  subscription OnUpdateStarDimUser(
    $filter: ModelSubscriptionStarDimUserFilterInput
  ) {
    onUpdateStarDimUser(filter: $filter) {
      id
      User_age
      User_gender
      User_institution
      StarFactOpinion {
        items {
          id
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
export const onDeleteStarDimUser = /* GraphQL */ `
  subscription OnDeleteStarDimUser(
    $filter: ModelSubscriptionStarDimUserFilterInput
  ) {
    onDeleteStarDimUser(filter: $filter) {
      id
      User_age
      User_gender
      User_institution
      StarFactOpinion {
        items {
          id
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
export const onCreateStarDimPost = /* GraphQL */ `
  subscription OnCreateStarDimPost(
    $filter: ModelSubscriptionStarDimPostFilterInput
  ) {
    onCreateStarDimPost(filter: $filter) {
      id
      Post_text
      Post_posting_date
      Post_connotation_header
      StarFactOpinion {
        items {
          id
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
export const onUpdateStarDimPost = /* GraphQL */ `
  subscription OnUpdateStarDimPost(
    $filter: ModelSubscriptionStarDimPostFilterInput
  ) {
    onUpdateStarDimPost(filter: $filter) {
      id
      Post_text
      Post_posting_date
      Post_connotation_header
      StarFactOpinion {
        items {
          id
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
export const onDeleteStarDimPost = /* GraphQL */ `
  subscription OnDeleteStarDimPost(
    $filter: ModelSubscriptionStarDimPostFilterInput
  ) {
    onDeleteStarDimPost(filter: $filter) {
      id
      Post_text
      Post_posting_date
      Post_connotation_header
      StarFactOpinion {
        items {
          id
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
