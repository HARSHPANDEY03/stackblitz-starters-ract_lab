import React from 'react';

const Child = (props) => {
  return (
    <>
      <h2>
        This is Child {props.age} year old,
        <br /> lives in {props.address}
      </h2>
    </>
  );
};
export default Child;
