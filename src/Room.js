import React, {useState} from 'react';
import './Room.css'


function Room() {
 
    let [isLit, setLit]=useState(false);
    let [age, setAge]=useState(25);
    let [temp, setTemp] = useState(22);
 


    function increaseAge(){
        console.log("increaseAge button is clicked");
        setAge(++age);
    }


    return (
   
    <div className={`room ${isLit ? "lit" : "dark"}`}>
            The room is: {isLit? "lit":"dark"}
        <br/>
   
         <br/>
         <section>
            <button onClick={()=>setLit(!isLit)} >Toggle Light</button> <br/> <br/>
           
            <button onClick={ ()=>{
                console.log("button is clicked");
                setLit(true)
            }} >Turn ON Light</button>   <br/> <br/>
         
            
            <button onClick={ ()=>{
                console.log("button is clicked");
                setLit(false)
            }} >Turn OFF Light</button><br/>
            
        </section>

        <section>
              
            
                {/* we can also write arrow function inside onclick evet */}

                <h4>Age Machine Control: {age}</h4>  
                    <button className='age-up' onClick={increaseAge}>+</button>
                    <button className='age-down' onClick={() => setAge(--age)}>-</button>
        </section>



        <section>
        <span>
        The Room temperature is {temp}
        <sup>o</sup> C
        </span>
        <br />
        <h4>Adjust Temperature</h4>
                <button
                        className="temp"
                        onClick={() => {
                        setTemp(++temp);
                        }}
                    >
                        +
                    </button>
                    <button
                        className="temp"
                        onClick={() => {
                        setTemp(--temp);
                        }}
                    >
                        -
                    </button>
        </section>


    </div>

  );
}

export default Room;