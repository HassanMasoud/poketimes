import React from "react";
import Rainbow from "../hoc/Rainbow";
const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aperiam
        beatae quod molestiae error itaque natus exercitationem officia suscipit
        cumque.
      </p>
    </div>
  );
};

export default Rainbow(About);
