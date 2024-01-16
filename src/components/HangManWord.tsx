import React, {useEffect} from 'react'

type HangManWordProps = {
  guessedLetters : string[],
  wordToGuess : string 
}
const HangManWord = ({guessedLetters, wordToGuess} : HangManWordProps) => {
 /*const checkVisible = (letter , index) => {
   if(wordToGuess.split("").filter((alphabet) => alphabet === letter).length > 1){
     if(guessedLetters[index] === wordToGuess[index] guessedLetters.filter((alpha) => alpha === letter).length > 1){
       return 'visible'
     }else{
       return 'hidden'
     }
   }else{
     if(guessedLetters.includes(letter)){
       return 'visible'
     }else{
       return 'hidden'
     }
   }
 }*/
 
 const checkEmptySpaces = () => {
   let emptySpaces;
   if(guessedLetters.length === wordToGuess.length){
     emptySpaces = wordToGuess.split("").filter((letter) => !guessedLetters.includes(letter));
   }
   return emptySpaces;
 }
 useEffect(() => {
   checkEmptySpaces();
 }, [guessedLetters])
 
  return (
    <div className="flex uppercase font-bold space-x-1.5 text-4xl">
    {wordToGuess.split("").map((letter, index) => {
      return (
        <span className="p-1.5 pb-0 border-b-2 border-black" key={index}>
        <span className={`${checkEmptySpaces()?.includes(letter) ? 'visible text-red-500' : guessedLetters.includes(letter) ? 'visible' : 'hidden'}`}>{letter}</span>
        </span>
        
      )
    })}
    </div>
  )
}

export default HangManWord