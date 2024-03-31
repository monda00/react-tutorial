import { useState } from "react";

export default function StateBasic({ init }) {
  const [count, setCount] = useState(init);
  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount((c) => c + 1);
  };
  return (
    <>
      <button onClick={handleClick}>Count</button>
      <p>{count}</p>
    </>
  );
}
