import Pet from "./Pet";

function Results({ pets }) {
  return (
    <>
      {!pets.length ? (
        <h1>No pets found!</h1>
      ) : (
        pets.map(({ name, breed, animal, id, images, city, state }) => (
          <Pet
            key={id}
            name={name}
            breed={breed}
            animal={animal}
            images={images}
            location={`${city}, ${state}`}
            id={id}
          />
        ))
      )}
    </>
  );
}

export default Results;
