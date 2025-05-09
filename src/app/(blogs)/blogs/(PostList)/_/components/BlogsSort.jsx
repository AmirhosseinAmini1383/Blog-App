"use client";
import useCreateQueryStringToUrl from "@/utils/useCreateQueryStringToUrl";
import { useState } from "react";

const sortOptions = [
  {
    id: 1,
    value: "popular",
    label: "محبوبیت",
  },
  {
    id: 2,
    value: "latest",
    label: "جدیدترین",
  },
  {
    id: 3,
    value: "earliest",
    label: "قدیمی‌ترین",
  },
  {
    id: 4,
    value: "time_desc",
    label: "مطالعه‌عمیق",
  },
  {
    id: 5,
    value: "time_asc",
    label: "مطالعه‌سریع",
  },
];

function BlogsSort() {
  const { pathname, router, searchParams, createQueryString } =
    useCreateQueryStringToUrl();
  const [sort, setSort] = useState(searchParams.get("sort") || "latest");

  const handleSortChange = (value) => {
    setSort(value);
    router.push(pathname + "?" + createQueryString("sort", value));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 bg-secondary-0 text-secondary-500 rounded-lg gap-2 p-4 lg:p-1.5 items-center">
      {sortOptions.map((item) => {
        return (
          <span
            key={item.id}
            className={`bg-secondary-100 text-center rounded-md py-2 font-bold text-xs cursor-pointer hover:border hover:border-secondary-300 ${
              sort === item.value
                ? "bg-secondary-200 border border-secondary-300"
                : ""
            }`}
            onClick={() => handleSortChange(item.value)}
          >
            {item.label}
          </span>
        );
      })}
    </div>
  );
}

export default BlogsSort;
