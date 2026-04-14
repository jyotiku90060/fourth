export default function About(props) {

  let myStyle = {
    color: props.mode === 'dark'?'white':'#363645',
    backgroundColor: props.mode === 'dark'?'#363645':'white',
    // border:'2px solid',
    // borderColor : props.mode === 'dark'?'white':'grey',
  }
  return (
    <div className="container" style={{color: props.mode === 'dark'?'white':'#363645'}}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" >
          <h2 className="accordion-header">
            <button style={myStyle}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle} >
              Here you can easily change the case of the sentence and easily copy the text and calculate the words and sentence present in your sentence.
              and also preview are avelable.TextUtils is a ReactJs website built primarily to do various operations on regular typed text. You can safely use WordPad or NotePad for text drafting, and saving, but TextUtils offers much more than simple text drafting and formatting. TextUtils can convert your text to any case in just one simple click of a button. It can extract links and numbers safely from a labyrinth of random text or sophisticated documentation. It has an improved property of base64 encoding, reversal of your inputted text.You can even remove whitespaces from your scripted documents, and wear up your earphones to listen to it, instead of straining your eyes! It does a detailed analyzing of your text, and provides an output of words, and characters, along with reading time as well. The best part of TextUtils is that it is an open source project, as a result, dozens of new features are in the upcoming, which definitely makes it a cut above the rest.
              The most eminent features of the website are as follows :
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button style={myStyle}
              className="accordion-button collapsed"
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
            <div className="accordion-body"style={myStyle} >
            It is completely free to use. No credit cards required. Use as much as you want!!
            it is completly free to use the website and change the case in lower to upper.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button style={myStyle}
              className="accordion-button collapsed" 
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
            <div className="accordion-body" style={myStyle} >
            It is compatible with all of your favorite browsers.
            it is compatable to browsers in any browsers it run simply so you can use easily.
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3"></div>
      {/* <button onClick={toogleStyle} type="button" className="btn btn-primary">{btntext}</button> */}
    </div>
  );
}
