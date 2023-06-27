// import ApiOrders from "../Utilities/ApiOrders";

export default function OrderHeader({ client, mesa, noteOrder }) {
    return (
      <div className="order-header">
        {client && <h3 className="element-header">Cliente: {client}</h3>}
        {mesa && <h3 className="element-header">N° de mesa: {mesa}</h3>}
        {noteOrder && <h3 className="element-header">{noteOrder}</h3>}
      </div>
    );
  }