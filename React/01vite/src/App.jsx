import { useState } from "react";


function App() {
  let [counter,setCounter] = useState(0);

  const Addcounter = () => {
    if(counter==20){
      setCounter(0)
    }
    else{
      counter = counter+1;
      setCounter(counter);
    }
  }

  const Subcounter = () => {
    if(counter==0){
      setCounter(20)
    }
    else{
      counter = counter-1;
      setCounter(counter);
    }
  }

  return (
    <>
    <h1>{counter}</h1>
    <button onClick={Addcounter}>Add</button>
    <br />
    <button onClick={Subcounter}>Substract</button>
    </>
  )
}

export default App
