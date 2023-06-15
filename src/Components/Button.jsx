/* eslint-disable react/prop-types */

export default function Buttons({onClick, text}) { 

    return <>
    <button className='button-form' type="submit" onClick={onClick}>{text}</button>
    </>
}