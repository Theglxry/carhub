"use client";

import { CustomFilter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";
// import Image from "next/image";



// make this component async since it takes an api call too (fetchCars)
export default async function Home() {
  const allCars = await fetchCars();

  /* _____________check if fetchCars data is empty_________
todo -> pseudo code:
Define a boolean variable isDataEmpty
Check if allCars is not an array, or its length is less than 1, or it's falsy
if (
  allCars is not an array OR
  length of allCars is less than 1 OR
  allCars is falsy (null, undefined, false, 0, "", etc.)
) then
  set isDataEmpty to true
else
  set isDataEmpty to false
end if
  */

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  console.log(isDataEmpty);

//todo-> end of pseudo code



  return (
    <main className="overflow-hidden ">
      <Hero />

      {/* Car Catalogue*/}
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        {/* search bar area */}
        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
      </div>
    </main>
  );
}
