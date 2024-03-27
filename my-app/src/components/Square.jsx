export const Square = ({ number, position }) => {
    const backgroundColor = position > number ? 'white' : 'blue';

    return (
        <div style={{ width: '100%', height: '5px', backgroundColor: backgroundColor, marginBottom: '-1px'}}></div>
    );
  };

