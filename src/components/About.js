// import React, {useState} from "react";
import React from "react";

export default function About(props) {

    //  const[myStyle,setMyStyle] =useState(
    //      {
    //          color: 'black',
    //          backgroundColor: 'white'
    //         } )
     
    let myStyle = {
      color: props.mode === "dark"?"white":"#042743",
      backgroundColor: props.mode === "dark"?"rgb(36 74 104)":"white",
      border:"2px solid",
      borderColor: props.mode === "dark"?"white":"#042743",
    }

    //  const [btntext,setBtnText] = useState('Enable Dark Mode')
    //  const toggleStyle = () => {
    //     //  console.log('Toggle button clicked')
    //      if (myStyle.color === "black"){
    //          setMyStyle({
    //              color: " white",
    //              backgroundColor: "black",
    //              border: "1px solid white"
    //             })
    //             setBtnText("Enable Light Mode")
    //             //  console.log('Toggle button clicked12')
    //         }
    //         else {
    //             setMyStyle({
    //                 color: "black",
    //                 backgroundColor: "white"
    //             })
    //             setBtnText("Enable Dark Mode")
    //             //  console.log('Toggle button clicked13',myStyle)
    //         }
    //     }
        
  return (
    <div className="container" style ={{color: props.mode === "dark"?"white":"#042743"}}>
      <h2 className="my-3">About us</h2>
      <div className="accordion" id="accordionExample" style ={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style ={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyse Your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style ={myStyle}>
            TextTweaker gives you a way to analyze your text quickly and efficientt. Be it word count,character count or
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style ={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style ={myStyle}>
            TextTweaker is a free charactercounter tool that provide instant character count & word count statistics for a given
              text.TextTweaker reports the number of words and characters . thus it us writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style ={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style ={myStyle}>
              This word counter software works in any web browser such as chrome, Firefox, Internet Explor,Safari ,Opera.It suits To count characters in 
              facebook, blog,books,excel document,pdf document,essays,etc. 
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
         <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
      </div> */}
    </div>
  );
}
