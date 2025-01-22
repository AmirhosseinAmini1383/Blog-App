import Link from "next/link";

async function CategoryList() {
  const res = await fetch("http://localhost:5000/api/category/list");
  const {
    data: { categories },
  } = await res.json();

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
