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

export const getAllSlugPosts = gql`
  query Authors {
  posts {
    slug
  }
}
`

export const getPostBySlug = gql`
  query GetPostBySlug($slug: String!) {
    post(slug: $slug) {
      createdAt
      id
      slug
      title
      content {
        html
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