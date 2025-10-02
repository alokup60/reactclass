import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div >
      <button
        className="bg-blue-500 hover:bg-blue-400 cursor-pointer text-white px-3 py-1 rounded-md"
        onClick={handleClick}
      >
        Count {count}
      </button>
    </div>
  );
};

export default Counter;
