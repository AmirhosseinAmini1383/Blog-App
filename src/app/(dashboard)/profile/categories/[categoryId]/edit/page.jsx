"use client";
import Breadcrumbs from "@/ui/Breadcrumbs";
import CreateCategoryForm from "../../create/_/CreateCategoryForm";
import NotFound from "./not-found";
import { useCategories } from "@/hooks/useCategories";
import { useParams } from "next/navigation";

function page() {
  const { categoryId } = useParams();
  const { rawCategories } = useCategories();
  const selectedCategory = rawCategories.find(
    (item) => item._id === categoryId
  );

  if (!selectedCategory) return NotFound();

  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: "دسته بندی ها",
            href: "/profile/categories",
          },
          {
            label: "ویرایش دسته بندی",
            href: `/profile/categories/${categoryId}/edit`,
            active: true,
          },
        ]}
      />
      <CreateCategoryForm categoryToEdit={selectedCategory} />
    </div>
  );
}

export default page;
