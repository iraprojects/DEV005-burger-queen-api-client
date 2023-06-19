export function BarDescription({text}){

    return <>
        <div className="bar-container">
            <p className="bar-element">{text}</p>
            <p className="bar-element">Precios</p>
        </div>
    </>
}