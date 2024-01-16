import { useState, useEffect } from 'react'
import  wordList  from './wordList.json';
import HangManDrawing from './components/HangManDrawing.tsx'
import HangManWord from './components/HangManWord.tsx'
import HangManKeyboard from './components/HangManKeyboard.tsx'
function App() {
  const [wordToGuess, setwordToGuess] = useState(() => {
    return wordList[Math.floor(Math.random() * wordList.length)]
  })
  
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const [incorrectLetters, setincorrectLetters] = useState<string[]>([])
  console.log(wordToGuess);

 /*useEffect(() => {
   const AddElementsInGuessedArray = (value : string) => {
   const value1 = value;
   setGuessedLetters((prevArray) => [...prevArray, value1] )
   setincorrectLetters((prevArray) => wordToGuess.includes(value) ? prevArray : [...prevArray, value1])
 }
  }, [guessedLetters, incorrectLetters])*/
 
  return (
    <>
     <div className="max-w-[340px] mx-auto flex flex-col items-center gap-[2rem]">
     <div>win or lose</div>
     <HangManDrawing numberOfGuesses = {incorrectLetters.length} />
     <HangManWord  guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
     <HangManKeyboard setGuessedLetters={setGuessedLetters} wordToGuess={wordToGuess} guessedLetters={guessedLetters} setincorrectLetters={setincorrectLetters} incorrectLetters={incorrectLetters}/>
     </div>
    </>
  )
}

export default App
