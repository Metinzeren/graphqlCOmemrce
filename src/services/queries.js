import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query {
    products {
      title
      id
      short_description
      description
      photo
      price
      categories
    }
  }
`;

export const GET_PRODUCT = gql`
  query MyQuery($id: Int!) {
    products_by_pk(id: $id) {
      id
      title
      description
      photo
      price
      comments {
        id
        text
        user {
          fullName
          profile_photo
        }
      }
    }
  }
`;

export const USER_MUTATION = gql`
  mutation MyMutation($input: users_insert_input!) {
    insert_users_one(object: $input) {
      fullName
      age
      profile_photo
      id
      password
    }
  }
`;

export const GET_USERS = gql`
  query MyQuery($id: Int!) {
    users_by_pk(id: $id) {
      id
      fullName
      age
      password
    }
  }
`;

export const GET_USER = gql`
  query {
    users {
      fullName
      id
    }
  }
`;

export const COMMENT_MUTATION = gql`
  mutation comment($input: comments_insert_input!) {
    insert_comments_one(object: $input) {
      id
      text
    }
  }
`;
