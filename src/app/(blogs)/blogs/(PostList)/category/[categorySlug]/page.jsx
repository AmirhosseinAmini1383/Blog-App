import { getPosts } from "@/services/postService";
import Fallback from "@/ui/Fallback";
import { toPersianDigits } from "@/utils/numberFormatter";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import queryString from "query-string";
import { Suspense } from "react";
import PostList from "../../../_components/PostList";

async function Category({ params, searchParams }) {
  const { categorySlug } = await params;

  const queries = `${queryString.stringify(
    await searchParams
  )}&categorySlug=${categorySlug}`;
  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  const { posts } = await getPosts(queries, options);

  const { search } = await searchParams;

  return (
    <>
      {search ? (
        <p className="mb-4 text-secondary-700">
          {posts.length === 0
            ? "هیچ پستی با این مشخصات پیدا نشد"
            : `نشان دادن ${toPersianDigits(posts.length)} نتیجه برای `}
          <span className="font-bold">&quot;{search}&quot;</span>
        </p>
      ) : (
        posts.length === 0 && (
          <p className="text-lg text-secondary-600">
            پستی در این دسته بندی پیدا نشد
          </p>
        )
      )}
      <Suspense fallback={<Fallback />} key={queries}>
        <PostList posts={posts} />
      </Suspense>
    </>
  );
}

export default Category;
