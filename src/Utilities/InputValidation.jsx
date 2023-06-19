export default function handleInputChange(e) {
    const inputValue = e.target.value;
    const filteredValue = inputValue.replace(/[^0-9]/g, '');
    e.target.value = filteredValue;
};