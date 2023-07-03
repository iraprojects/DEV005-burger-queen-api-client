// Orders.jsx
export default function Orders({ cliente, ingreso, entrega, status, handleClientClick }) {
  const formatTime = (time) => {
    const date = new Date(time);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const handleClick = () => {
    localStorage.setItem('selectedClient', cliente);
    handleClientClick(cliente);
  };

  return (
    <>
      <div className="single-order" name={cliente} onClick={handleClick}>
        <h3 id="text-orders">{cliente}</h3>
        <h3 id="text-orders">{formatTime(ingreso)}</h3>
        <h3 id="text-orders">{status}</h3>
        {entrega && <h3 id="text-orders">{formatTime(entrega)}</h3>}
      </div>
    </>
  );
}
