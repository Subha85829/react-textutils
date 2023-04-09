import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was clicked " + text); -- Check the logic if it is working or not
    let newText = text.toUpperCase();
    setText(newText);
    if (text === '' || text === null){
      props.showAlert('Cannot change to UpperCase as Text Box is Empty','warning');
    }else{
      props.showAlert('Converted to UpperCase!','success');
    }
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    if (text === '' || text === null){
      props.showAlert('Cannot change to LowerCase as Text Box is Empty','warning');
    }else{
      props.showAlert('Converted to LowerCase!','success');
    }
  };
  const handleClrClick = () => {
    let newText = '';    
    if (text === '' || text === null){
      props.showAlert('Text Is Already Empty','warning');
    }else{
      props.showAlert('Text Box cleared!','success');
      setText(newText);
    }
  };
  const HandleOnChange = (event) => {
    //console.log("On Change"); -- Check the logic if it is working or not
    setText(event.target.value);
  };
  const handleCopy = ()=>{
    debugger;
    let text = document.getElementById('myBox');
    if (text.value === "" || text.value === null){
      props.showAlert('Empty Textbox Nothing To Copy','warning');
    }else{
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert('Text Copied Successfully!','success');
    }   
  }
  const handleExtraSpaces = ()=>{
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(' '));
    props.showAlert('Formated Successfully!','success');
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color : props.mode === 'light'? '#042743':'white'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={(event)=> HandleOnChange(event)}
          id="myBox"
          rows="8"
          style={{backgroundColor : props.mode === 'light'? 'white':'#042743',
          color : props.mode === 'light'? '#042743':'white'}}
          ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleClrClick}>
        Clear
      </button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>
        Copy Text
      </button>      
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
        Handle Extra Spaces
      </button>
    </div>
    <div className="container my-3" style={{color : props.mode === 'light'? '#042743':'white'}}>
      <h2>Your text summary</h2>
      <p>{text.length === 0 || text.length === ' ' ? 0 : text.split(' ').length} words, {text.length} charecters</p>
      <p><i>{0.008 * text.split(" ").length} Minutes read</i></p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text : 'Enter something to preview it here '}</p>
    </div>
    </>
  );
}
