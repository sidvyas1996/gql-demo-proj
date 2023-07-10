import SchemaBuilder from "@pothos/core";
import PrismaPlugin from '@pothos/plugin-prisma';
import prisma from "../../prisma/prisma";
import RelayPlugin from "@pothos/plugin-relay";
import {createContext} from '../graphql/context'

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes,
  Context: ReturnType<typeof createContext>,
}>({
  plugins: [PrismaPlugin, RelayPlugin],
  relayOptions: {},
  prisma: {
    client: prisma,
  }
})

builder.queryType({
  fields: (t:any) => ({
    ok: t.boolean({
      resolve: () => true,
    }),
  }),
});

builder.mutationType({})