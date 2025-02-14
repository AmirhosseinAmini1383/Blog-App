import React from "react";
import PostsTable from "./_/components/PostsTable";
import { Suspense } from "react";
import Fallback from "@/ui/Fallback";
import Search from "@/ui/Search";
import { CreatePost } from "./_/components/Buttons";
import queryString from "query-string";
import { getPosts } from "@/services/postService";
import Pagination from "@/ui/Pagination";

async function PostPage({ searchParams }) {
  const query = queryString.stringify(await searchParams);
  const { totalPages } = await getPosts(query);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="font-bold text-xl">لیست پست ها</h1>
        <Search />
        <CreatePost />
      </div>
      <Suspense fallback={<Fallback />} key={query}>
        <PostsTable query={query} />
      </Suspense>
      <div className="mt-5 flex items-center justify-center w-full">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}

export default PostPage;
