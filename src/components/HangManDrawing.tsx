import React from 'react'

type HangManDrawingProps = {
  numberOfGuesses : number 
}
const Head = (
  <div className=" absolute top-[30px] right-[-20px] h-[45px] w-[45px] rounded-full border-[6px] border-black" key={0}/>
)

const Body = (
  <div className=" absolute top-[75px] right-[0px] h-[80px] w-[6px] bg-black" key={1} />
 )
 
const LeftArm = (
  <div className=" absolute top-[87px] right-[-60px] h-[6px] w-[60px] bg-black rotate-[-30deg] origin-bottom-left" key={2}/>
)

const RightArm = (
  <div className=" absolute top-[88px] right-[5px] h-[6px] w-[60px] bg-black rotate-[30deg] origin-bottom-right" key={3}/>
)

const LeftLeg = (
  <div className="absolute top-[150px] right-[-17px] h-[68px] w-[6px] bg-black rotate-[-30deg]" key={4}/>
)

const RightLeg = (
  <div className="absolute top-[150px] right-[17px] h-[68px] w-[6px] bg-black rotate-[30deg]" key={5}/>
)

const Body_Parts = [Head, Body, LeftArm, RightArm, LeftLeg, RightLeg]
const HangManDrawing = ({numberOfGuesses} : HangManDrawingProps) => {
  
  return (
    <div className="relative">

    <div className="absolute top-0 right-0 h-[30px] w-[6px] bg-black"/>
    <div className="relative h-[6px] w-[74px] bg-black left-[62px]"/>
    <div className="relative h-[240px] w-[6px] bg-black left-[62px]"/>
    <div className="h-[6px] w-[140px] bg-black"/>
    </div>
  )
}

export default HangManDrawing;