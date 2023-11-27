import React from "react";
import PetList from "../../assets/components/PetList";
import NavBar from "../../assets/components/NavBar";
import Filter from "../../assets/components/Filter";
import { usePetFilter } from "../../hooks/usePetFilter";

const MarketPlace = () => {
  const [filterState, setFilterState] = React.useState({
    value: "",
    filterType: "",
  });

  const { pets } = usePetFilter(filterState.value, filterState.filterType);

  return (
    <>
      {/* <NavBar /> */}
      <Filter setFilterState={setFilterState} />
      <PetList pets={pets} />
    </>
  );
};

export default MarketPlace;
