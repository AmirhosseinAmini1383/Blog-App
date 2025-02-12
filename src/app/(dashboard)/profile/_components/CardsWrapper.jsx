import { fetchCardDate } from "@/services/dashboardData";
import { toPersianDigits } from "@/utils/numberFormatter";
import Card from "./Card";

async function CardsWrapper() {
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

export default CardsWrapper;
