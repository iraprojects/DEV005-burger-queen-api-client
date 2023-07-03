// import ApiOrders from "../Utilities/ApiOrders";

export default function OrderHeader({ client, noteOrder }) {
    return (
      <div className="order-header">
        {client && <h3 className="element-header">Cliente: {client}</h3>}
        {noteOrder && <h3 className="element-header">{noteOrder}</h3>}
      </div>
    );
  }