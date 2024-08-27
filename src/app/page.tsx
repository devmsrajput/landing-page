"use client"
import MarsLoader from "@/components/MarsLoader";
import {Poppins, Roboto} from "next/font/google"
import TextAnimation from "@/components/TextAnimation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const poppins = Poppins({subsets: ["latin"], weight: "500"})
const roboto = Roboto({subsets: ["latin"], weight: "300"})

export default function Home() {
  useGSAP(()=> {
    gsap.to(".header4", {
      duration: 1,
      delay: 1.8,
      y: 0,
      opacity: 1,
      stagger: {
        each: 0.1,
      }
    })
  })

  return (
    <div className="relative w-screen h-screen flex justify-center items-center">
      <MarsLoader />
      <div className="z-10">
        <div className={`${poppins.className} text-center`}>
          {<TextAnimation txtContent="Welcome to my" classType="header1" />}{" "}
          {<TextAnimation txtContent="Portfolio" classType="header2" />}
        </div>
        <div className={`text-6xl ${poppins.className} text-center`}>
          <TextAnimation txtContent="Mahendra Singh" classType="header3" />
        </div>
        <div className="text-zinc-400 max-w-xl mt-5 header4 translate-y-5 opacity-0 text-center">
          <p className={`${roboto.className} text-xl tracking-wider`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fuga totam aspernatur consectetur nulla dolore iure, ducimus ipsam cupiditate rem repellat, quisquam ab vel porro ipsum reprehenderit aperiam? Nam, libero!
          </p>
          <a href="mailto://devmsrajput@gmail.com" className="mt-5 inline-block hover:text-white p-3 border rounded-lg font-bold space-x-4 justify-between items-center">
            <MdOutlineMarkEmailUnread className="text-3xl inline-block" />
            <span className="inline-block">Contact Email</span>
          </a>
        </div>
      </div>
    </div>
  )
}
