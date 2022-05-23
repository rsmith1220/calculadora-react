import React from 'react';

function Display({ text }) {
  const bodyStyle = {
    backgroundColor: '#BEBAC6',
    width: '500px',
    height: '175px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  };
  const fontStyleCal = {
    margin: '0px',
    marginRight: '20px',
    fontSize: '90px',
    fontFamily: 'Roboto Condensed,sans-serif',
  };
  return (
    <div style={bodyStyle} id="Display">
      <h5 style={fontStyleCal}>{text}</h5>
    </div>
  );
}

export default Display;
