import React, {useState, useEffect} from 'react';
import { Square } from '../components';

/*
* There is a button and a garage door. If you click on the button, the garage door opens. 
* It takes 10 seconds for this to happen. It also takes 10 seconds for the garage door 
* to completely close again. However, there is another twist. If you click the button while 
* the garage door is opening or closing, the garage door pauses. And, if you click it again 
* after the pause, the garage door will open or close in the opposite direction that it was doing before.
*/
const DIRECTION = {
  OPEN: "OPEN",
  OPENING: "OPENING",
  PAUSED: "PAUSED",
  CLOSING: "CLOSING",
  CLOSED: "CLOSED"
}

const GarageDoor = () => {
  const [position, setPosition] = useState(0);
  const [doorState, setDoorState] = useState({previous: DIRECTION.CLOSED, current: DIRECTION.CLOSED});

  const squares = Array.from({ length: 100 }, (_, index) => <Square key={index} number={index} position={position}/>);
  const reversedSquares = squares.slice().reverse();

  const toUpperCase = (str) => {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

  const pressButton = () => {
    switch(doorState.current) {
      case DIRECTION.CLOSED: 
        setDoorState({previous: doorState.current, current: DIRECTION.OPENING});
        break;
      case DIRECTION.OPENING:
      case DIRECTION.CLOSING:
        setDoorState({previous: doorState.current, current: DIRECTION.PAUSED});
        break;
      case DIRECTION.PAUSED:
        setDoorState(
          {
            previous: doorState.current, 
            current: doorState.previous === DIRECTION.OPENING 
              ? DIRECTION.CLOSING 
              : DIRECTION.OPENING
          });
        break;  
      case DIRECTION.OPEN:
        setDoorState({previous: doorState.current, current: DIRECTION.CLOSING});
        break;
      default:
        break;
    }
  }

  useEffect(()=>{
    const timer = setInterval(() => {
      const height = doorState.current === DIRECTION.OPENING
        ? 1 
        : doorState.current === DIRECTION.CLOSING
          ? -1 
          : 0;
      setPosition(prevPos => prevPos + height);

    }, 100);

    return () => clearInterval(timer);
  },[doorState]);

  useEffect(() => {
    console.log(doorState.current, position);
    if(doorState.current === DIRECTION.OPENING && position > 99){
      setDoorState({previous: doorState.current, current: DIRECTION.OPEN})
    } else if(doorState.current === DIRECTION.CLOSING && position < 1){
      setDoorState({previous: doorState.current, current: DIRECTION.CLOSED})
    }
  }, [position, doorState]);

  return (
    <div style={{paddingLeft: "30px", paddingRight: "30px"}}>
      <h1>Garage Door Problem</h1>
      <p> 
        There is a button and a garage door. If you click on the button, the garage door opens. 
        It takes 10 seconds for this to happen. It also takes 10 seconds for the garage door 
        to completely close again. However, there is another twist. If you click the button while 
        the garage door is opening or closing, the garage door pauses. And, if you click it again 
        after the pause, the garage door will open or close in the opposite direction that it was doing before.
      </p>
      <button onClick={pressButton}>Garage Door Button</button>
      
      <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', paddingTop: '10px' }}>{reversedSquares}</div>
      </div>
      
      <h1>The Garage Door is {toUpperCase(doorState.current)}</h1>
    </div>
    
    );
};
  
export default GarageDoor;