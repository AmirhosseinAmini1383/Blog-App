"use client";
import ButtonIcon from "@/ui/ButtonIcon";
import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

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
