import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from "gsap"

interface TextStaggerAnimationProps {
  animationTxt: string[];
}

const TextStaggerAnimation = ({animationTxt}: TextStaggerAnimationProps) => {

  const txtRef = useRef(null)

  useGSAP(()=>{
    if(txtRef.current){
      gsap.to(".staggers", {
        delay: 1.5,
        duration: 1,
        y: 0,
        opacity: 1,
        stagger: {
          each: 0.2,
          from: "start",
        },
        ease: "sine.out"
      })
    }
  }, [txtRef.current])

  return (
    <span ref={txtRef} className={`inline-block font-bold`}>
      {animationTxt.map((item, index)=> {
        return (
          <span key={index} className={`${index} staggers translate-y-10 opacity-0 inline-block whitespace-pre`}>{item}</span>
        )
      })}
    </span>
  )
}

export default TextStaggerAnimation