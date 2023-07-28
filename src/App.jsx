function App() {
  
  const submitHandler = e => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    fetch('http://localhost:3001/?tracking' + data.tracking)
      .then(response => response.json())
      .then(console.log)
      .catch(error => console.error);
  }

  return (
    <div className="container">

      <h1>Buscar CEP</h1>

      <form onSubmit={submitHandler}>

        <div className="form-group">

          <input type="text" name="tracking" className="form-control" />

        </div>

        <button type="submit" name="TrackerCEP" className="btn btn-primary">Buscar</button>

      </form>
    </div>
  )
}

export default App;
