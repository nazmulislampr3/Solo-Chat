import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="box">
      <p className="paragraph">This is a paragraph</p>
      <div className="box1">
        <div className="box2">
          <p>This is a paragraph 2</p>
        </div>
      </div>
    </div>
  );
}

export default App;
