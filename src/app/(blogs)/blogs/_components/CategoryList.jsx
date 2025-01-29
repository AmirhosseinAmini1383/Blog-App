import Link from "next/link";

async function CategoryList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`, {
    cache: "force-cache",
  });

  const { data } = await res.json();
  const { categories } = data || {};

  return (
    <ul className="space-y-4">
      <Link href={"/blogs"}>همه</Link>
      {categories.map((category) => (
        <li key={category._id}>
          <Link href={`/blogs/category/${category.slug}`}>
            {category.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;
