import React from "react";
import PostsTable from "./_/components/PostsTable";
import { Suspense } from "react";
import Fallback from "@/ui/Fallback";

function PostPage() {
  return (
    <div>
      <Suspense fallback={<Fallback />}>
        <PostsTable />
      </Suspense>
    </div>
  );
}

export default PostPage;
