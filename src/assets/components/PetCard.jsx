import React from "react";
import { Card, Tag, Button, Tooltip } from "antd";

const colors = ["orange"];

const PetCard = ({ adopted, id, location, name, photo, race, type }) => {
  return (
    <div>
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
          <Tag color="orange">{adopted ? "adopted" : "Not adopted"}</Tag>
          <div className="mt-4">
            <Tooltip title="prompt text" color={colors} key={colors}>
              <Button className="bg-blue-500 text-white relative h-10 w-28 ">
                Adopt
              </Button>
            </Tooltip>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PetCard;
