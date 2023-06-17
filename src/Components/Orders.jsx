export default function Orders( {cliente, mesa, ingreso, entrega} ) {
    return (
      <>
      <div className='single-order'>
      <h3 id='text-orders'> {cliente} </h3>
      <h3 id='text-orders'> {mesa} </h3> 
      <h3 id='text-orders'> {ingreso} </h3>
      <h3 id='text-orders'> {entrega} </h3> 

      </div>
      </>
    );
  }