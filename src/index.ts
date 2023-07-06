import express, { Application,Request,Response,NextFunction, response } from 'express'

import resolvers from './graphql/resolver';
import typeDefs from './graphql/typedef';
import { PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server-express';
const server = new ApolloServer({ typeDefs, resolvers });

// Create an Express app
const app = express();

// Start the Apollo Server and apply the middleware to the app
  async function startApolloServer() {
    // Start the Apollo Server
    await server.start();

    // Apply the Apollo Server middleware to the app
    server.applyMiddleware({ app, path: '/graphql' });

    // Start the server
    app.listen({ port: 5000 }, () =>
      console.log(`Server running at http://localhost:5000${server.graphqlPath}`)
    );
  }

  startApolloServer().catch((error) => console.error(error));

