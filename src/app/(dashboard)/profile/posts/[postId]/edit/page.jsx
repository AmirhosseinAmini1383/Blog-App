import Breadcrumbs from "@/ui/Breadcrumbs";
import CreatePostForm from "../../create/_/CreatePostForm";
import { getPostById } from "@/services/postService";
import { notFound } from "next/navigation";

async function EditPage({ params }) {
  const { postId } = await params;
  const { post } = await getPostById(postId);
  if (!post) notFound();
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: "پست ها",
            href: "/profile/posts",
          },
          {
            label: "ویرایش پست",
            href: `/profile/posts/${postId}/edit`,
            active: true,
          },
        ]}
      />
      <CreatePostForm />
    </div>
  );
}

export default EditPage;
