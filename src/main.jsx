import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DataContextProvider from "./contexts/DataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataContextProvider>
    <App />
  </DataContextProvider>
);

// const str = "so pyay latt";

// const nums = [1, 3, 2, 4];
// console.log(Array.from(nums,el => el*2));

// console.log(Array.from({length:6},(_,index) => index));
