import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    projects: [Project!]!
    users: [User!]!
    teste: String!
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
    createProject(name: String!, price: Int!, userId: ID!): Project!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    projects: [Project!]!
  }

  type Project {
    id: ID!
    name: String!
    price: Int!
    user: User!
  }
`;

export default typeDefs;
