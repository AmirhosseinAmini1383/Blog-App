import { cookies } from "next/headers";
import PostList from "../_components/PostList";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { getPosts } from "@/services/postService";
import queryString from "query-string";
import { toPersianDigits } from "@/utils/numberFormatter";
import { Suspense } from "react";
import Fallback from "@/ui/Fallback";
import Pagination from "@/ui/Pagination";

async function BlogPage({ searchParams }) {
  const queries = queryString.stringify(await searchParams);
  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  const { posts, totalPages } = await getPosts(queries, options);

  const { search } = await searchParams;

  return (
    <div>
      {search ? (
        <p className="mb-4 text-secondary-700">
          {posts.length === 0
            ? "هیچ پستی با این مشخصات پیدا نشد"
            : `نشان دادن ${toPersianDigits(posts.length)} نتیجه برای `}
          <span className="font-bold">&quot;{search}&quot;</span>
        </p>
      ) : null}
      <Suspense fallback={<Fallback />} key={queries}>
        <PostList posts={posts} />
      </Suspense>
      <div className="mt-5 flex items-center justify-center w-full">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}

export default BlogPage;

// FOR ENGLISH TEXT :
// showing 3 results for "folan"
