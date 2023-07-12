export default function TitleOrders({titleEntrega, servido, id}) {

    return <>
        <div id={id} className="title-orders">
        <h2 id="h2-client">Cliente</h2>
        {/* <h2>Hora</h2> */}
        {titleEntrega && <h2>{(titleEntrega)}</h2>}
        {servido && <h2 id="h2-status">{(servido)}</h2>}
        </div>

  </>

}