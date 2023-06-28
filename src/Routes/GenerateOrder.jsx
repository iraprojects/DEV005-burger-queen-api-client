import '../styles/mesero.css';
import '../styles/orders.css'
import Top from "../Components/Top";
import Footer from "../Components/Footer";
import LogoMesero from '../assets/logo-mesero.png'
import Buttons from '../Components/Button';
import { Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CircularJSON from 'circular-json';


export default function Order() {
    const [saveOrders, setSaveOrders] = useState([]);
    const [deletedOrders, setDeletedOrders] = useState([]);
    const [sendOrder, setSendOrder] = useState('');
    const [clientName, setClientName] = useState('');

    useEffect(() => {
        try {
            const savedOrders = localStorage.getItem('saveOrders');
            const parsedOrders = savedOrders ? CircularJSON.parse(savedOrders) : [saveOrders];
            setSaveOrders(parsedOrders);
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
    }, []);

    const totalSaveOrders = () => {
        let total = 0;
        {
            saveOrders.forEach((order) => {
                if (order.price !== undefined) {
                    if (order.amount > 1) {
                        total += parseInt(order.price) * parseInt(order.amount)
                    } else {
                        total += parseInt(order.price)
                    }
                }
            })
        }
        return total;
    }

    const handleReturnClick = () => {
        return <Navigate to="/mesero" />;
    };

    const handleDeleteOrder = (index) => {
        const updatedOrders = [...saveOrders];
        const deletedOrder = updatedOrders.splice(index, 1)[0];
        setSaveOrders(updatedOrders);
        setDeletedOrders([...deletedOrders, deletedOrder]);
    };

    const handleSendOrder = async () => {
        const orders = saveOrders.filter((o) => o.text)

        const orderData = {
            userId: 1,
            client: clientName,
            products: orders.map((order) => ({
                qty: order.amount,
                product: {
                    id: order.productID,
                    name: order.text,
                    price: order.price,
                    type: order.typeFood,
                    dateEntry: order.dateEntry,
                },
            })),
            status: "pending",
            dataEntry: new Date().toISOString(),
        }
        try {
            const token = localStorage.getItem("accessToken");
            const response = await fetch("http://localhost:8080/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(orderData),
            });
            console.log(orderData);
            if (response.ok) {
                console.log("Pedido enviado exitosamente");
            } else {
                console.error("Error al enviar el pedido:", response.status);
            }
        } catch (error) {
            console.error("Error de red:", error);
        }
    }

    return <>
        <Top logoUser={LogoMesero} />

        <div className='gray-container'>
            <input
                type="text"
                className='input-order'
                placeholder='Nombre del cliente'
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                autoFocus
            />

            <div className='container'>
                <div className='orders-container'>
                    <h2>Pedido Generado:</h2>
                    {saveOrders.map((order, index) => (
                        <div key={index}>
                            {order.text && <p>Nombre: {order.text}</p>}
                            {order.price && <p>Precio: {order.price}</p>}
                            {order.amount && <p>Cantidad: {order.amount}</p>}
                            {order.text && <button onClick={() => handleDeleteOrder(index)}>Eliminar</button>}
                        </div>
                    ))}

                </div>

                <div className='note-total-container'>
                    <div className='notes-container'>
                        Notas: Cafe sin azúcar.

                    </div>
                    <div className='total-container'>
                        <p id='p-total'>Total: ${totalSaveOrders()}</p>
                        <Buttons
                            id={'btn-confirmOrder'}
                            text={'Confirmar'}
                            onClick={handleSendOrder}
                        />
                    </div>

                </div>

            </div>

        </div>

        <Footer otherClass={'p-return'}
            text={
                <>
                    <Link to={'/mesero'}>
                        <Buttons
                            id={'btn-return'}
                            text={"⏎"}
                            onClick={handleReturnClick}
                            /* active={selectedPedido === 'pedidos'} */ />
                    </Link>

                </>
            }
        />
    </>;
}
