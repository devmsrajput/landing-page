import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from "gsap"

interface TextWaveAnimationProps {
  animationTxt: string[];
}

const TextWaveAnimation = ({animationTxt}: TextWaveAnimationProps) => {

  const txtRef = useRef(null)

  useGSAP(()=>{
    if(txtRef.current){
      const tl = gsap.timeline()

      tl.to(".starting", {
        duration: 1,
        opacity: 1,
        y: 0,
        delay: 1.5,
        stagger: {
          each: 0.3,
          from: "end"
        }
      })

      tl.to(".ending", {
        duration: 1,
        opacity: 1,
        y: 0,
        delay: 1.5,
        stagger: {
          each: 0.3,
          from: "start"
        }
      }, "<")
    }
  }, [txtRef.current])

  return (
    <span ref={txtRef} className={`text-4xl inline-block font-bold`}>
      {animationTxt.map((item, index)=> {
        return (
          <span key={index} className={`${index < Math.floor(animationTxt.length / 2) ? "starting" : "ending"} translate-y-10 opacity-0 inline-block whitespace-pre`}>{item}</span>
        )
      })}
    </span>
  )
}

export default TextWaveAnimation