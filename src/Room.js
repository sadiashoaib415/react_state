import React, {useState} from 'react';
import './Room.css'

function Room() {
    let [isLit, setLit] = useState(true);
    let [age, setAge] = useState(23);
    let [temp, setTemp] = useState(20);
    
    return (
    <div className={`room ${isLit? "Light":"Dark"}`}> 
    This is Room component : <strong> Lit = {isLit? "Light":"Dark"}</strong>
        <br/>
    Hello World this room is :<strong> {isLit? "Light":"Dark"}</strong>
    <br/>
    <button onClick={()=> setLit(true)}>Light On</button>
    <br/>
    <button onClick={()=> setLit(false)}>Light OFF</button>
    <br/>
    <button onClick={()=> setLit(!isLit)}>Toggle Light</button>
    <br/>
    <br/>
         <strong> Age: {age} years </strong>
    <br/>
    <button onClick={()=> setAge(++age)}>Increase Age</button>
    <br/>
    <button onClick={()=> setAge(--age)}>Decrease Age</button>
    <br/>
    
    
    <br/>
          <strong>  Room Temperature: {temp} Celcius </strong>
    <br/>
    
    <button onClick={()=> setTemp(++temp)}>Increase Temperature</button>
    <br/>
    <button onClick={()=> setTemp(--temp)}>Decrease Temperature</button>
    </div>
    
    );
    
    }

export default Room;