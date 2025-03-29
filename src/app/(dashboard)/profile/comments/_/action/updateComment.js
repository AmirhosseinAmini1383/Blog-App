"use server";

import { updateCommentApi } from "@/services/commentService";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function updateComment(prevState, { commentId, formData }) {
  const data = {
    status: formData.get("status"),
  };

  const cookieStore = cookies();

  try {
    const options = setCookieOnReq(cookieStore);
    const { message } = await updateCommentApi(
      { id: commentId, data },
      options
    );
    revalidatePath("/profile/comments");
    return {
      message,
    };
  } catch (err) {
    const error = err?.response?.data?.message;
    return {
      error,
    };
  }
}
