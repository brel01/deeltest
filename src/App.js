import {useState, useRef, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import "./styles.css";
import { useFetchSuggestions } from "./fetchSuggestions.js";

const AutoComplete = () => {  

//   const textSuggestions = [
//   "table", 'chair', 'deel', 'deal', 'candle', 'television', 'tap'
// ];
  const {textSuggestions, loading} = useFetchSuggestions("https://random-word-api.herokuapp.com/word?number=70");
  const [input, setInput] = useState("");
  const [words, setWords] = useState([]);
  const [showSuggestionBox, setShowSuggestionBox] = useState(false);


  useEffect(() => {
    if(input.length > 0){
      setShowSuggestionBox(true)
    }else{
      setShowSuggestionBox(false)
    }
    return () => {

    }
  }, [input])

  
  const filterSuggestions = (input) => {
    const similarWords = [];
    const similarWordsIndex = [];
    const arrangedSmiliarWords = [];

    for(let i=0; i < textSuggestions.length; i++){
      let word = textSuggestions[i];
      

      if(word.includes(input)){
        similarWords[similarWords.length] = word;
        // pass the index where the input appared into array similarWordsIndex
        similarWordsIndex[similarWordsIndex.length] = word.indexOf(input);
      }
    }
    // sort similarWordsIndex 
    similarWordsIndex.sort(function(a, b) {
      return a - b;
    })

    // rearrange similarWords by comparing the arranged index to the index of each words in the similarWords array
    for(let j=0; j < similarWordsIndex.length; j++){
      for(let k=0; k < similarWords.length; k++ ){
        if(similarWordsIndex[j] == similarWords[k].indexOf(input)){   
           

           let wordAlreadyExist = false;
           for(let l=0; l < arrangedSmiliarWords.length; l++){
            if(arrangedSmiliarWords[l] == similarWords[k]){
              wordAlreadyExist = true;
            }
           }
           if(wordAlreadyExist  == false)arrangedSmiliarWords[arrangedSmiliarWords.length] = similarWords[k];    
        }
      }
    }

    return arrangedSmiliarWords;
  }

  const onChangeInput = (input) => {
    const newInput = input.target.value;
    setInput(newInput);

    if(newInput !== ""){
      const similarWords = filterSuggestions(input.target.value);       
      // if(similarWords == []){
      //   setShowSuggestionBox(false);
      // }  
      setWords(similarWords);
    }else{
      setWords([])
    }
  }

  const onSelectSuggestion = (suggestion) => {
    setInput(suggestion);
    setWords([]);
  }


  return (
    <div className="App">
      <div className="box">
        <div>
        <h1>React AutoComplete</h1>
        <input
          className="input"
          type= "text"
          value = {input}
          onChange={e => onChangeInput(e)}
          />
        </div>

        <div>
        {showSuggestionBox && //display suggestion only when the input field is not empty 
        <ul className="suggestions">
          {words.map((word, i) => {
            return (
              <li onClick={() => {onSelectSuggestion(word)}}>
                <p>{word}</p>
              </li>
            )
          })}
        </ul>  
          }{" "}
        </div>

      </div>
    </div>
  );
}

export default AutoComplete;
