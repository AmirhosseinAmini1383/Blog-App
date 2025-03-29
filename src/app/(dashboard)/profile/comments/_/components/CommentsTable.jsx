import { getAllCommentsApi } from "@/services/commentService";
import Table from "@/ui/Table";
import React, { Fragment } from "react";
import CommentRow from "./CommentRow";
import Empty from "@/ui/Empty";

async function CommentsTable() {
  const { comments, commentsCount } = await getAllCommentsApi();

  let iterator = 0;

  if (!comments.length) return <Empty resourceName="نظری" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>متن</th>
        <th>نویسنده</th>
        <th>تاریخ ایجاد</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {comments.map(
          (comment) => {
            iterator++;

            return (
              <Fragment key={comment._id}>
                <CommentRow
                  key={comment._id}
                  comment={comment}
                  index={iterator}
                />
                {comment.answers.map((commentAnswer) => {
                  iterator++;
                  return (
                    <CommentRow
                      key={commentAnswer._id}
                      comment={commentAnswer}
                      index={iterator}
                    />
                  );
                })}
              </Fragment>
            );
          }
          //   <CommentRow key={comment._id} comment={comment} index={index} />
        )}
      </Table.Body>
    </Table>
  );
}

export default CommentsTable;
