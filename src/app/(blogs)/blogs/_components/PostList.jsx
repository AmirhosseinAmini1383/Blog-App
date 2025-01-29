import Link from "next/link";
import CoverImage from "./CoverImage";
import Author from "./Author";
import StudyTime from "./StudyTime";
import PostInteraction from "./PostInteraction";
import { getPosts } from "@/services/postService";

async function PostList() {
  const posts = await getPosts();

  return (
    posts.length > 0 && (
      <div className="grid grid-cols-12 gap-8">
        {posts.map((post) => (
          <div
            key={post._id}
            className="col-span-12 sm:col-span-6 lg:col-span-4 border border-secondary-200 p-2 rounded-lg"
          >
            <CoverImage {...post} />
            <div>
              <Link href={`/blogs/${post.slug}`}>
                <h2 className="mb-4 font-bold text-secondary-700">
                  {post.title}
                </h2>
              </Link>
              <div className="flex items-center justify-between mb-4">
                <Author {...post.author} />
                <StudyTime {...post} />
              </div>
              <PostInteraction post={post} />
            </div>
          </div>
        ))}
      </div>
    )
  );
}

export default PostList;
