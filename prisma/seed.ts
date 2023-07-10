import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  try {
    // Create persons
    const person1 = await prisma.person.create({
      data: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '1234567890',
        dob: new Date('1990-01-01'),
        gender: 'Male',
        grade: 'A',
        packageID: '123',
      },
    });

    const person2 = await prisma.person.create({
      data: {
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
        phone: '9876543210',
        dob: new Date('1995-05-05'),
        gender: 'Female',
        grade: 'B',
        packageID: '456',
      },
    });

    // Create organizations
    const organization1 = await prisma.organization.create({
      data: {
        name: 'Company A',
        address: '123 Main St',
        numberOfEmployees: 100,
        pan: 'ABCD1234',
        tan: 'WXYZ5678',
        spoc: 'John Doe',
      },
    });

    const organization2 = await prisma.organization.create({
      data: {
        name: 'Company B',
        address: '456 Park Ave',
        numberOfEmployees: 200,
        pan: 'EFGH5678',
        tan: 'UVWX9123',
        spoc: 'Jane Smith',
      },
    });

    // Create person-organization relationships
    await prisma.personOrganization.create({
      data: {
        personId: person1.id,
        organizationId: organization1.id,
        role: 'Employee',
      },
    });

    await prisma.personOrganization.create({
      data: {
        personId: person2.id,
        organizationId: organization2.id,
        role: 'Manager',
      },
    });

    console.log('Seed data created successfully.');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
