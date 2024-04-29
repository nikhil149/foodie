"use client";
import { dummyMeals } from "@/dummyMeals";
import axios from "axios";
const UpdateTable = () => {
  const updateData = () => {
    // for (const meal of dummyMeals) {
    axios
      .post("/api/update", dummyMeals[0])
      .then(() => {
        console.log("updated", meal);
      })
      .catch((error) => {
        console.log("Failed");
      });
    // }
  };
  return (
    <div>
      <button onClick={updateData}>Update Data in a Table</button>
    </div>
  );
};

export default UpdateTable;
