// FoodRow.jsx

import React, { useState } from "react";

export default function FoodRow({ text, price, typeFood, onGenerateOrder }) {
    const [amount, setAmount] = useState(0);

    const handleAmountChange = (e) => {
        const value = e.target.value;
        setAmount(value);
    };

    const handleClick = () => {
        if (amount > 0) {
            const order = {
                text,
                price,
                amount,
            };
            onGenerateOrder(order);
        }
        
    };

    return (
        <>
            <div className="container-foodRow">
                <p className="text-food" typefood={typeFood}>{text}</p>
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
