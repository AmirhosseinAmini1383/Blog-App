"use client";

import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// export const metadata = {
//   title: "ثبت نام",
// };

const schema = yup
  .object({
    name: yup
      .string()
      .min(5, "حداقل ۵ کاراکتر وارد کنید")
      .max(30, "حداکثر میتوانید ۳۰ کاراکتر وارد کنید")
      .required("نام و نام خانوادگی الزامی است"),
    email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
    password: yup.string().required("رمز عبور الزامی است"),
  })
  .required();

function SingUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-secondary-500 text-center mb-6">
        ثبت نام
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <RHFTextField
          name="name"
          label="نام و نام خانوادگی"
          register={register}
          isRequired
          errors={errors}
        />
        <RHFTextField
          name="email"
          label="ایمیل"
          register={register}
          dir="ltr"
          isRequired
          errors={errors}
        />
        <RHFTextField
          name="password"
          label="رمز عبور"
          register={register}
          type="password"
          dir="ltr"
          isRequired
          errors={errors}
        />
        <Button type="submit" variant="primary" className="w-full">
          تایید
        </Button>
      </form>
    </div>
  );
}

export default SingUp;
