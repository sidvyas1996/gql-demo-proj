import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    findPersonById(id: Int!): Person
  }

  type Mutation {
  addPerson(input: PersonInput!): Person
  updatePerson(id: Int!, input: PersonInput!): Person
  deletePerson(id: Int!): Person
}

input PersonInput {
  firstName: String!
  lastName: String!
  email: String!
  phone: String
  dob: String
  gender: String!
}
   
  type Person {
    id: Int!
    firstName: String!
    lastName: String!
    email: String!
    phone: String
    dob: String
    gender: String!
    dependents: [Dependent!]!
    insurance: [Insurance!]!
    services: [Service!]!
    grade: String!
    packageID: String!
    createdAt: String!
    updatedAt: String!
    organizations: [PersonOrganization!]!
    tags: [PersonTag!]!
  }

  type Organization {
    id: Int!
    name: String!
    address: String!
    numberOfEmployees: Int!
    pan: String!
    tan: String!
    spoc: String!
    createdAt: String!
    updatedAt: String!
    people: [PersonOrganization!]!
    tags: [OrganizationTag!]!
  }

  type PersonOrganization {
    id: Int!
    personId: Int!
    organizationId: Int!
    person: Person!
    organization: Organization!
    role: String!
    createdAt: String!
    updatedAt: String!
  }

  type Service {
    id: Int!
    name: String!
    description: String
    personId: Int!
    vendorId: Int!
    person: Person!
    vendor: Vendor!
    createdAt: String!
    updatedAt: String!
    tags: [ServiceTag!]!
  }

  type Tag {
    id: Int!
    name: String!
    createdAt: String!
    updatedAt: String!
    services: [ServiceTag!]!
    InsuranceTag: [InsuranceTag!]!
    organizationTag: [OrganizationTag!]!
    personTag: [PersonTag!]!
    dependentsTag: [DependentsTag!]!
  }

  type ServiceTag {
    id: Int!
    serviceId: Int!
    tagId: Int!
    service: Service!
    tag: Tag!
  }

  type Insurance {
    id: Int!
    name: String!
    policy: String!
    type: String!
    personId: Int!
    person: Person!
    createdAt: String!
    updatedAt: String!
    tags: [InsuranceTag!]!
  }

  type InsuranceTag {
    id: Int!
    insuranceId: Int!
    tagId: Int!
    insurance: Insurance!
    tag: Tag!
  }

  type OrganizationTag {
    id: Int!
    orgId: Int!
    tagId: Int!
    org: Organization!
    tag: Tag!
  }

  type PersonTag {
    id: Int!
    personId: Int!
    tagId: Int!
    person: Person!
    tag: Tag!
  }

  type Dependent {
    id: Int!
    firstName: String!
    lastName: String!
    relationship: String!
    dob: String
    person: Person!
    personId: Int!
    createdAt: String!
    updatedAt: String!
    tags: [DependentsTag!]!
  }

  type DependentsTag {
    id: Int!
    dependentId: Int!
    tagId: Int!
    dependent: Dependent!
    tag: Tag!
  }

  type Vendor {
    id: Int!
    vendorId: Int!
    service: [Service!]!
    package: [Package!]!
  }

  type Package {
    id: Int!
    packageId: Int!
    vendor: Vendor!
  }
`;

export default typeDefs;