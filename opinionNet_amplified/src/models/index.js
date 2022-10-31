// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Todo, Pages, StarFactOpinion, StarDimVote, StarDimUser, StarDimPost } = initSchema(schema);

export {
  Todo,
  Pages,
  StarFactOpinion,
  StarDimVote,
  StarDimUser,
  StarDimPost
};