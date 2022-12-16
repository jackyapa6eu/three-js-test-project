import {useRef} from "react";
const IntervalContainer = ({eventIntervals, optionsArray, setSelectedOptions, handleSubmit, id, setEventIntervals}) => {

    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setEventIntervals((prev) => {
            const newState = {...prev};
            newState[id] = { ...prev[id], [name]: value };
            return newState;
        });
    }

    const deleteEventInterval = () => {
        setEventIntervals((prev) => {
            const newState = {...prev};
            delete newState[id];
            return newState;
        });
    }

    const handleOnChange = (event) => {
        const elemId = event.target.value;
        setEventIntervals((prev) => {
            const newState = {...prev};
            newState[id] = { ...prev[id], selected: { id: Number(elemId) }};
            setSelectedOptions(Object.values(newState).map((element) => element.selected.id));
            return newState;
        });
    }

    console.log('rerender');

    return (
        <div>
            <select onChange={handleOnChange} >
                {optionsArray.map((option, index) => {
                    return <option value={option.id} key={index + option.id + option.name}>{option.id}</option>
                })}
            </select>
            <button type="button" onClick={deleteEventInterval}>del</button>
        </div>
    )
}

export { IntervalContainer }