"use client";
import ButtonIcon from "@/ui/ButtonIcon";
import { TrashIcon, PencilIcon, PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function CreatePost() {
  return (
    <Link
      href="/profile/posts/create"
      className="justify-self-end flex gap-x-4 py-3 items-center rounded-lg bg-primary-900 px-4 text-sm font-medium text-white 
      transition-colors hover:bg-primary-700"
    >
      <span className="hidden md:block">ایجاد پست جدید</span>
      <PlusIcon className="w-5" />
    </Link>
  );
}

export function DeletePost({ id }) {
  return (
    <ButtonIcon variant="outline" onClick={() => console.log(id)}>
      <TrashIcon className="!text-error" />
    </ButtonIcon>
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
