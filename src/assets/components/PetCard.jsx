import React, { useState } from "react";
import { Card, Tag, Button, Tooltip } from "antd";
import { Link } from "react-router-dom";

const colors = ["orange"];

const PetCard = ({ adopted, id, location, name, photo, race, type }) => {
  // This turns the not adopted to adopt
  const [name1, setName1] = useState("Not adopted");
  const handleClick = () => setName1("Adopted");

  const [check, setCheck] = useState(false);
  // ...
  // setCheck((prevCheck) => !prevCheck);

  // *********************************************************************************
  return (
    <Link to={`${id}`}>
      <Card
        cover={
          <img alt="Card Image" src={photo} className="h-40 object-cover" />
        }
      >
        <h2>{name}</h2>
        <div className="pt-4">
          <Tag color="error">{race}</Tag>
          <Tag color="geekblue">{type}</Tag>
          <Tag color="purple">{location}</Tag>
          {/* <Tag color="orange">{adopted ? "adopted" : "Not adopted"}</Tag> */}
          <Tag color="orange">{name1}</Tag>
          <div className="mt-4">
            <Tooltip title="" color={colors} key={colors}>
              <Button
                onClick={handleClick}
                className="bg-blue-500 text-white relative h-10 w-28 "
              >
                Adopt
              </Button>
            </Tooltip>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default PetCard;
