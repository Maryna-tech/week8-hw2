import './App.css';
import { useState } from 'react';

//multiple conditions
function App() {
  const [title, setTitle] = useState("The $100 startup");
  const [year, setYear] = useState(2010);
  const [rating, setRating] = useState("5 stars");

  const changeYear =()=>{
    setYear(2015)
  }
  return (
    <div className="App">
      <p>{title}</p>
      <p>{year}</p>
      <p>{rating}</p>
      <button onClick={changeYear}>Click here</button>
    </div>
  );
}

export default App;
