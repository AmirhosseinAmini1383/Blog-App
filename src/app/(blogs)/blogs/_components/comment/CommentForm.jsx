"use client";
import { createComment } from "@/lib/actions";
import SubmitButton from "@/ui/SubmitButton";
import TextArea from "@/ui/TextArea";
import { useState } from "react";

const CommentForm = ({ postId, parentId }) => {
  const [text, setText] = useState("");
  const createCommentWithData = createComment.bind(null, postId, parentId);

  return (
    <div>
      <div className="flex justify-center mt-4">
        <div className="max-w-md w-full">
          <form className="space-y-7" action={createCommentWithData}>
            <TextArea
              name="text"
              label="متن نظر"
              value={text}
              isRequired
              onChange={(e) => setText(e.target.value)}
            />
            <SubmitButton className="w-full">تایید</SubmitButton>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CommentForm;
