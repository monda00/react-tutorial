import { useRecoilState } from "recoil";
import { counterAtom } from "./atom";

export default function RecoilCounter() {
  const [counter, setCounter] = useRecoilState(counterAtom);

  const handleClick = () => {
    setCounter((c) => c + 1);
  };

  return (
    <>
      <button onClick={handleClick}>Counter</button>
      <p>{counter} clicked</p>
    </>
  );
}
