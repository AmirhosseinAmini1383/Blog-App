import { getCategoryApi } from "@/services/categoryService";
import { useQuery } from "@tanstack/react-query";

export function useCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoryApi,
  });
  const { categories: rawCategories = [] } = data || {};  
  const categories = rawCategories.map((item) => ({
    label: item.title,
    value: item._id,
  }));
  const transformedCategories = rawCategories.map((item) => ({
    label: item.title,
    value: item.englishTitle,
  }));
  return { categories, transformedCategories, isLoading };
}
