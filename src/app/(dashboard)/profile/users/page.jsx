import Fallback from "@/ui/Fallback";
import { Suspense } from "react";
import UsersTable from "./_/components/UsersTable";

function page() {
  return (
    <div>
      <h1 className="font-bold text-xl  text-secondary-700  mb-12">
        لیست کاربران
      </h1>
      <Suspense fallback={<Fallback />}>
        <UsersTable />
      </Suspense>
    </div>
  );
}

export default page;
