import React, { useEffect, useRef } from "react";

const EditInput = ({
  updateInput,
  handleUpdateInput,
  handleUpdateInputBlur,
}) => {
  const inputRef = useRef();
  useEffect(() => {
    console.log("component mount");
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input
        onBlur={handleUpdateInputBlur}
        onChange={handleUpdateInput}
        value={updateInput}
        ref={inputRef}
        type="text"
        name=""
        id=""
        className={`border border-purple-500 focus:outline-purple-300 px-3 py-1 w-[250px]`}
      />
    </div>
  );
};

export default EditInput;
