import React from "react";
import ReactDOM from "react-dom/client";

const elem=<span>React element</span>

const Title=()=>(
  <h1>Hello</h1>
);

const heading=(
  <div>
    <Title/>
    {Title()}
    <Title></Title>
    {180+100}
    <h1 id="heading">
      {elem}
      Namaste React
    </h1>
  </div>
);


const Headingcomponent=()=>(
  <div>
    {heading}
    <Title />
    <h1 id="heading">Namaste react from component</h1>
  </div>
);


const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<Headingcomponent/>);
