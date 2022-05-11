import { useParams } from "react-router-dom";
import { Component } from "react";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

class Details extends Component {
  state = {
    loading: true,
    showModal: false,
  };

  async componentDidMount() {
    const response = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );

    const data = await response.json();

    // this.setState({ loading: false, ...data.pets[0] });
    this.setState(Object.assign({ loading: false }, data.pets[0]));
  }

  toggleModal() {}

  render() {
    if (this.state.loading) {
      return <h2>Loading</h2>;
    }
    const { name, animal, breed, city, description, state, images } =
      this.state;

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {city}, {state}
          </h2>

          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                style={{ backgroundColor: theme }}
                onClick={this.toggleModal}
              >
                Adopt {name}!
              </button>
            )}
          </ThemeContext.Consumer>

          <p>{description}</p>
        </div>
        <Carousel images={images} />
      </div>
    );
  }
}

function WrappedDetails() {
  const params = useParams();

  return (
    <ErrorBoundary>
      <Details params={params} />
    </ErrorBoundary>
  );
}

export default WrappedDetails;
