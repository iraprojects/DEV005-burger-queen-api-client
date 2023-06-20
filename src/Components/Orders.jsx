export default function Orders( {cliente, mesa, ingreso, entrega, check} ) {

  const formatTime = (time) => {
    const date = new Date(time);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

    return (
      <>
      <div className='single-order'>
      <h3 id='text-orders'> {cliente} </h3>
      <h3 id='text-orders'> {typeof mesa === 'number' ? mesa : ''} </h3>
      <h3 id='text-orders'> {formatTime(ingreso)} </h3>
      <h3 id='text-orders'> {formatTime(entrega)} </h3>
      <input type="checkbox" checked={check} />

      </div>
      </>
    );
  }