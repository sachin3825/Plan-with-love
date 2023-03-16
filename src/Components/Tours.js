import Card from "./Card";

function Tours({ tours, removeTour }) {
  return (
    <div>
      <div className='container'>
        <h1 className='title'>Plan With love</h1>
      </div>
      <div className='cards'>
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </div>
  );
}

export default Tours;
