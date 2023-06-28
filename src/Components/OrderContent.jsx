export default function OrderContent({order, text}){

    return <>
        <div className="order-content">
            {order && <p className="content-element">{order}</p>}
            {text && <p className="content-element">{text}</p>}
        </div>
    </>
}