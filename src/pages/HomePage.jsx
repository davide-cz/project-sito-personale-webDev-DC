import { useState } from 'react'
import logoCss from '../assets/css-3.svg'
import logoHTML from '../assets/html-5.svg'
import logojavascript from '../assets/javascript.svg'
import logoMongoDB from '../assets/mongodb.svg'
import logoNode from '../assets/nodejs.svg'
import logoReact from '../assets/react.svg'
import logoTailwind from '../assets/tailwind.svg'
import backGround from '../assets/file cover - 1.png'

import { NavLink, Navigate } from 'react-router-dom'


export default function (){

    return (
        <>
        <div className='m-auto backgroundImage'>
            <div className="  bg-gradient-to-b from-slate-700 to-slate-900 p-2">
                <p className="text-xl font-semibold text-slate-300">Sono Davide Carletti, sono un Web Developer e utilizzo queste tecnologie </p>
            </div>
            <div className="flex flex-wrap logo-flex-container align-middle ">
               <figure 
                    className='logo-container hover:scale-110 transition-all relative'
                >
                    <img className="logo hover:animate-jump " src={logoCss} alt="" />
                        <h1 className={`align-middle justify-center m-auto }`}>CCS3</h1>
                </figure> 
                <figure 
                    className='logo-container hover:scale-110 transition-all relative'
                    >
                    <img className="logo hover:animate-wiggle" src={logoHTML} alt="" />
                        <h1 className={` align-middle justify-center m-auto  `}>HTML5</h1>
                </figure> 
                <figure 
                    className='logo-container hover:scale-110 transition-all relative'
                    >
                    <img className="logo hover:animate-rotate-x" src={logojavascript} alt="" /> <h1>Javascript</h1>
                </figure> 
                <figure 
                    className='logo-container hover:scale-110 transition-all relative'
                    >
                    <img className="logo hover:animate-pulse" src={logoMongoDB} alt="" />
                        <h1 className={` align-middle justify-center m-auto `}>MongoDB</h1>
                </figure> 
                <figure 
                    className='logo-container hover:scale-110 transition-all relative'
                    >
                    <img className="logo hover:animate-ping animate-infinite" src={logoNode} alt="" />
                        <h1 className={` align-middle justify-center m-auto `}>NodeJs</h1>
                </figure> 
                <figure 
                    className='logo-container hover:scale-110 transition-all relative'
                    >
                    <img className="logo animate-spinz animate-infinite " src={logoReact} alt="" />
                        <h1 className={` align-middle justify-center m-auto `}>ReactJS</h1>
                </figure> 
                <figure 
                    className='logo-container hover:scale-110 transition-all relative'
                    >
                    <img className="logo hover:animate-fade-right" src={logoTailwind} alt="" />
                        <h1 className={` align-middle justify-center m-auto  `}>TailWind</h1>
                </figure> 
            </div>
            <div className='p-4'>
                <p className='text-slate-300 py-4'>dalla pagina layout puoi vedere alcune soluzioni di layout possibili</p>
                <button className='ml-2 px-2 bg-slate-300 hover:bg-slate-500 hover:scale-110 hover:text-slate-300 transition rounded-md'>
                    <NavLink to={'/layouts'} >Go to Layouts</NavLink>
                </button>
            </div>
        </div>
        </>
    )
}