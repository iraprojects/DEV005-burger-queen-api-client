export default function OrderCheck({ check, onCheckChange }) {

	const handleCheckChange = (event) => {
		const newCheckValue = event.target.checked;
		onCheckChange(newCheckValue);
	};

	return <>
		<div className="check-container">
			<div className="check-container2">
				<label htmlFor="miCheckbox" className="check-element">Orden Lista</label>
				<input type="checkbox" id="miCheckbox" checked={check} onChange={handleCheckChange} />
			</div>
		</div>
	</>
}