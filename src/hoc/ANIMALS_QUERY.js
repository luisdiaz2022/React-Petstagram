import { gql } from "@apollo/client"

export const ANIMALS_QUERY = gql`
  query getPhotos ($categoryId: ID) {
      photos (categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
      }
  }
`