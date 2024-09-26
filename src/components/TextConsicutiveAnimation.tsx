import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { Poppins } from 'next/font/google'
import gsap from "gsap"

interface TextConsicutiveAnimationProps {
  animationTxt: string[];
}

const TextConsicutiveAnimation = ({animationTxt}: TextConsicutiveAnimationProps) => {

  const txtRef = useRef(null)

  useGSAP(()=>{
    if(txtRef.current){
      animationTxt.forEach((_, index)=> {
        let elm = (txtRef.current as any)?.children
        let numberType = elm[index].className
        numberType = numberType.split(" ")
        if(numberType[0] % 2 === 0){
          gsap.from(elm[index], {
            delay: 1,
            duration: 1,
            y: 20,
            opacity: 0
          })
        } else {
          gsap.from(elm[index], {
            delay: 1,
            duration: 2,
            y: -20,
            opacity: 0
          })
        }
      })
    }
  }, [txtRef.current])

  return (
    <span ref={txtRef} className={`inline-block font-bold`}>
      {animationTxt.map((item, index)=> {
        return (
          <span key={index} className={`${index} inline-block whitespace-pre`}>{item}</span>
        )
      })}
    </span>
  )
}

export default TextConsicutiveAnimation