import React, {useEffect} from "react";
import './App.css';
import {useState} from "react";
import {IntervalContainer} from "./IntervalContainer";
import MultySelect from "./MultySelect";

export const optionsArr = [
  { id: 4145, name: '1111111111'},
  {id: 125, name: '222222222'},
  {id: 464, name: '3333333333'},
  {id:98, name: '444444444'},
  {id:415, name: '5555555555'},
  {id:1725, name: '666666666666'},
  {id:4664, name: '77777777777'},
  {id:398, name: '888888888888'},
  {id: 4515, name: '99999999999'},
  {id:1205, name: 'qqqqqqqqq'},
  {id:44, name: 'wwwwwwwwww'},
  {id:9118, name: 'eeeeeeeeeee'},
  {id: 46515, name: 'rrrrrrrrrrrr'},
  {id:1245, name: 'ttttttttttt'},
  {id: 4004, name: 'yyyyyyyyyyyy'},
  {id:9208, name: 'uuuuuuuuuuu'},
  {id: 49915, name: 'iiiiiiiiiiiii'},
  {id:17225, name: 'ooooooooooo'},
  {id:4994, name: 'ppppppppppp'},
  {id:908, name: 'aaaaaaaaaaaa'}
]

const getNewInterval = (id) => {
  return {
    id: id,
    selected: {
      id: '',
      value: ''
    }
  }
}

function App() {
  const [eventIntervals, setEventIntervals] = useState({
    0: getNewInterval(0)
  })
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [optionsArray, setOptionsArray] = useState(optionsArr);


  useEffect(() => {
    // console.log('SELECTED OPTIONS',selectedOptions, optionsArray);
    const x = optionsArr.filter((elem) => !selectedOptions.find((k) => k === elem.id));
    setOptionsArray(x);
  }, [selectedOptions])

  const getIdForInterval = () => {
    let id = 0;
    while (!!eventIntervals[id] && (id < Object.keys(eventIntervals).length + 1)) {
      id++;
    }
    return id
  }

  const addEventInterval = () => {
    const id = getIdForInterval();
    setEventIntervals((prev) => {
      const newState = {...prev};
      newState[id] = getNewInterval(id)
      return newState;
    });
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(eventIntervals);
  }

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        {Object.keys(eventIntervals).map((key) =>
          <IntervalContainer
              optionsArray={optionsArray}
              selectedOptions={selectedOptions}
              setSelectedOptions={setSelectedOptions}
              handleSubmit={onSubmit}
              id={key}
              key={key}
              setEventIntervals={setEventIntervals}
              eventIntervals={eventIntervals}
          />
        )}
        <button type="button" onClick={addEventInterval}>Добавить интервал</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
