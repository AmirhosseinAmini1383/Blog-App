"use client";
import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import useCreateCategory from "./useCreateCategory";
import SpinnerMini from "@/ui/SpinnerMini";
import { useRouter } from "next/navigation";
import useEditCategory from "./useEditCategory";

const schema = yup
  .object({
    title: yup.string().required("عنوان ضروری است"),
    englishTitle: yup.string().required("عنوان انگلیسی ضروری است"),
    description: yup
      .string()
      .min(10, "حداقل ۱۰ کاراکتر را وارد کنید")
      .required("توضیحات ضروری است"),
  })
  .required();

function CreateCategoryForm({ categoryToEdit = {} }) {
  const { _id: editId } = categoryToEdit;
  const isEditSession = Boolean(editId);
  const { title, englishTitle, description } = categoryToEdit;
  let editValues = {};
  if (isEditSession) {
    editValues = { title, englishTitle, description };
  }

  const { push } = useRouter();
  const { createCategory, isCreating } = useCreateCategory();
  const { editCategory, isEditing } = useEditCategory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
    defaultValues: editValues,
  });

  const onSubmit = (data) => {
    if (isEditSession) {
      editCategory(
        { id: editId, data },
        {
          onSuccess: () => {
            push("/profile/categories");
            reset();
          },
        }
      );
    } else {
      createCategory(data, {
        onSuccess: () => {
          push("/profile/categories");
          reset();
        },
      });
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <RHFTextField
        name="title"
        label="عنوان"
        register={register}
        errors={errors}
        isRequired
      />
      <RHFTextField
        name="englishTitle"
        label="عنوان انگلیسی"
        register={register}
        errors={errors}
        isRequired
      />
      <RHFTextField
        name="description"
        label="توضیحات"
        register={register}
        errors={errors}
        isRequired
      />
      <div>
        {isCreating ? (
          <Button variant="primary" className="w-full">
            <SpinnerMini className="mx-auto" />
          </Button>
        ) : (
          <Button variant="primary" type="submit" className="w-full">
            تایید
          </Button>
        )}
      </div>
    </form>
  );
}

export default CreateCategoryForm;
