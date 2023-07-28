import React, { useState } from "react";
import TrackCep from "./TrackCep";
import { Helmet } from "react-helmet";

function App() {
  const [events, setEvents] = useState([]);

  const convertToArray = (obj) => {
    const arr = [obj];
    return arr;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    fetch(`https://viacep.com.br/ws/${data.tracking}/json/`)
      .then((response) => response.json())
      .then((data) => {
        const array = convertToArray(data);
        setEvents(array);
      })
      .catch((error) => {
        alert('CEP inválido');
        console.log(error.message);
        setEvents([]);
      });
  };

  return (
    <div id="container-board" className="container">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto" rel="stylesheet" />
      </Helmet>
      <h1>Buscar CEP</h1>

      <form onSubmit={submitHandler}>
        <div id="type-cep" className="form-group">
          <input type="text" name="tracking" className="form-control" />
          <button type="submit" name="TrackerCEP" className="btn btn-primary">
          Buscar
          </button>
        </div>
        
      </form>

      <TrackCep events={events} />
    </div>
  );
}

export default App;
