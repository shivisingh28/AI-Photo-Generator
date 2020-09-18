import React,{useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [image ,setImage] = useState('');
 const handleChange= ()=>{
    axios.get ('https://api.generated.photos/api/v1/faces?api_key=tuhKD-72uI_gPWJX8k66YQ&order_by=random').then(res=>{
      const uri = res.data.faces[0].urls[4][512]
      uri && setImage(uri)
    }).catch(err=>{
      console.log(err.message)
    })
  }
  return (
    <div className="App">
    <h1>AI Photo Generator</h1>  
    {image && <img src={image} alt="AI FACE"/>}
    <button type='button' onClick={handleChange}>
      New Image
    </button>
    </div>
  );
}

export default App;
