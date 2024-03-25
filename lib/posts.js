import graphqlRequest from './graphqlRequest';

export default async function getAllPosts(){
  const query = {
    query: `query getPosts {
      posts {
        nodes {
          date
          slug
          title
          excerpt
          featuredImage {
            node {
              mediaDetails {
                file
                sizes {
                  sourceUrl
                  width
                  height
                }
              }
            }
          }
        }
      }
    }`
  }

  const res = await graphqlRequest(query);
  console.log(res);
  const posts = res.posts
  return posts;
}