export default function OrderCheck({check}){

    return <>
        <div className="check-container">
            <div className="check-container2"> 
            <p className="check-element">Orden Lista</p>
            <input type="checkbox" id="miCheckbox" checked={check} />
            </div>
        </div>
    </>
}