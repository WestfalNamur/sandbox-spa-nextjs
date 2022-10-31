import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={"flex flex-row"}>
      <p className={"p-2"}>Count: {count}</p>
      <p className={"p-2"} onClick={() => setCount(count + 1)}>
        Increment
      </p>
    </div>
  );
};

export default Counter;
