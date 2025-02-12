import { Suspense } from "react";
import CardsWrapper from "./_components/CardsWrapper";
import Fallback from "@/ui/Fallback";
import LatestPosts from "./_components/LatestPosts";

async function Profile() {
  // const posts = await fetchLatestPosts();
  return (
    <div>
      <h1 className="text-xl mb-8 text-secondary-700 font-semibold">داشبورد</h1>
      <Suspense fallback={<Fallback />}>
        <CardsWrapper />
      </Suspense>

      <h2 className="text-xl mb-4 text-secondary-600 font-semibold">
        آخرین پست ها
      </h2>
      <Suspense fallback={<Fallback />}>
        <LatestPosts />
      </Suspense>
    </div>
  );
}

export default Profile;
