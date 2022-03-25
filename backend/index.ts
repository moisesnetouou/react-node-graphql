import "reflect-metadata";

import path from 'path';
import {ApolloServer} from 'apollo-server';
import {buildSchema} from 'type-graphql';
import { UserResolver } from "./src/resolvers/UserResolver";

async function main(){
  const schema = await buildSchema({
    resolvers: [
      UserResolver
    ], // Como se fosse nossos controllers -> Rotas da nossa app.
    emitSchemaFile: path.resolve(__dirname, 'schema.gpl'), //onde quero salvar meu arquivo de schema do GraphQL
  })

  const server = new ApolloServer({
    schema
  })

  const {url} = await server.listen();

  console.log(`Server running on ${url}`)
}

main();