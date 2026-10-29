import { notFound } from "next/navigation";
import { ExploreScreen } from "@/components/explore-screen";
import { categories, getCategory } from "@/lib/content";
import { one } from "@/lib/params";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return pageMeta({
    title: category.name,
    description: category.summary,
    path: `/explore/${category.slug}`,
  });
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ category: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const query = await searchParams;

  return (
    <ExploreScreen
      title={category.name}
      lede={category.summary}
      category={category.slug}
      query={one(query.q)}
      destination={one(query.destination)}
      season={one(query.season)}
    />
  );
}
