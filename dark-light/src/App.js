import React, {useState} from 'react';
import './App.css';
import Icerik from './components/icerik';


const tema= {
  dark:{
    color:"white",
    backgroundColor:"black"
  },
  light:{
    color:"black",
    backgroundColor:"white"
  }
  
}

export const TemaVerisi=React.createContext();

function App() {
    
    const [deger,setDeger]=useState(tema.dark)
    function degistir(){
      if(tema.dark===deger){
        setDeger(tema.light);
        console.log(deger);
      }
      else{
        setDeger(tema.dark);
        console.log(deger);

      }
    }
  return (
    <div className="App">

      <button onClick={degistir}>
        {tema.dark===deger ? "Açık" : "Koyu"}
      </button>

      <TemaVerisi.Provider value={deger}>

      <Icerik />

      </TemaVerisi.Provider>
    </div>
  );
}

export default App;
