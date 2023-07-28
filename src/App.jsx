import React, { useState } from "react";
import TrackCep from "./TrackCep";

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
        
        if (data.erro) {
          throw new Error("CEP não encontrado");
        }

        const array = convertToArray(data);
        setEvents(array);
      })
      .catch((error) => {
        console.log(error.message);
        setEvents([]);
      });
  };

  return (
    <div className="container">
      <h1>Buscar CEP</h1>

      <form onSubmit={submitHandler}>
        <div className="form-group">
          <input type="text" name="tracking" className="form-control" />
        </div>
        <button type="submit" name="TrackerCEP" className="btn btn-primary">
          Buscar
        </button>
      </form>

      <TrackCep events={events} />
    </div>
  );
}

export default App;
