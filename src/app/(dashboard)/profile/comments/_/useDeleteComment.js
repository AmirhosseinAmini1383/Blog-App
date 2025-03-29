import { deleteCommentApi } from "@/services/commentService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useDeleteComment() {
  const { isPending: isDeleting, mutateAsync: deleteComment } = useMutation({
    mutationFn: deleteCommentApi,
    onSuccess: (data) => {
      toast.success(data?.message);
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { isDeleting, deleteComment };
}
