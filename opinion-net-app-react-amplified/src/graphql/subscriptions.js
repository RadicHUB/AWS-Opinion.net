/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStarFactOpinion = /* GraphQL */ `
  subscription OnCreateStarFactOpinion {
    onCreateStarFactOpinion {
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
export const onUpdateStarFactOpinion = /* GraphQL */ `
  subscription OnUpdateStarFactOpinion {
    onUpdateStarFactOpinion {
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
export const onDeleteStarFactOpinion = /* GraphQL */ `
  subscription OnDeleteStarFactOpinion {
    onDeleteStarFactOpinion {
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
export const onCreateStarDimVote = /* GraphQL */ `
  subscription OnCreateStarDimVote {
    onCreateStarDimVote {
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
export const onUpdateStarDimVote = /* GraphQL */ `
  subscription OnUpdateStarDimVote {
    onUpdateStarDimVote {
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
export const onDeleteStarDimVote = /* GraphQL */ `
  subscription OnDeleteStarDimVote {
    onDeleteStarDimVote {
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
export const onCreateStarDimUser = /* GraphQL */ `
  subscription OnCreateStarDimUser {
    onCreateStarDimUser {
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
export const onUpdateStarDimUser = /* GraphQL */ `
  subscription OnUpdateStarDimUser {
    onUpdateStarDimUser {
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
export const onDeleteStarDimUser = /* GraphQL */ `
  subscription OnDeleteStarDimUser {
    onDeleteStarDimUser {
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
export const onCreateStarDimPost = /* GraphQL */ `
  subscription OnCreateStarDimPost {
    onCreateStarDimPost {
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
export const onUpdateStarDimPost = /* GraphQL */ `
  subscription OnUpdateStarDimPost {
    onUpdateStarDimPost {
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
export const onDeleteStarDimPost = /* GraphQL */ `
  subscription OnDeleteStarDimPost {
    onDeleteStarDimPost {
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
