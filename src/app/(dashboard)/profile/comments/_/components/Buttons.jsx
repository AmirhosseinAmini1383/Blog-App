"use client";
import Modal from "@/ui/Modal";
import ButtonIcon from "@/ui/ButtonIcon";
import ConfirmDelete from "@/ui/ConfirmDelete";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import UpdateCommentForm from "./UpdateCommentForm";
import useDeleteComment from "../useDeleteComment";
import { useRouter } from "next/navigation";

export function DeleteComment({ commentId }) {
  const { refresh } = useRouter();
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { isDeleting, deleteComment } = useDeleteComment();
  const onClose = () => setIsDeleteOpen(false);
  return (
    <>
      <ButtonIcon variant="outline" onClick={() => setIsDeleteOpen(true)}>
        <TrashIcon className="!text-error" />
      </ButtonIcon>
      <Modal title={`حذف نظر`} open={isDeleteOpen} onClose={onClose}>
        <ConfirmDelete
          title={`حذف نظر`}
          onConfirm={(e) => {
            e.preventDefault();
            deleteComment(commentId, {
              onSuccess: () => {
                refresh("/profile/comments");
              },
            });
          }}
          onClose={onClose}
        />
      </Modal>
    </>
  );
}

export function UpdateComment({ comment }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const onClose = () => setIsEditOpen(false);
  return (
    <>
      <ButtonIcon onClick={() => setIsEditOpen(true)} variant="outline">
        <PencilIcon />
      </ButtonIcon>
      <Modal title={`ویرایش وضعیت نظر`} open={isEditOpen} onClose={onClose}>
        <UpdateCommentForm comment={comment} onClose={onClose} />
      </Modal>
    </>
  );
}
