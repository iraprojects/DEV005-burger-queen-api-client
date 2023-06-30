// Orders.jsx
export default function Orders({ cliente, ingreso, entrega, handleClientClick }) {
  const formatTime = (time) => {
    const date = new Date(time);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const handleClick = () => {
    localStorage.setItem('selectedClient', cliente);
    handleClientClick(cliente);
  };

  return (
    <>
      <div className="single-order" name={cliente} onClick={handleClick}>
        <h3 id="text-orders">{cliente}</h3>
        <h3 id="text-orders">{getRandomInt(5)}</h3>
        <h3 id="text-orders">{formatTime(ingreso)}</h3>
        {entrega && <h3 id="text-orders">{formatTime(entrega)}</h3>}
      </div>
    </>
  );
}
