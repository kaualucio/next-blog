import { gql } from "@apollo/client";

export const getThreeMoreRecentArticles = gql`
query Articles {
  posts(orderBy: createdAt_ASC, last: 3) {
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

export const getAllArticles = gql`
query Articles {
  posts(orderBy: createdAt_DESC, skip: 3) {
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

export const getFeaturedArticles = gql`
query Articles {
  posts(orderBy: createdAt_ASC, where: {featuredPost: true}, first: 3) {
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

export const createComment = gql`
mutation CreateComment($name: String!, $comment: String! ,$postId: ID!) {
  createComment(data: {name: $name, comment: $comment, post: {connect: {id: $postId}}}) {
    id
  }
}

`

export const getComments = gql`
query Comments($slug: String!) {
  comments(where: {post: { slug: $slug }}, orderBy: createdAt_DESC, first: 5) {
    id
    name
    comment
  }
}

`