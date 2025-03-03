
//import Parent from './Components/Parent';
import { useState, useEffect } from "react";

function Useeffect() {
  const [Increase, setIncrease] = useState(0);
  const [Decrease, setDecrease] = useState(10);
  useEffect(() => {
    alert('Increasing one numbers')
  }, [Increase]);

  return (
    <>
  <div>
    <h1>Counting : {Increase}</h1>
    <button onClick={() => setIncrease(Increase + 1)}>Increase</button>
    <h2>Checking : {Decrease}</h2>
    <button onClick={() => setDecrease(Decrease - 1)}>Decrease</button>
  </div>
  </>
  );
}

export default Useeffect;