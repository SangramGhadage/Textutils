import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Upperclass was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value)
    }

    const handleCopy = () => {
        let text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const [text,setText] = useState ('');

    return (
        <>
        <div className = "container" style={{color:props.mode === 'dark' ? 'white' : 'black'}} >
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control"  value = {text} onChange = {handleOnChange} style={{backgroundColor:props.mode === 'light' ? 'white' : '#404040',color:props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="9" ></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick = {handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick = {handleLoClick}>Convert To Lowercase</button>
            <button className="btn btn-primary  mx-1 my-1" onClick = {handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1 my 1"  onClick = {handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick = {handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-4"  style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
            <h2>your text summary</h2>
            <p>{text.split(/\s+/).filter((element) => { return element.length!==0}).length} words and {text.length} characters</p>
        </div>
        </>
    )
}
