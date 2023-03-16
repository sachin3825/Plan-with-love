import React, { useState } from "react";
import Tours from "./Components/Tours";
import data from "./data";

const App = () => {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  }

  if (tours.length === 0) {
    return (
      <div className='Refresh'>
        <h2 className='Refresh-title'>No Data left</h2>
        <button className='btn-white' onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
};

export default App;
