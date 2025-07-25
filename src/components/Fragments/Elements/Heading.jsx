import React from "react";

const Heading = (props) => {
  const { className, children, style, onMouseMove, ref } = props;

  return (
    <h1 ref={ref} style={style} onMouseMove={onMouseMove} className={className}>
      {children}
    </h1>
  );
};

export default Heading;
