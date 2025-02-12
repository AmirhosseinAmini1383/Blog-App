import { fetchCardDate, fetchLatestPosts } from "@/services/dashboardData";
import { Card } from "./_components/Card";
import { toPersianDigits } from "@/utils/numberFormatter";
import PostsTable from "./posts/_/components/PostsTable";

async function Profile() {
  const { numberOfUsers, numberOfComments, numOfPosts } = await fetchCardDate();
  // const posts = await fetchLatestPosts();
  return (
    <div>
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card
          title="کاربران"
          value={toPersianDigits(numberOfUsers)}
          type="users"
        />
        <Card title="پست ها" value={toPersianDigits(numOfPosts)} type="posts" />
        <Card
          title="نظرات"
          value={toPersianDigits(numberOfComments)}
          type="comments"
        />
      </div>
      <PostsTable query="sort=latest&limit=5" />
    </div>
  );
}

export default Profile;
