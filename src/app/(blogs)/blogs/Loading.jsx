import Spinner from "@/ui/Spinner";
import React from "react";

function Loading() {
  return (
    <div className="flex items-center justify-center gap-x-4 my-14">
      <span className="text-lg text-secondary-500">
        در حال بارگذاری اطلاعات
      </span>
      <Spinner />
    </div>
  );
}

export default Loading;
