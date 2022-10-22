// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { StarFactOpinion, StarDimVote, StarDimUser, StarDimPost } = initSchema(schema);

export {
  StarFactOpinion,
  StarDimVote,
  StarDimUser,
  StarDimPost
};