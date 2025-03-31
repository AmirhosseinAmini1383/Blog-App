import { getAllUsersApi } from "@/services/authService";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import UsersRow from "./UsersRow";
import Table from "@/ui/Table";
import Empty from "@/ui/Empty";

async function UsersTable() {
  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  const { users } = await getAllUsersApi(options);

  if (!users.length) return <Empty resourceName="کاربری" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>پروفایل</th>
        <th>نام و نام خانوادگی</th>
        <th>ایمیل</th>
        <th>پست های لایک شده</th>
        <th>پست های ذخیره شده</th>
        <th>تاریخ عضویت</th>
      </Table.Header>
      <Table.Body>
        {users.map((user, index) => (
          <UsersRow key={user._id} user={user} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default UsersTable;
