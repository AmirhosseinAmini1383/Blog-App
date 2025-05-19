import Breadcrumbs from "@/ui/Breadcrumbs";
import EditProfileForm from "./_/components/EditProfileForm";

function page() {
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: "پروفایل",
            href: "/profile",
          },
          {
            label: "ویرایش پروفایل",
            href: "/profile/edit-profile",
            active: true,
          },
        ]}
      />
      <EditProfileForm />
    </div>
  );
}

export default page;
