import React from "react";
import PetCard from "./PetCard";

const PetList = ({ pets }) => {
  return (
    <div className="my-8 max-w-4xl px-2 mx-auto">
      <div className="mx-auto grid grid-cols-1 items-center justify-center  sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {pets.map((pet) => (
          <PetCard key={pet.id} {...pet} />
        ))}
      </div>
    </div>
  );
};

export default PetList;
