import { gql } from '@apollo/client'

export const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    generateCustomerToken(email: $email, password: $password) {
      token
    }
  }
`

export const CREATE_CART = gql`
  mutation CreateCartAfterSignIn {
    cartId: createEmptyCart
  }
`

export const MERGE_CARTS = gql`
  mutation MergeCartsAfterSignIn(
    $sourceCartId: String!
    $destinationCartId: String!
  ) {
    mergeCarts(
      source_cart_id: $sourceCartId
      destination_cart_id: $destinationCartId
    ) @connection(key: "mergeCarts") {
      id
      items {
        id
      }
    }
  }
`

export default {
  createCartMutation: CREATE_CART,
  mergeCartsMutation: MERGE_CARTS,
  signInMutation: SIGN_IN
}
