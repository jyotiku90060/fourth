import React,{useState} from "react";
// import { Buffer } from 'buffer';

export default function TextForm(props) {


  //for uppercase button
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
    console.log("upper button click");
    props.showAlert("Convert to UpperCase","success")
  }


  //for lowercase button
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Convert to LowerCase","success")
  }


  //for sentencecase button
  const handleSenClick = ()=>{
    let newText = text.toLowerCase().split(' ');
    const sentenceCased = newText.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    setText(sentenceCased.join(' '));
    props.showAlert("Convert to SentenceCase","success")
  }
  
  
  //for clear button
  const handleClrClick = ()=>{
    let newText = '';
    setText(newText)
    props.showAlert("Clear the text","success")
  }


  //for copy button
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copy the text","success")
  }


  //for remove special character
  const handleSpCharacter = ()=>{
    let newText = text.replace(/[^a-zA-Z0-9 ]/g, '');
    setText(newText)
    props.showAlert("Remove special characterfrom the text","success")
  }

  
  //for remove extra space button
  const handleExtraSpace = ()=>{
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "))
    props.showAlert("Remove extra space between text","success")
  }


  //for extract text
  const handleExText = ()=>{
    const letters = text.match(/[a-z]|[A-Z]/g);
    if(letters === null) {
      setText('');
      props.showAlert("Extract text","warning")
    } else {
      setText(letters.join(''));
      props.showAlert("Extract text","success")
    }
  }

 
 //for extract number button
 const handleExNumber = ()=>{
  const digits = text.match(/[0-9]/g);
  if(digits === null) {
    setText('');
    props.showAlert("Extract number","warning")
  } else {
    setText(digits.join(''));
    props.showAlert("Extract number","success")
  }
}


//for extract link button
const handleExLink = ()=>{
  const link = text.match(
    /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/gim
  );
  if(link === null) {
    setText('');
    props.showAlert("Extract link","warning")
  } else {
    setText(link.join(''));
    props.showAlert("Extract link","success")
  }
}


//for reverse text
const handleReverseText = ()=>{
  let newText = text.split(' ');
  let i = 0;
  let result = '';

  for(i = 0; i < newText.length; i++)
    result = newText[i].split('').reverse().join('') + ' ' + result;
  setText(result);
  props.showAlert("Convert Reverse text","success")
}


//for writing in text area 
const handleOnChange = (event)=>{
  // console.log("onChange");
  setText(event.target.value);
}

 
const [text, setText] = useState('');
// const [state, action] = useState('');
// setText=("New text");
const [showMore, setShowMore] = useState(false);
return (
  <>
      <div className="container" style= {{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">

      
     {/* <label for="myBox" class="form-label">textarea</label> */}
    <textarea className="form-control" value={text} onChange={handleOnChange}
      style={{ backgroundColor: props.mode === 'dark' ? "rgb(243 239 251 / 96%)" : 'white',
               color: props.mode === 'dark' ? 'black' : 'black' }}
      id="myBox" rows="8"></textarea>


  {/* //For use double background colour */}
        {/* {props.mode === 'dark' ? (
  <textarea className="form-control" value={text} onChange={handleOnChange}
            style={{ backgroundColor: 'grey', color: 'white' }}
            id="myBox" rows="8"></textarea>
) : (
  <textarea className="form-control" value={text} onChange={handleOnChange}
            style={{ backgroundColor: 'bisque', color: 'black' }}
            id="myBox" rows="8"></textarea>
)
} */}


      </div>
      <button disabled={text.length===0} className="btn btn-secondary mx-1 my 1"style={{marginTop: '16px'}}onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-secondary mx-1 my 1"style={{marginTop: '16px'}}onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-secondary mx-1 my 1"style={{marginTop: '16px'}}onClick={handleSenClick}>Convert to Sentencecase</button>
      <button disabled={text.length===0} className="btn btn-secondary mx-1 my 1"style={{marginTop: '16px'}}onClick={handleSpCharacter}>Remove Special character</button>
      <button disabled={text.length===0} className="btn btn-secondary mx-1 my 1"style={{marginTop: '16px'}}onClick={handleExtraSpace}>Remove Extra Space Text</button>
      <button disabled={text.length===0} className="btn btn-secondary mx-1 my 1"style={{marginTop: '16px'}}onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-secondary mx-1 my 1"style={{marginTop: '16px'}}onClick={handleClrClick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-secondary mx-1 my 1"style={{marginTop: '16px'}}onClick={handleExText}>Extract Text</button>
      <button disabled={text.length===0} className="btn btn-secondary mx-1 my 1"style={{marginTop: '16px'}}onClick={handleExNumber}>Extract Number</button>
      <button disabled={text.length===0} className="btn btn-secondary mx-1 my 1"style={{marginTop: '16px'}}onClick={handleExLink}>Extract Link</button>
      <button disabled={text.length===0} className="btn btn-secondary mx-1 my 1"style={{marginTop: '16px'}}onClick={handleReverseText}>Reverse Text</button>      

    </div>
    <div className="container my-3" style= {{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length } Words, {text.length } Characters,
        {/*How many lines present in text area*/}
            {' '}
            {
              text
                .replace(/\n/g, '.')
                .split('.')
                .filter((value) => value !== '').length
            }
          {' '}
          Lines,
          {/*How many question in text area*/}
          {text.split('?').length - 1} Questions and,{' '}
          {text.split('!').length - 1} Exclamations.
          </p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h3>Preview</h3>
      <p>

        {/* {text.length>0?text:"Enter somthing in the textbox above to preview it here"} */}
        {showMore ? text : `${text.substring(0, 250)}`}

  {/* <button className="btn">Show more</button> */}
  <button className="btn" onClick={() => setShowMore(!showMore)} style= {{color: props.mode==='dark'?'white':'black'}}>Show more</button></p>
    </div>
    </>
  );
}