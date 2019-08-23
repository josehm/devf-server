import { gql } from 'apollo-server';

const typeDefs = gql`

type Category {
    _id: ID
    title: String
    description: String
}
input CategoryInput {
    title: String
    description: String 
}

type Tag {
    _id: ID
    title: String
    description: String
}
input TagInput {
    title: String
    description: String 
}

type Content {
    _id: ID
    title: String
    description: String
    releaseDate: String
    genres: String
    clasaification: String
}
input ContentInput {
    title: String
    description: String
    releaseDate: String
    genres: String
    clasaification: String
}

type Media {
    _id: ID
    title: String
    description: String
    releaseDate: String
    mediaAddress: String
    season: String
    chapter: String
    order: Int
    contentID: String
}
input MediaInput {
    title: String
    description: String
    releaseDate: String
    mediaAddress: String
    season: String
    chapter: String
    order: Int
    contentID: String
}

# (A "Mutation" type will be covered later on.)
type Mutation {
    addTag(data: TagInput) : Tag
    addContent(data: ContentInput) : Content
    addMedia(data: MediaInput) : Media
    addCategory(data: CategoryInput) : Category
}

# The "Query" type is the root of all GraphQL queries.
type Query {
  getTags: [Tag]
  getContents: [Content]
  getMedias: [Media]
  getCategories: [Category]
}
`;


export default typeDefs;


