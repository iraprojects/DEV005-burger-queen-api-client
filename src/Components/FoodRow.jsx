import handleInputChange from "../Utilities/InputValidation";

export default function FoodRow({ text, price }) {
    const handleChange = (e) => {
        handleInputChange(e);
    };
    return (
        <>
            <div className='container-foodRow'>
                <input type="text" className="text-food" value={text} readOnly />
                <input type="text" className="text-food" id="price" value={price} readOnly />
                <input 
                    type="number" 
                    className="text-food camount" 
                    onInput={handleChange}
                    id="amount" 
                    min="0" max="20" />
            </div>
        </>
    );
}