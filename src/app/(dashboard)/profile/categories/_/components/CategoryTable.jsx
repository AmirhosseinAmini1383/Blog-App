import Table from "@/ui/Table";
import CategoryRow from "./CategoryRow";
import { useCategories } from "@/hooks/useCategories";
import Fallback from "@/ui/Fallback";

function CategoryTable() {
  const { rawCategories, isLoading } = useCategories();

  if (isLoading) return <Fallback />;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان</th>
        <th>عنوان انگلیسی</th>
        <th>توضیحات</th>
        <th>تاریخ ایجاد</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {rawCategories.map((category, index) => (
          <CategoryRow key={category._id} category={category} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default CategoryTable;
