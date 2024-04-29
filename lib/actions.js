"use server";
import fs from "node:fs";

import axios from "axios";
import { redirect } from "next/navigation";
import slugify from "slugify";
import xss from "xss";
import { dummyMeals } from "@/dummyMeals";

export const shareMeal = async (formData) => {
  const meal = {
    title: formData.get("title"),
    image: formData.get("image"),
    instructions: formData.get("instructions"),
    summary: formData.get("summary"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
  meal.image = meal.image.name;

  console.log("meal", meal);
  redirect("/meals");
};
