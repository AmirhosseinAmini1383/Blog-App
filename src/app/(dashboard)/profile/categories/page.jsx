"use client";
import Fallback from "@/ui/Fallback";
import { Suspense } from "react";
import CategoryTable from "./_/components/CategoryTable";
import { CreatePost } from "./_/components/Buttons";

function page() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="font-bold text-xl">لیست دسته بندی ها</h1>
        <CreatePost />
      </div>
      <Suspense fallback={<Fallback />}>
        <CategoryTable />
      </Suspense>
      {/* <div className="mt-5 flex items-center justify-center w-full">
        <Pagination totalPages={totalPages} />
      </div> */}
    </div>
  );
}

export default page;
