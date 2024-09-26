/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Poppins } from 'next/font/google'
import TextConsicutiveAnimation from './TextConsicutiveAnimation';
import TextStaggerAnimation from './TextStaggerAnimation';
import TextWaveAnimation from './TextWaveAnimation';

const poppins1 = Poppins({subsets: ["latin"], weight: "500"})
const poppins2 = Poppins({subsets: ["latin"], weight: "700"})

interface TextAnimationProps {
  txtContent: string;
  classType: string;
}

const TextAnimation = ({txtContent, classType}: TextAnimationProps) => {

  const [animationTxt, setAnimationTxt] = useState<string[]>([])

  useEffect(()=> {
    const splittedTxt = txtContent.split("")
    setAnimationTxt([...splittedTxt, " "])
  }, [])

  switch(classType){
    case "header1":
      return (
        <span className={`text-white tracking-wider ${poppins1.className}`}>
          <TextConsicutiveAnimation animationTxt={animationTxt} />
        </span>
      )
    case "header2":
      return (
        <span className={`text-red-600 inline-block tracking-wider ${poppins2.className}`}>
          <TextStaggerAnimation animationTxt={animationTxt} />
        </span>
      )
    case "header3":
      return (
        <span className={`text-zinc-400 inline-block tracking-wider ${poppins2.className}`}>
          <TextWaveAnimation animationTxt={animationTxt} />
        </span>
      )
    default:
      return <>Hello World</>
  }
}

export default TextAnimation