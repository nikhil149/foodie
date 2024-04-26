import client from "@/lib/prismadb";

export default async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const meals = await client.meals.findMany();
  return meals;
}
