import { gql } from "@apollo/client";

export const getAllArticles = gql`
query Articles {
  posts {
    excerpt
    createdAt
    slug
    title
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
  query SlugPosts {
  posts {
    slug
  }
}
`

export const getPostBySlug = gql`
  query GetPostBySlug($slug: String!) {
    post(where: { slug: $slug }) {
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

export const getAllCategories = gql`
  query GetAllCategories {
    categories {
      name
      slug
    }
  }
`

export const getAllSlugCategories = gql`
  query GetAllCategories {
    categories {
      slug
    }
  }
`
export const getPostsByCategory = gql`
  query GetAllCategories($slug: String!) {
    posts(where: {categories_some: {slug: $slug}}) {
      excerpt
      createdAt
      slug
      title
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

