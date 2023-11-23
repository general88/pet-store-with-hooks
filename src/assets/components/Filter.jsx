import React from "react";
import { Select } from "antd";

const Filter = ({ setFilterState }) => {

    
  const handleRaceFilter = (value) => {
    setFilterState({
      filterType: "race",
      value: value,
    });
  };

  const handleTypeFilter = (value) => {
    setFilterState({
      filterType: "type",
      value: value,
    });
  };

  const handleLocationFilter = (value) => {
    setFilterState({
      filterType: "location",
      value: value,
    });
  };

  return (
    <div className="mt-10 my-8 max-w-4xl px-2 mx-auto">
      <h2 className="text-red-800">Filters</h2>
      <div className="flex gap-8 mx-auto mt-5">
        <Select
          defaultValue="Race"
          style={{
            width: 200,
          }}
          onChange={handleRaceFilter}
          allowClear
          options={[
            {
              value: "German Shephered",
              label: "German Shephered",
            },
            {
              value: "Maltese dog",
              label: "Maltese dog",
            },
            {
              value: "Bull Dog",
              label: "Bull Dog",
            },
            {
              value: "Labrador Retriever",
              label: "Labrador Retriever",
            },
            {
              value: " Siberian Husky",
              label: "Siberian Husky",
            },
            {
              value: " French Bulldog",
              label: "French Bulldog",
            },
            {
              value: " Beagle",
              label: "Beagle",
            },
            {
              value: " Golden Retriever",
              label: "Golden Retriever",
            },
            {
              value: " Alaskan Malamute",
              label: "Alaskan Malamute",
            },
            {
              value: " Dachshund",
              label: "Dachshund",
            },
          ]}
        />
        <Select
          defaultValue="Type"
          style={{
            width: 200,
          }}
          onChange={handleTypeFilter}
          allowClear
          options={[
            {
              value: "Black",
              label: "Black",
            },
            {
              value: "Brown",
              label: "Brown",
            },
            {
              value: "White",
              label: "White",
            },
          ]}
        />
        <Select
          defaultValue="Location"
          style={{
            width: 200,
          }}
          onChange={handleLocationFilter}
          allowClear
          options={[
            {
              value: "VI, Lagos",
              label: "VI, Lagos",
            },
            {
              value: "Ikeja, Lagos",
              label: "Ikeja, Lagos",
            },
            {
              value: "Asokoro, Abuja",
              label: "Asokoro, Abuja",
            },
            {
              value: "Wuse, Abuja",
              label: "Wuse, Abuja",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Filter;
