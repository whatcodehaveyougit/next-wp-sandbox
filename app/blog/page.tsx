import getAllPosts from "../../lib/posts";

async function getData() {
  const posts = await getAllPosts();
  return { props: { allPosts: posts } };
  // THis is how you return data from getStaticProps which will then
  // be passed to the component as props
}

export default async function Blog() {
  const data = await getData();
  console.log("from blogggggg ");
  console.log(data);
  return (
    <>
      {/* <h1></h1> */}
      <p>Here is the content for the blog</p>
      <div>
        {data.props.allPosts.nodes.map((post: any) => (
          <div key={post.slug}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </div>
    </>
  );
}
