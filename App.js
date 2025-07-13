import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child", key: "child1" }, // ✅ key added
    [
      React.createElement("h1", { key: "h1-1" }, "I'm an h1 tag"),
      React.createElement("h2", { key: "h2-1" }, "I'm an h2 tag"),
    ]
  ),
  React.createElement(
    "div",
    { id: "child2", key: "child2" }, // ✅ key added
    [
      React.createElement("h1", { key: "h1-2" }, "I'm an h1 tag"),
      React.createElement("h2", { key: "h2-2" }, "I'm an h2 tag"),
    ]
  ),
]);

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(parent);
