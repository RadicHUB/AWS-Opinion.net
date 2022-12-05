import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StarFactOpinionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StarDimUserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StarDimPostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerTodo = {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly isComplete?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTodo = {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly isComplete?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Todo = LazyLoading extends LazyLoadingDisabled ? EagerTodo : LazyTodo

export declare const Todo: (new (init: ModelInit<Todo, TodoMetaData>) => Todo) & {
  copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}

type EagerStarFactOpinion = {
  readonly id: string;
  readonly PostKey: string;
  readonly UserKey: string;
  readonly Vote?: string | null;
  readonly Post_exp_date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStarFactOpinion = {
  readonly id: string;
  readonly PostKey: string;
  readonly UserKey: string;
  readonly Vote?: string | null;
  readonly Post_exp_date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StarFactOpinion = LazyLoading extends LazyLoadingDisabled ? EagerStarFactOpinion : LazyStarFactOpinion

export declare const StarFactOpinion: (new (init: ModelInit<StarFactOpinion, StarFactOpinionMetaData>) => StarFactOpinion) & {
  copyOf(source: StarFactOpinion, mutator: (draft: MutableModel<StarFactOpinion, StarFactOpinionMetaData>) => MutableModel<StarFactOpinion, StarFactOpinionMetaData> | void): StarFactOpinion;
}

type EagerStarDimUser = {
  readonly id: string;
  readonly StarFactOpinion?: (StarFactOpinion | null)[] | null;
  readonly User_Email?: string | null;
  readonly User_ID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStarDimUser = {
  readonly id: string;
  readonly StarFactOpinion: AsyncCollection<StarFactOpinion>;
  readonly User_Email?: string | null;
  readonly User_ID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StarDimUser = LazyLoading extends LazyLoadingDisabled ? EagerStarDimUser : LazyStarDimUser

export declare const StarDimUser: (new (init: ModelInit<StarDimUser, StarDimUserMetaData>) => StarDimUser) & {
  copyOf(source: StarDimUser, mutator: (draft: MutableModel<StarDimUser, StarDimUserMetaData>) => MutableModel<StarDimUser, StarDimUserMetaData> | void): StarDimUser;
}

type EagerStarDimPost = {
  readonly id: string;
  readonly Post_text?: string | null;
  readonly Post_posting_date?: string | null;
  readonly Post_sentiment?: string | null;
  readonly StarFactOpinion?: (StarFactOpinion | null)[] | null;
  readonly Post_classify?: string | null;
  readonly Post_closest?: string | null;
  readonly Vote_last_applied?: string | null;
  readonly Post_user?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStarDimPost = {
  readonly id: string;
  readonly Post_text?: string | null;
  readonly Post_posting_date?: string | null;
  readonly Post_sentiment?: string | null;
  readonly StarFactOpinion: AsyncCollection<StarFactOpinion>;
  readonly Post_classify?: string | null;
  readonly Post_closest?: string | null;
  readonly Vote_last_applied?: string | null;
  readonly Post_user?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StarDimPost = LazyLoading extends LazyLoadingDisabled ? EagerStarDimPost : LazyStarDimPost

export declare const StarDimPost: (new (init: ModelInit<StarDimPost, StarDimPostMetaData>) => StarDimPost) & {
  copyOf(source: StarDimPost, mutator: (draft: MutableModel<StarDimPost, StarDimPostMetaData>) => MutableModel<StarDimPost, StarDimPostMetaData> | void): StarDimPost;
}