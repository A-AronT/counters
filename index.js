import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./index.css";
 
const Counter = (props) => {
 const [counter, setCounter] = useState(5) ; // muutuja ja muutuja “setter”
 const updateCounter = (newValue) => {setCounter(newValue)} // funktsioon
 return (
  <div>
    <p>Step: {props.step}</p>
      <span>
      <button onClick={function(){updateCounter(Math.min(counter + props.step, 10))}}>+</button>
      <p>{counter.toFixed(1)}</p>
      <button onClick={function(){updateCounter(Math.max(counter - props.step, 0))}}>-</button>
      </span>
  </div>
 ) // JSX
}
 
const App = () => {
return (
  <main>
    <h1>Counters</h1>
    <Counter step={1}></Counter>
    <Counter step={2}></Counter>
    <Counter step={0.1}></Counter>
  </main>
);
};
 
ReactDOM.render(<App />, document.getElementById("root"));
