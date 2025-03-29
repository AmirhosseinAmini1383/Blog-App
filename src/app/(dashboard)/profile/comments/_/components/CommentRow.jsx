import Table from "@/ui/Table";
import { toLocalDateShort } from "@/utils/dateFormatter";
import truncateText from "@/utils/truncateText";
import React from "react";
import { DeleteComment, UpdateComment } from "./Buttons";
import { toPersianDigits } from "@/utils/numberFormatter";

function CommentRow({ comment, index }) {
  const statusStyle = [
    {
      label: "رد شده",
      className: "badge--danger",
    },
    {
      label: "در انتظار تایید",
      className: "badge--secondary",
    },
    {
      label: "تایید شده",
      className: "badge--success",
    },
  ];
  const {
    content: { text },
    user,
    status,
    createdAt,
  } = comment;

  return (
    <Table.Row>
      <td>{toPersianDigits(index)}</td>
      <td title={text}>{truncateText(text, 30)}</td>
      <td>{user.name}</td>
      <td>{toLocalDateShort(createdAt)}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
      <td>
        <div className="flex items-center gap-x-3">
          <UpdateComment comment={comment} />
          <DeleteComment commentId={comment._id} />
        </div>
      </td>
    </Table.Row>
  );
}

export default CommentRow;
