import { gql } from "@apollo/client";

const CREATE_PARENT = gql`
  mutation CreateParent(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $age: Int!
  ) {
    createParent(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      age: $age
    ) {
      parent {
        firstName
        lastName
        email
      }
      token
    }
  }
`;
const CREATE_CHILD = gql`
  mutation CreateChild(
    $firstName: String!
    $lastName: String!
    $age: Int
    $interests: [String]
    $gender: String
    $parentId: ID
  ) {
    createChild(
      firstName: $firstName
      lastName: $lastName
      age: $age
      interests: $interests
      gender: $gender
      parentId: $parentId
    ) {
      firstName
      lastName
      age
      interests
      gender
    }
  }
`;

// const ADD_PARENT_TO_EVENT = gql`
// mutation AddParentToEvent($parentId: ID!, $eventId: ID!) {
//   addParentToEvent(parentId: $parentId, eventId: $eventId) {

//   }
// }

// `;
export { CREATE_PARENT, CREATE_CHILD };
