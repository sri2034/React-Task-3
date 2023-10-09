import './App.css';
import React from 'react';
import ColorPicker from './components/Colorpicker';
import './components/Colorpicker.css';

function App() {

  const colors = ['red','greenyellow','blue','yellow','violet','aqua','orange','darkmagenta','pink','green','indianred','aquamarine','brown','orangered','cornflowerblue','gold'];

  return (
    <div id='i2' style={{backgroundColor:"rgba(137, 38, 176, 0.3389)"}}>
        <h1 style={{textAlign:"center"}}>Color Picker</h1>
      <div id="i1"style={{backgroundColor:"rgba(246, 144, 161, 0.766)"}}>
        <ColorPicker colors={colors} />
      </div>
    </div>
  );
};

export default App;
