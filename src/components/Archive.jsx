import { useEffect, useState } from 'react'
import quotes  from '../assets/frasi.json'
import QuotesCard from './QuotesCard'
import { BsHypnotize } from "react-icons/bs";

export default function(){

    const [activeQuoteCard, setActiveQuoteCard]=useState('')
    const [showCard, setShowCard]=useState(false)
    
    return  (
        <>
        <div className='h-[500px] archive-container bg-gradient-to-br from-prim to-second'>
            {!showCard &&
                <div className='flex h-80 flex-wrap -space-x-8  justify-center animate-fade'>
                    {quotes.map((quote,i)=>{
                        return(
                            <div key={`quote-${i}`} className={`z-${10*i} card-container relative my-auto hover:brightness-75 hover:-translate-y-4 transition `}>
                                <button className='w-full h-full bg-transparent absolute'
                                        onClick={()=>{
                                            setActiveQuoteCard(quote.frase);
                                            setShowCard(true)
                                        }}
                                >
                                <div className='btn-icon absolute flex  ' >
                                    <BsHypnotize className='text-fuchsia-600 icon hover:animate-spin hover:animate-duration-[5000ms] hover:animate-infinite' />
                                </div>
                                </button>
                                <QuotesCard
                                />

                            </div>
                        )
                    })}
                </div>
            }
            
            {showCard  && 
                <div className='active-quote w-56  h-32 border-2 border-black bg-gradient-to-br from-slate-400 to-slate-500
                    flex align-middle mx-auto animate-fade hover:scale-105 hover:brightness-75 transition hover:cursor-pointer'
                        onClick={()=>{setShowCard(false)}}>
                    <h1 className=' text-center animate-fade' >{activeQuoteCard}</h1>
                </div>
            }
        </div>
        </>
    )
}