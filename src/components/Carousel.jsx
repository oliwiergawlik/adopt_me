import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    this.setState({ active: +event.target.dataset.index });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" data-testid="thumbnail" />
        <div className="carousel-smaller">
          {images.map((image, idx) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
            <img
              src={image}
              alt="animal thumbnail"
              key={image}
              className={active === idx ? "active" : ""}
              onClick={this.handleIndexClick}
              data-index={idx}
              data-testid={`thumbnail-${idx}`}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
