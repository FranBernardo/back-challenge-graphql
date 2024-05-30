import express from "express";
import { ApolloServer } from "apollo-server-express";
import sequelize from "./database";
import typeDefs from "./schemas";
import resolvers from "./resolvers";

async function startServer() {
  const app = express();

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  server.applyMiddleware({ app });

  const PORT = 4000;

  sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log(
        `Servidor Apollo rodando em http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
}

startServer();
