export default function FoodRow({text, price}) {
    return (
        <>
            <p className="text-food">{text}</p>
            <p className="text-food">{price}</p>
            <input type="number" className="text-food" id="amount"/>
        </>
    );
}