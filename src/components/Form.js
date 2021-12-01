import React, { useState } from 'react';

export default function Form(props) {
    const [text, setText] = useState('');
    const Uppercase = () => {
        console.log("uppercase is clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase', 'success');
    }
    const Lowercase = () => {
        console.log("lowercase is clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase', 'success');
    }
    const clearText = () => {
        console.log("cleartext is clicked");
        let newText = "";
        setText(newText);
        props.showAlert('Text is cleared', 'success');
    }
    const handleOnChange = (event) => {
        // console.log("onChange");
        setText(event.target.value)
    }
    return (
        <>
        <div className="container">
            <h1>{props.Heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='light' ? 'white' :'black',color: props.mode==='light' ? 'black' :'white'}} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={Uppercase}>Convert to Uppercase</button>
            <button disabled={text.length===0} type="button" className="btn btn-info mx-1 my-1" onClick={Lowercase}>Convert to Lowercase</button>
            <button disabled={text.length===0} type="button" className="btn btn-dark mx-1 my-1" onClick={clearText}>Cleartext</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length * 0.008} Minutes take to read all words</p>
            <h2>Preview</h2>
            <p>{text.length>0?text : 'Nothing to preview'}</p>
        </div>
        </>
    );
}
