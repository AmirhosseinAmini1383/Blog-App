import { getPosts, getPostBySlug } from "@/services/postService";
import Image from "next/image";
import { notFound } from "next/navigation";
import RelatedPost from "../_components/RelatedPost";
import PostComments from "../_components/comment/PostComments";

export const dynamicParams = false;
export async function generateStaticParams() {
  const posts = await getPosts();
  const slugs = posts.map((post) => {
    return {
      postSlug: post.slug,
    };
  });
  return slugs;
}

export async function generateMetadata({ params }) {
  const postSlug = (await params).postSlug;
  const post = await getPostBySlug(postSlug);

  return {
    title: `پست ${post.title}`,
  };
}

async function SinglePost({ params }) {
  const postSlug = (await params).postSlug;
  const post = await getPostBySlug(postSlug);

  if (!post) notFound();

  return (
    <div className="text-secondary-600 max-w-screen-md mx-auto">
      <h1 className="text-secondary-700 text-2xl font-bold mb-8">
        {post.title}
      </h1>
      <p className="mb-4">{post.briefText}</p>
      <p className="mb-8">{post.text}</p>
      <div className="relative aspect-video overflow-hidden rounded-lg mb-10">
        <Image
          className="object-cover object-center hover:scale-105 transition-all duration-300 ease-out"
          fill
          src={post.coverImageUrl}
          alt={post.title}
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 33vw"
          priority={true}
        />
      </div>
      {post.related.length > 0 && <RelatedPost posts={post.related} />}
      <PostComments {...post} />
    </div>
  );
}

export default SinglePost;
