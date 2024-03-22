import { ReactComponent as Monkey} from './monkey1.svg';

const Home = () => {
    const dynamicHeight = `calc(90vh - 80px)`;
    var counter = 0;

    return (
        <div style={{padding:"5vh 10vh", height: dynamicHeight}}>
            <div>
                <h1>Home Page</h1>
                <h3>Clicking the button should increment the counter. Please fix it!</h3>
                <p>Total Count: {counter}</p>
                <button onClick={counter++}>Click Me!</button>
                <div style={{justifyContent:"flex-end", display: "flex", flexDirection:"column"}}>
                    <Monkey height="400px"/>
                    <a href="https://www.freepik.com/free-vector/monkey-cartoon-character-sticker_21306383.htm#query=monkey%20sticker&position=1&from_view=keyword&track=ais&uuid=e771d969-4a55-4b2d-959b-ad7a4e40ec62">
                        Image by brgfx</a> on Freepik
                </div>
            </div>
            
        </div>
);
  };
  
  export default Home;