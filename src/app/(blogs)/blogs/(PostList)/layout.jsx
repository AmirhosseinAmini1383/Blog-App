import { Suspense } from "react";
import CategoryList from "../_components/CategoryList";
import Search from "@/ui/Search";
import Fallback from "@/ui/Fallback";
import BlogsSort from "./_/components/BlogsSort";

export const metadata = {
  title: "بلاگ ها",
  // title: {
  //   absolute: "بلاگ ها",  //ignore %s in parent layout.
  // },
};

function Layout({ children }) {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr_1fr] gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="text-lg font-bold">لیست بلاگ ها</h1>
        <Suspense fallback={<Fallback />}>
          <Search />
        </Suspense>
        <BlogsSort />
      </div>
      <div className="grid grid-cols-[180px_1fr] gap-8">
        <div className="col-span-2 md:col-span-1 text-secondary-500 space-y-4">
          <Suspense fallback={<Fallback />}>
            <CategoryList />
          </Suspense>
        </div>
        <div className="col-span-2 md:col-span-1">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
