export const Tile = ({ number, press }) => {

    const backgroundColor = number === 0 ? 'black' : number === 1 ? 'blue' : 'green';

    return (
        <button onClick={press} 
            style={{ width: '100px', fontSize:"24px", height: '100px', backgroundColor: backgroundColor, 
            color: 'white', border:"1px solid white"}}>
            {number === 1 ? 'X' : number === 2 ? 'O' : '-'}
        </button>
    );
  };

