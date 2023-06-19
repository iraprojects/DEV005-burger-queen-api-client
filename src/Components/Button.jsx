
export default function Buttons({onClick, text, id}) { 

    return <>
    <button className='button-form' id={`${id}`} type="submit" onClick={onClick}>{text}</button>
    </>
}