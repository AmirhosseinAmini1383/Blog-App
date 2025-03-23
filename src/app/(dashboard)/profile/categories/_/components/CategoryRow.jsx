import Table from "@/ui/Table";
import { toLocalDateShort } from "@/utils/dateFormatter";
import { toPersianDigits } from "@/utils/numberFormatter";
import truncateText from "@/utils/truncateText";
import { DeleteCategory, UpdateCategory } from "./Buttons";

function CategoryRow({ category, index }) {
  const { _id, title, description, englishTitle, createdAt } = category;
  return (
    <Table.Row>
      <td>{toPersianDigits(index + 1)}</td>
      <td>{truncateText(title, 30)}</td>
      <td>{englishTitle}</td>
      <td title={description}>{truncateText(description, 50)}</td>
      <td>{toLocalDateShort(createdAt)}</td>
      <td>
        <div className="flex items-center gap-x-3">
          <UpdateCategory id={_id} />
          <DeleteCategory id={_id} categoryTitle={title} />
        </div>
      </td>
    </Table.Row>
  );
}

export default CategoryRow;
