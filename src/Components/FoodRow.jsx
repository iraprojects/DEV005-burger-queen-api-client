// import handleInputChange from "../Utilities/InputValidation";
import React, { useState } from "react";

export default function FoodRow({ text, price, typeFood, onAmountChange, setInputValues }) {
    const handleInputChange = (e) => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        setInputValues(name, value);
    };
    return (
        <>
            <div className='container-foodRow'>
                <input type="text" className="text-food" value={text} typeFood={typeFood} name="text" />
                <input type="text" className="text-food" id="price" value={price} name="price" readOnly />
                <input
                    type="number"
                    className="text-food camount"
                    onChange={onAmountChange}
                    // value={amount}
                    name="amount"
                    id="amount"
                    min="0" max="20" />
            </div>
        </>
    );
}