export default function OrderContent({order, text, qty, status, dateEntry}){

    return <>
        <div className="order-content">
            {order && <p className="content-element">{order}</p>}
            {text && <p className="content-element">{text}</p>}
            {qty && <p className="content-element">Cantidad: {qty}</p>}
            {status && <p className="content-element">Estado: {status}</p>}
            {dateEntry && <p className="content-element">Hora: {dateEntry}</p>}
        </div>
    </>
}