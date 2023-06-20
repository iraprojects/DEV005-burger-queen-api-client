export default function TitleOrders({titleEntrega, servido}) {

    return <>
        <div className="title-orders">
        <h2>Nombre Cliente</h2>
        <h2>Mesa</h2>
        <h2>Hora ingreso<br />de pedido</h2>
        <h2>{titleEntrega}</h2>
        <h2>{servido}</h2>
        </div>

  </>

}