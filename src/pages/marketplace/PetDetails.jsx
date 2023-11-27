import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { petData } from "../../data";

const PetDetails = () => {
  const { petID } = useParams();

  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);

  //   write a function that will return the item frm the array
  const findPetByID = () => {
    let pet = petData.find((item) => item.id === petID);
    setPet(pet);
    return pet;
  };

  useEffect(() => {
    findPetByID();
    const timeOut = setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <h1>Getting pet info...</h1>;
  }

  return (
    <div>
      <h1>hello</h1>
      <h1>{pet.name}</h1>
    </div>
  );
};

export default PetDetails;
