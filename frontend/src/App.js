import React, { useState } from 'react';
import RGBSelector from './components/rgb-selector';
import './styles/rgb.css'


function App() {

  var [color_r, setColorR] = useState(0)
  var [color_g, setColorG] = useState(0)
  var [color_b, setColorB] = useState(0)


  return (
    <div style={
      {
        backgroundColor: `rgb(${color_r}, ${color_g}, ${color_b})`,
        height:'100vh'
      }
    }>
      <div className="rgb-container">
        <h1>Calculadora RGB</h1>
        <RGBSelector onColorChange={ (e) => setColorR(e.target.value)} value={color_r}/>
        {/* RED */}
        <RGBSelector onColorChange={ (e) => setColorG(e.target.value)} value={color_g}/>
        {/* GREEN */}
        <RGBSelector onColorChange={ (e) => setColorB(e.target.value)} value={color_b}/>
        {/* BLUE */}
        <strong>Codigos CSS:</strong>
        <br/>
        <code>
          background: rgb({color_r}, {color_g}, {color_b})
        </code>
      </div>
    </div>
  );
}

export default App;
