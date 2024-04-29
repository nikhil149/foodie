import client from "@/lib/prismadb";

import { NextResponse } from "next/server";

export async function POST(reqest) {
  const body = await reqest.json();

  const meal = await client.meals.create({
    data: {
      title: body.title,
      slug: body.slug,
      creator: body.creator,
      creator_email: body.creator_email,
      image: body.image,
      instructions: body.instructions,
      summary: body.summary,
    },
  });

  return NextResponse.json(meal);
}
