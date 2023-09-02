import React ,{useState} from "react";

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text); 
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase!","success")
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text); 
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to UpperCase!","success")
    }
    const handleClClick = ()=>{
        // console.log("Uppercase was clicked" + text); 
        let newText = '';
        setText(newText)
        props.showAlert("Converted to clear-Texr!","success")
    }
    const handleReClick = ()=>{
        const words = text.split(' ');
        words.pop();
        let newText = words.join(' ') ;
        setText(newText)
        props.showAlert("Converted to Remove last word!","success")
    }

    const handleCopy = () =>{
        console.log("I am copy");
        var text = document.getElementById("myBox");
        navigator.clipboard.writeText(text.value);
        props.showAlert("Converted to copy!","success")
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Converted to ExtraSpace!","success")
    }
    const handleTitleclick = () => {
        let camelCaseText = text.split(' ')
          .map(function (word, index) {
            return word.charAt(0)
              .toUpperCase() + word.slice(1)
                .toLowerCase();
          })
          .join(' ');
        setText(camelCaseText);
        props.showAlert("Converted to Capital-FastLetter!","success")
    };

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
        
    }

    const [text, setText] = useState('');
    //text = "new text";//Wrong way tp change the state
    //setText("new text"); // Correct way to change the state
  return (
    <>
    <div className="container" style={{color:props.mode==="dark"?"white":"#042743" }}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"grey":"white", color: props.mode==="dark"?"white":"#042743"}} id="myBox" rows="8"></textarea>
      </div >
      <div className="multibutton">
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary my-1 mx-1" onClick={handleClClick}>ClearText</button>
      <button className="btn btn-primary my-1 mx-1" onClick={handleReClick}>Remove</button>
      <button className="btn btn-primary my-1 mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary my-1 mx-1" onClick={handleExtraSpace}>Extra-Space</button>
      <button className="btn btn-primary my-1 mx-1" onClick={handleTitleclick}>Capital-FastLetter</button>
      </div>
    </div>
    <div className="container my-3" style={{color: props.mode==="dark"?"white":"#042743" }}>
        <h1> Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} charecters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2> Preview</h2>
        <p >{text.length>0?text: "Enter somthing in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
