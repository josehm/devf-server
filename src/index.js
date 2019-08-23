require("dotenv").config();

import { ApolloServer } from 'apollo-server';
import mongoose from "mongoose";

import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';

mongoose.connect(
  process.env.DATABASE,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: true// Se agrego para que funcione findOneAndUpdate
  }
);

const mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Error de conexion !!'));
mongoDB.on('open', () => console.log('BD conectada !!'));

const server = new ApolloServer({
    typeDefs,
    resolvers,
});
server.listen({port: process.env.PORT}).then(({url}) => {
    console.log(`Server redy ${url}`); 
});

// import { PostModel } from './database/models';
// const post = {
//     title: "hola a todos",
//     content: "es es un nuevo contenido",
//   };
// const createPost = async() => {
//     try {
//         const newPost = awayt Postmodel.create(post);
//         console.log('Nuevo post', newpost);
//     } catch (error) {
//         console.log('Error:', error);
//     } 
// }

// const { ApolloServer, gql } = require('apollo-server');
// // This is a (sample) collection of books we'll be able to query
// // the GraphQL server for.  A more complete example might fetch
// // from an existing data source like a REST API or database.
// const books = [
//   {
//     title: 'Harry Potter and the Chamber of Secrets',
//     author: 'J.K. Rowling',
//   },
//   {
//     title: 'Jurassic Park',
//     author: 'Michael Crichton',
//   },
// ];

// const persons = [
//     {
//       name: 'Persona 1',
//       age: 23,
//     },
//     {
//       name: 'Persona 2',
//       age: 24,
//     },
//   ];

// // Type definitions define the "shape" of your data and specify
// // which ways the data can be fetched from the GraphQL server.
// const typeDefs = gql`
//   # Comments in GraphQL are defined with the hash (#) symbol.

//   # This "Book" type can be used in other type declarations.
//   type Book {
//     title: String
//     author: String
//   }

//   type Person {
//     name: String
//     age: Int
//   }

//   # The "Query" type is the root of all GraphQL queries.
//   # (A "Mutation" type will be covered later on.)
//   type Query {
//     books: [Book]
//     getPersons: [Person]
//   }
// `;

// // Resolvers define the technique for fetching the types in the
// // schema.  We'll retrieve books from the "books" array above.
// const resolvers = {
//   Query: {
//     books: () => books,
//     getPersons: () => persons,
//   },
// };

// // In the most basic sense, the ApolloServer can be started
// // by passing type definitions (typeDefs) and the resolvers
// // responsible for fetching the data for those types.
// const server = new ApolloServer({ typeDefs, resolvers });

// // This `listen` method launches a web-server.  Existing apps
// // can utilize middleware options, which we'll discuss later.
// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });