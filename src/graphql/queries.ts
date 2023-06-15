import { gql } from "@apollo/client";

export const getAllArticles = gql`
query Articles {
  posts {
    excerpt
    createdAt
    id
    publishedAt
    slug
    title
    content {
      html
    }
    author {
      id
      name
      bio
      photo {
        url
      }
    }
  }
}

`