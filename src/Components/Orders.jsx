export default function Orders( {cliente, mesa, ingreso, entrega} ) {
    return (
      <>
      <div className='orders'>
      <p className='pOrders'> {cliente} </p>
      <p className='pOrders'> {mesa} </p> 
      <p className='pOrders'> {ingreso} </p>
      <p className='pOrders'> {entrega} </p> 

      </div>
      </>
    );
  }