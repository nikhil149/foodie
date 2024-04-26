import { NextResponse } from "next/server";

import client from "@/lib/prismadb";

export async function POST(request) {
  const body = await request.json();
  const { email, name, password } = body;

  const user = await client.meals.create({
    data: {
      ...body,
    },
  });

  return NextResponse.json(user);
}
