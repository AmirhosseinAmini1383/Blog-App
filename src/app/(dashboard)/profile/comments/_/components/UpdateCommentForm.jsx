import RHFSelect from "@/ui/RHFSelect";
import SubmitButton from "@/ui/SubmitButton";
import React, { useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { updateComment } from "../action/updateComment";
import toast from "react-hot-toast";

const options = [
  {
    id: 1,
    label: "رد شده",
    value: 0,
  },
  {
    id: 2,
    label: "در انتظار تایید",
    value: 1,
  },
  {
    id: 3,
    label: "تایید شده",
    value: 2,
  },
];

function UpdateCommentForm({ comment, onClose }) {
  const [state, formAction] = useActionState(updateComment, {
    error: "",
    message: "",
  });

  const { register } = useForm({ defaultValues: { status: comment.status } });

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      onClose();
    }
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <form
      className="form"
      action={async (formData) => {
        await formAction({ formData, commentId: comment._id });
      }}
    >
      <RHFSelect
        label="تغییر وضعیت"
        required
        name="status"
        register={register}
        options={options}
      />
      <SubmitButton type="submit" variant="primary" className="w-full">
        تایید
      </SubmitButton>
    </form>
  );
}

export default UpdateCommentForm;
