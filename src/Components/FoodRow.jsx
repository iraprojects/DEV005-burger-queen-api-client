import React, { useState } from "react";

export default function FoodRow({ text, price, typeFood, dateEntry, key, productID, onGenerateOrder }) {
    const [amount, setAmount] = useState(0);

    const handleAmountChange = (e) => {
        const value = e.target.value;
        setAmount(value);
    };

    const handleClick = () => {
        if (amount > 0) {
            const order = {
                productID,
                text,
                price,
                amount,
                typeFood,
                dateEntry
            };
            onGenerateOrder(order);
        }
        
    };

    return (
        <>
            <div className="container-foodRow">
                <p className="text-food" key={key} dateentry={dateEntry} productid={productID} typefood={typeFood}>{text}</p>
                <p className="text-food" id="price" typefood={typeFood}>{price}</p>
                <input
                    type="number"
                    className="text-food camount"
                    onChange={handleAmountChange}
                    value={amount}
                    min="0"
                    max="20"
                />
                <button onClick={handleClick}>Añadir</button>
            </div>
        </>
    );
}
