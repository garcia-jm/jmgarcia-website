import React from "react";
import Card from "./Card";

const Experience = () => {
  return (
    <div className="flex flex-wrap gap-4 2xl:gap-12">
      <Card
        title="Backend Developer"
        subtitle="Freelance Job (Remote)"
        date="July 2024 - Present"
      />
      <Card
        title="Web Developer"
        subtitle="Ingraph Ltd."
        date="January - May 2024"
      />
      <Card
        title="FC Associate I"
        subtitle="Amazon Delivery Station."
        date="2021 - 2023"
      />
    </div>
  );
};

export default Experience;
