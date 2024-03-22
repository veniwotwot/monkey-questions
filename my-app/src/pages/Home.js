import { ReactComponent as Monkey} from '../assets/monkey1.svg';
import { Counter } from '../components';

const Home = () => {
    const dynamicHeight = `calc(90vh - 80px)`;


    return (
        <div style={{padding:"5vh 3vh", backgroundColor: "#87CEEB", overflow: "hidden"}} >
            <div style={{backgroundColor: "white", height: "full", padding: "2vh", borderRadius:"20px"}}>
                <h1>Home Page</h1>
                <Counter />
                <div style={{justifyContent:"flex-end", display: "flex", flexDirection:"column"}}>
                    <Monkey height="400px"/>
                    <a href="https://www.freepik.com/free-vector/monkey-cartoon-character-sticker_21306383.htm#query=monkey%20sticker&position=1&from_view=keyword&track=ais&uuid=e771d969-4a55-4b2d-959b-ad7a4e40ec62">
                        Image by brgfx</a> on Freepik
                </div>
            </div>

            <div style={{backgroundColor: "white", height: "full", padding: "2vh", borderRadius:"20px", marginTop:"30px"}}>
                <h1>Home Page</h1>
                <Counter />
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