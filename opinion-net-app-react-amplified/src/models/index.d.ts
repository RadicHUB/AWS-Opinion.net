import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StarFactOpinionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StarDimVoteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StarDimUserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StarDimPostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Todo {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Todo, TodoMetaData>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}

export declare class StarFactOpinion {
  readonly id: string;
  readonly Opinionkey?: number | null;
  readonly UserKey: string;
  readonly PostKey: string;
  readonly VoteKey: string;
  readonly Post_exp_date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<StarFactOpinion, StarFactOpinionMetaData>);
  static copyOf(source: StarFactOpinion, mutator: (draft: MutableModel<StarFactOpinion, StarFactOpinionMetaData>) => MutableModel<StarFactOpinion, StarFactOpinionMetaData> | void): StarFactOpinion;
}

export declare class StarDimVote {
  readonly id: string;
  readonly Vote_id?: string | null;
  readonly Vote_choice?: number | null;
  readonly Vote_choice_remove?: number | null;
  readonly Vote_last_applied?: string | null;
  readonly StarFactOpinion?: (StarFactOpinion | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<StarDimVote, StarDimVoteMetaData>);
  static copyOf(source: StarDimVote, mutator: (draft: MutableModel<StarDimVote, StarDimVoteMetaData>) => MutableModel<StarDimVote, StarDimVoteMetaData> | void): StarDimVote;
}

export declare class StarDimUser {
  readonly id: string;
  readonly User_id?: string | null;
  readonly User_age?: string | null;
  readonly User_gender?: string | null;
  readonly User_institution?: string | null;
  readonly StarFactOpinion?: (StarFactOpinion | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<StarDimUser, StarDimUserMetaData>);
  static copyOf(source: StarDimUser, mutator: (draft: MutableModel<StarDimUser, StarDimUserMetaData>) => MutableModel<StarDimUser, StarDimUserMetaData> | void): StarDimUser;
}

export declare class StarDimPost {
  readonly id: string;
  readonly Post_id?: string | null;
  readonly Post_text?: string | null;
  readonly Post_posting_date?: string | null;
  readonly Post_connotation_header?: string | null;
  readonly StarFactOpinion?: (StarFactOpinion | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<StarDimPost, StarDimPostMetaData>);
  static copyOf(source: StarDimPost, mutator: (draft: MutableModel<StarDimPost, StarDimPostMetaData>) => MutableModel<StarDimPost, StarDimPostMetaData> | void): StarDimPost;
}