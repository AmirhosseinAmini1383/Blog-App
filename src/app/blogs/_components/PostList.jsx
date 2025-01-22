async function PostList() {
  await new Promise((res, rej) => setTimeout(() => res(), 3000));

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
  const {
    data: { posts },
  } = await res.json();

  return (
    <div>
      {posts.length > 0 && posts.map((post) => <div>{post.title}</div>)}
    </div>
  );
}

export default PostList;
