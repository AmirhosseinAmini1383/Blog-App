import { Suspense } from "react";
import CommentsTable from "./_/components/CommentsTable";
import Fallback from "@/ui/Fallback";

function CommentPage() {
  return (
    <div>
      <h1 className="font-bold text-xl  text-secondary-700  mb-12">
        لیست نظرات
      </h1>
      <Suspense fallback={<Fallback />}>
        <CommentsTable />
      </Suspense>
    </div>
  );
}

export default CommentPage;
