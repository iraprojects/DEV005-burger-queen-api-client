// Orders.jsx
export default function Orders({ cliente, ingreso, entrega, status, handleClientClick, showCheckbox, updateOrderStatus, orderId, btnOption }) {
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

  const handleCheckboxChange = (orderId, newCheckValue) => {
    if (newCheckValue) {
      updateOrderStatus(orderId, "delivered");
      console.log('estado ahora es delivered');
    }
  };
  /* const handleCheckboxChange = (orderId, newCheckValue) => {
    const newStatus = newCheckValue ? "delivered" : "delivering";
    updateOrderStatus(orderId, newStatus);
  };
 */
  return (
    <>
      <div className="single-order" name={cliente} onClick={handleClick}>
        <h3 id="text-orders">{cliente}</h3>
        <h3 id="text-orders">{formatTime(ingreso)}</h3>
        <h3 id="text-orders">{status}</h3>
        {btnOption && <button>Ver orden</button>}
        {entrega && <h3 id="text-orders">{formatTime(entrega)}</h3>}
        {showCheckbox && <input type="checkbox"  onChange={(e) => handleCheckboxChange(orderId, e.target.checked)}/>}
      </div>
    </>
  );
}
