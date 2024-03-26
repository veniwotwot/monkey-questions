/*
* There is a button and a garage door. If you click on the button, the garage door opens. 
* It takes 10 seconds for this to happen. It also takes 10 seconds for the garage door 
* to completely close again. However, there is another twist. If you click the button while 
* the garage door is opening or closing, the garage door pauses. And, if you click it again 
* after the pause, the garage door will open or close in the opposite direction that it was doing before.
*/

const GarageDoor = () => {

  const press = () => {
    //
  }

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
      <button onClick={press}>Click Me!</button>
    </div>
    );
};
  
export default GarageDoor;