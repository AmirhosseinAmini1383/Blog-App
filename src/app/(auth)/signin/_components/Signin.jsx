"use client";

import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import SpinnerMini from "@/ui/SpinnerMini";

const schema = yup
  .object({
    email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
    password: yup
      .string()
      .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد")
      .required("رمز عبور الزامی است"),
  })
  .required();

function SingIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const { signin } = useAuth();
  const onSubmit = async (values) => {
    await signin(values);
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-secondary-500 text-center mb-6">
        ورود
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
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
        <div>
          {isLoading ? (
            <Button variant="primary" className="w-full">
              <SpinnerMini className="mx-auto" />
            </Button>
          ) : (
            <Button type="submit" variant="primary" className="w-full">
              تایید
            </Button>
          )}
        </div>
      </form>
      <Link
        href="/signup"
        className="text-secondary-400 font-medium text-sm mt-6"
      >
        تاکنون ثبت نام نکردم! <span className="text-primary-800">ثبت نام</span>
      </Link>
    </div>
  );
}

export default SingIn;
