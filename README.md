Namste React 

📦 Parcel Bundler

This project uses Parcel as the web application bundler to simplify development and build processes. Parcel offers a zero-configuration setup, making it easy to work with modern JavaScript frameworks like React. It automatically handles tasks such as JSX and ES6 transpilation, module bundling, asset optimization, and hot module reloading during development. With Parcel, there's no need to manually configure Babel, Webpack, or other build tools — it just works out of the box, helping you focus on writing code.

Food Ordering App
/*
### Components in Our App
1. Header
   1.1. Logo 
   1.2. Nav Items

2. Body
   2.1. Search
   2.2. Restaurant  Container
        2.2.1. Restaurant Card
               2.2.1.1. Image
               2.2.1.2. Name of Restaurant
               2.2.1.3. Star Rating 
               2.2.1.4  Cuisine etc.

3. Footer
   3.1. Copyright
   3.2. Links
   3.3. Address
   3.4. Contact

*/


Two types of Export/Import

- Default Export/Import

export default Component;
import Component from "path";

- Named Export/Import

export const Component;
import {Component} from "path";

# React Hooks
 (Normal JS functions)
 - useState() - suprepowerful state variables
 - useEffect()

# Reconciliation Algorithm (React Fiber)
 React Fiber is the internal engine introduced in React 16 that powers the reconciliation algorithm—the process React uses to determine how to efficiently update the DOM in response to changes in state or props. It improves upon the older synchronous algorithm by enabling asynchronous rendering, allowing React to break rendering work into small units and pause, resume, or abort tasks as needed. This improves performance, especially for large or complex UI trees. Key features of Fiber include:

   Incremental rendering: rendering work is split into chunks, allowing React to yield to the browser.

   Prioritization: urgent updates (like user input) are processed before non-urgent ones.

   Concurrency support: powers features like Concurrent Mode and Suspense.

   Better error handling and debugging: more flexible lifecycle management.

 During reconciliation, Fiber builds a new virtual tree of components (the Fiber tree), compares it with the previous one, and marks nodes with effects like placement, update, or deletion. In the commit phase, these effects are applied to the real DOM. It also heavily relies on keys to efficiently reconcile lists by matching elements. Overall, Fiber gives React the ability to build highly responsive and maintainable UIs.