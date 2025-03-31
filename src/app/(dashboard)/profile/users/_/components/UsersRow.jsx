import Avatar from "@/ui/Avatar";
import Table from "@/ui/Table";
import { toLocalDateShort } from "@/utils/dateFormatter";
import { toPersianDigits } from "@/utils/numberFormatter";

function UsersRow({ user, index }) {
  const { avatarUrl, name, email, likedPosts, bookmarkedPosts, createdAt } =
    user;
  return (
    <Table.Row>
      <td>{toPersianDigits(index + 1)}</td>
      <td>{<Avatar src={avatarUrl} />}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{toPersianDigits(likedPosts.length)}</td>
      <td>{toPersianDigits(bookmarkedPosts.length)}</td>
      <td>{toLocalDateShort(createdAt)}</td>
    </Table.Row>
  );
}

export default UsersRow;
