import { useState } from "react";

function Counter() {
  const [count, setcount] = useState(0);
  return (
    <div>
      <button onClick={() => setcount(count + 1)}>+</button>
      <button
        onClick={() => {
          if (count > 0) {
            setcount(count - 1);
          }
        }}
      >
        -
      </button>

      <button onClick={()=> setcount(0)}>
        Reset
      </button>

      <p>{count}</p>
    </div>
  );
}

export default Counter;
