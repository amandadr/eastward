import { ExploreScreen } from "@/components/explore-screen";
import { one } from "@/lib/params";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Explore Eastern PEI",
  description:
    "Search beaches, lighthouses, harbours, trails, parks, and towns east of Charlottetown.",
  path: "/explore",
});

export default async function ExplorePage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  return (
    <ExploreScreen
      title="Every harbour, beach, and village in the guide"
      lede="Filter by what you want to do, which community you are near, and the season you are travelling. These are public places and areas, not paid listings."
      query={one(params.q)}
      destination={one(params.destination)}
      season={one(params.season)}
    />
  );
}
