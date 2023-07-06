
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const resolvers = {
  Query: {
    findPersonById: async (_: any, { id }: any, { prisma }: any) => {
      try {
        const person = await prisma.person.findUnique({
          where: { id },
          include: {
            dependents: true,
            insurance: true,
            services: true,
            organizations: true,
            tags: true,
          },
        });
        return person;
      } catch (error) {
        throw new Error('Failed to fetch person');
      }
    },
  },
  Mutation: {
    addPerson: async (_:any, { input}:any) => {
      try {
        const newPerson = await prisma.person.create({ data: input });
        return newPerson;
      } catch (error) {
        throw new Error('Failed to add person');
      }
    },
    updatePerson: async (_:any, { id, input }:any) => {
      try {
        const updatedPerson = await prisma.person.update({
          where: { id },
          data: input,
        });
        return updatedPerson;
      } catch (error) {
        throw new Error('Failed to update person');
      }
    },
    deletePerson: (parent:any, args:any, context:any, info:any) => {
      const { id } = args;
      // Implement the logic to delete the person with the given ID
      // Return the deleted person
    },
  },
   
};
  
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit();
});

  export default resolvers;



  