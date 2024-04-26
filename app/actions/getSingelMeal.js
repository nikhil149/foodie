import client from "@/lib/prismadb";

export default async function getSingleMeal(slug) {
  const meal = await client.meals.findUnique({ where: { slug: slug } });
  return meal;
}
