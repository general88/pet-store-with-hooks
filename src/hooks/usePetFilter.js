import React from "react";
import { petData } from "../data";

export function usePetFilter(value, filterType) {
  const [pets, setPets] = React.useState(petData);

  React.useEffect(() => {
    //    return all the values if value is equal to empty string

    if (value === "") {
      setPets((prev) => prev);
      return;
    }

    // run filter method
    const filteredPets = petData.filter(
      (item) => item[filterType].trim() === value.trim()
    );

    setPets(filteredPets);
  }, [value]);

  return { pets };
}
