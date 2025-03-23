"use client";
import ButtonIcon from "@/ui/ButtonIcon";
import ConfirmDelete from "@/ui/ConfirmDelete";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useDeleteCategory from "./useDeleteCategory";
import Modal from "@/ui/Modal";

export function CreatePost() {
  return (
    <Link
      href="/profile/categories/create"
      className="justify-self-end flex gap-x-4 py-3 items-center rounded-lg bg-primary-900 px-4 text-sm font-medium text-white 
      transition-colors hover:bg-primary-700"
    >
      <span className="hidden md:block">ایجاد دسته بندی</span>
      <PlusIcon className="w-5" />
    </Link>
  );
}

export function DeleteCategory({ id: categoryId, categoryTitle }) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { deleteCategory, isDeleting } = useDeleteCategory();
  const { refresh } = useRouter();
  return (
    <>
      <ButtonIcon variant="outline" onClick={() => setIsDeleteOpen(true)}>
        <TrashIcon className="!text-error" />
      </ButtonIcon>
      <Modal
        title={`حذف دسته بندی ${categoryTitle}`}
        open={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
      >
        <ConfirmDelete
          resourceName={categoryTitle}
          onClose={() => setIsDeleteOpen(false)}
          onConfirm={(e) => {
            e.preventDefault();
            deleteCategory(categoryId, {
              onSuccess: () => {
                setIsDeleteOpen(false);
                refresh("/profile/categories");
              },
            });
          }}
          disabled={isDeleting}
        />
      </Modal>
    </>
  );
}

export function UpdateCategory({ id }) {
  return (
    <Link href={`/profile/categories/${id}/edit`}>
      <ButtonIcon variant="outline">
        <PencilIcon />
      </ButtonIcon>
    </Link>
  );
}
