import './App.css';
const axios = require('axios');

function Get(){
  axios.get('http://localhost:1000/api/days')
      .then("Success");
}

function App() {
  return (
    <div className="App">
      
      <h1>Hello SAM</h1>
    </div>
  );
}

export default App;
