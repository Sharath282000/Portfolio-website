import React from "react";

const SkillList = ({icon,skill}) => {
  return (
    <span>
      <p>{icon}</p>
      <p>{skill}</p>
    </span>
  );
};

export default SkillList;
