import React,{useState} from 'react'


export default function TextForm(props) {
    
// chnage text to Uppercase
    const handleUpClick=()=>{
        console.log("uppercase was click")
        let newText=text.toUpperCase();
        setText(newText)
        
    }
    const handleLowClick=()=>{
        console.log("uppercase was click")
        let newText=text.toLowerCase();
        setText(newText)
      
    }
   


    const handleOnChnage=(event)=>{
        console.log("onchange was click")
        setText(event.target.value);
    }


    const [text,setText]=useState("");


    return (
        <>
        
        <div className="container my-3"> 
        <h1>{props.heading}</h1>
        <div className='mb-3'> 
        <textarea className="form-control" value={text} onChange={handleOnChnage} id="Mybox" rows="7"></textarea>
        </div>
        <button className='btn btn-primary ' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to Lowercase</button>
       
        </div>
        <div className='container my-3'>
            <h1>Your text Summary</h1>
            <p>{text.split(" ").length-1} words and {text.length} Characters</p>
            <p>{(0.008*text.split(" ").length)} Minutes it take to read</p>
            <h2>Preview</h2>
            <hr/>
            <p>{text}</p>
        </div>
        </>
    )
}
