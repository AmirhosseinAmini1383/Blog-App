"use client";
import ButtonIcon from "@/ui/ButtonIcon";
import ConfirmDelete from "@/ui/ConfirmDelete";
import Modal from "@/ui/Modal";
import { TrashIcon, PencilIcon, PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";
import deletePost from "../actions/deletePost";
import useDeletePost from "../useDeletePost";
import { useRouter } from "next/navigation";

export function CreatePost() {
  return (
    <Link
      href="/profile/posts/create"
      className="justify-self-end flex gap-x-4 py-3 items-center rounded-lg bg-primary-900 px-4 text-sm font-medium text-white 
      transition-colors hover:bg-primary-700"
    >
      <span className="hidden md:block">ایجاد پست</span>
      <PlusIcon className="w-5" />
    </Link>
  );
}

export function DeletePost({ id: postId, postTitle }) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { deletePost, isDeleting } = useDeletePost();
  const { refresh } = useRouter();
  return (
    <>
      <ButtonIcon variant="outline" onClick={() => setIsDeleteOpen(true)}>
        <TrashIcon className="!text-error" />
      </ButtonIcon>
      <Modal
        title={`حذف ${postTitle}`}
        open={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
      >
        <ConfirmDelete
          resourceName={postTitle}
          onClose={() => setIsDeleteOpen(false)}
          onConfirm={(e) => {
            e.preventDefault();
            deletePost(
              { id: postId },
              {
                onSuccess: () => {
                  setIsDeleteOpen(false);
                  refresh("/profile/posts");
                },
              }
            );
          }}
          disabled={isDeleting}
        />
      </Modal>
    </>
  );
}

export function UpdatePost({ id }) {
  return (
    <Link href={`/profile/posts/${id}/edit`}>
      <ButtonIcon variant="outline">
        <PencilIcon />
      </ButtonIcon>
    </Link>
  );
}
