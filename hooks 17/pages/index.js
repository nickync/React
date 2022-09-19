import react, { useState } from "react";

const InputElement = () => {

    const [inputText, setInputText] = useState("");
    const [history, setHistory] = useState([]);


    
    return  <div>
                <input onChange={(e) => {setInputText(e.target.value); setHistory([...history, e.target.value])}} placeholder="Enter Some Text" /><br></br>
                {inputText}
                <hr></hr>
                <br></br>
                <ul>
                    {history.map(rec => {
                        return <h1 key={Math.random()}>{rec}</h1>;
                    })}
                </ul>
            </div>
};

export default InputElement;