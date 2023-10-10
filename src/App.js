import './App.css';
import React from 'react';
import ColorPicker from './components/Colorpicker';
import './components/Colorpicker.css';

function App() {

  const colors = ['#ff0000', '#00FF01', '#0000FE', '#FFFF00', '#FF00FE', '#00FFFF', '#FEA500', '#81007F', '#FFC0CB','#008001', '#FE6347', '#01CED1', '#894516', '#FF8B00', '#4682B4', '#FED700'];

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
