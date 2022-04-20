const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
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
};

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
