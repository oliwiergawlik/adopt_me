import React from "react";
import Pet from "./components/Pet";

export default function App() {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      //props:
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      //props:
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    })
  );
}
