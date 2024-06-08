import React from "react";
import Card from "./Card";

const Education = () => {
  return (
    <div className="flex flex-wrap gap-4 2xl:gap-12">
      <Card
        title="Object Oriented in Software Development"
        subtitle="Southern Alberta Institute of Technology"
        date="2022 - 2023"
      />
      <Card
        title="Bachelor of Science in Computer Science"
        subtitle="Cavite State University - Rosario Campus"
        date="2013 - 2017"
      />
    </div>
  );
};

export default Education;
