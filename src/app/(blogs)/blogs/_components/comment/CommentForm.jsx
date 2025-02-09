"use client";
import { createComment } from "@/lib/actions";
import SubmitButton from "@/ui/SubmitButton";
import TextArea from "@/ui/TextArea";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";

const initialState = {
  error: "",
  message: "",
};

const CommentForm = ({ postId, parentId, onClose }) => {
  const [text, setText] = useState("");
  // const createCommentWithData = createComment.bind(null, postId, parentId);

  const [state, formAction, pending] = useActionState(
    createComment,
    initialState
  ); //useFormState() in React V18

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      onClose();
    }
    if (state?.error) toast.error(state.error);
  }, [state]);

  return (
    <div>
      <div className="flex justify-center mt-4">
        <div className="max-w-md w-full">
          <form
            className="space-y-7"
            // action={createCommentWithData}
            action={async (formData) => {
              await formAction({ formData, postId, parentId });
            }}
          >
            <TextArea
              name="text"
              label="متن نظر"
              value={text}
              isRequired
              onChange={(e) => setText(e.target.value)}
            />
            <SubmitButton pending={pending}>تایید</SubmitButton>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CommentForm;
