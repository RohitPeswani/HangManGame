import React from 'react'
import {useState, useEffect} from 'react'

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]


const HangManKeyboard = ({setGuessedLetters, wordToGuess, guessedLetters, setincorrectLetters, incorrectLetters}) => {
  const [count, setCount] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const handleButtonClick = (e) => {
   setCount(count + 1)
   console.log(count);
   setGuessedLetters((prevArray) => [...prevArray, e.target.innerHTML])
   setincorrectLetters((prevArray) => wordToGuess.includes(e.target.innerHTML) ? prevArray : [...prevArray, e.target.innerHTML])
   if(wordToGuess.includes(e.target.innerHTML)){
     e.target.classList.remove('inactive')
     e.target.classList.add('correct-inactive')
     //e.target.disabled = true;
   }else{
     e.target.disabled = true
   }
  }
  const checkWin = () => {
   let correctLetters = guessedLetters.filter((letter) => wordToGuess.includes(letter));
   console.log(correctLetters.join("") === wordToGuess)
  }
  
  const checkGameOver = () => {
    let duplicateLetters = wordToGuess.split("").filter((letter) => wordToGuess.indexOf(letter) !== wordToGuess.lastIndexOf(letter))
   if(duplicateLetters.length > 1){
     if(guessedLetters.length + 1 === wordToGuess.length){
       setGameOver(true)
       alert("gameover");
     }
   }
   else if(guessedLetters.length === wordToGuess.length){
      setGameOver(true)
      alert("game over")
    }
  }
  
  if((count) === wordToGuess.length){
    checkWin();
  }
  
 useEffect(() => {
   checkGameOver();
 }, [guessedLetters])
 
  return (
    <div className="grid grid-cols-16 self-stretch gap-1">
    {KEYS.map((key) => {
      return <button className={`border-2 aspect-square border-black bg-0 uppercase font-bold text-xl hover:bg-blue-500 hover:text-white inactive`} key={key} onClick = {(e) => handleButtonClick(e)} disabled={gameOver}>{key}</button> 
    })}
    </div>
  )
}

export default HangManKeyboard