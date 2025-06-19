import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [type, setType] = useState('hex')
  const [color, setColor] = useState('#000000')


  function hexColorCode(length) {
    return Math.floor(Math.random() * length)
  }

  function handleGenerateHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
    let hexColor = '#'
    for (let i = 0; i <= 5; i++) {
      hexColor += hex[hexColorCode(hex.length)]
    }
    setColor(hexColor)

  }

  function handleGenerateRgbColor() {
    const r = hexColorCode(256)
    const g = hexColorCode(256)
    const b = hexColorCode(265)
    setColor(`rgb(${r}, ${g}, ${b})`)
  }

  useEffect(() => {
    if (type === "rgb") {
      handleGenerateRgbColor()
    } else {
      handleGenerateHexColor()
    }
  }, [type])

  return (
    <div className='container' style={{ background: color }}>
      <div className='type'>
        <button onClick={() => setType('hex')} className='button'>HEX Color</button>
        <button onClick={() => setType('rgb')} className='button'>RGB Color</button>
      </div>

      <div className='type1'>
        <h1 className='button1'>
          {type === "hex" ? "HEX Color" : "RGB Color"}
        </h1>
        <p className='button1'>{color}</p>
      </div>
      <div>
        <button onClick={type === 'hex' ? handleGenerateHexColor : handleGenerateRgbColor} className='button'>Generate</button>
      </div>
    </div>
  )
}

export default App
