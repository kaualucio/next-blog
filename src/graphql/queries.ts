import { gql } from "@apollo/client";

export const getAllArticles = gql`
query Articles {
  posts {
    excerpt
    createdAt
    id
    slug
    title
    content {
      html
    }
    author {
      name
      photo {
        url
      }
    }
    image {
      url
    }
    categories {
      name
    }
  }
}
`

export const getAuthors = gql`
  query Authors {
  authors {
    id
    name
    photo {
      url
    }
    bio
  }
}
`