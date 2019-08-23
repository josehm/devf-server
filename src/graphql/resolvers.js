import { createTag, getTags } from '../actions/tagActions';
import { createContent, getContents } from '../actions/contentActions';
import { createMedia, getMedias } from '../actions/mediaActions';
import { createCategory, getCategories } from '../actions/categoryActions';

    
const resolvers = {
    Query: {
        getTags: async (parent, args, context, info) => {
            try {
              return await getTags();
            } catch (error) {
              return null;
            }
        },
        getContents: async (parent, args, context, info) => {
            try {
              return await getContents();
            } catch (error) {
              return null;
            }
        },
        getMedias: async (parent, args, context, info) => {
            try {
              return await getMedias();
            } catch (error) {
              return null;
            }
        },
        getCategories: async (parent, args, context, info) => {
            try {
              return await getCategories();
            } catch (error) {
              return null;
            }
        },
    },
    Mutation: {
        addTag: async (parent, args, context, info) => await createTag(args.data),
        addContent: async (parent, args, context, info) => await createContent(args.data),
        addMedia: async (parent, args, context, info) => await createMedia(args.data),
        addCategory: async (parent, args, context, info) => await createCategory(args.data),
    }
};


export default resolvers;