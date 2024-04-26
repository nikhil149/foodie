import Image from "next/image";
import classes from "./page.module.css";
import getSingleMeal from "@/app/actions/getSingelMeal";
import { notFound } from "next/navigation";

const MealsDetails = async ({ params }) => {
  const slug = params.mealSlug;
  const meal = await getSingleMeal(slug);

  if (!meal) {
    return notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        />
      </main>
    </>
  );
};

export default MealsDetails;
