import { fetchCardDate } from "@/services/dashboardData";
import { Card } from "./_components/Card";
import { toPersianDigits } from "@/utils/numberFormatter";

async function Profile() {
  const { numberOfUsers, numberOfComments, numOfPosts } = await fetchCardDate();

  return (
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
  );
}

export default Profile;
