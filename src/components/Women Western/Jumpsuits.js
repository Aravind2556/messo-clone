import { shareData } from '../../context/Createcontent';
 import { useContext } from 'react';

 import React from 'react'
 
 export const Jumpsuits = () => {
    const {AllSareeS}=useContext(shareData)
   return (
    <div className="relative top-32 bg-slate-50">
    <div className="font-semibold text-black text-3xl font-serif flex justify-center">
        <h1>All Sarees</h1>
    </div>
    <div className="flex flex-wrap justify-around gap-10">
    {
        AllSareeS.map((Sareesitem,Sareesindex)=>{
            return(
                <div key={Sareesindex} className="border-2 border-solid border-black w-64 h-96 flex justify-center rounded-xl bg-gray-950">
                  <div className=" grid">
                    <div className="">
                    <img src={Sareesitem.image} alt={Sareesitem.image} className="w-60 h-70" />
                    </div>
                    <div>
                      <div className="text-white">
                      <p>{Sareesitem.category}</p>
                      <p>RS.{Sareesitem.price}</p>
                      </div>
                      <div className="bg-green-700 w-16 h-8 rounded-full flex text-center items-center text-white font-bold text-xl justify-center">
                      <p>{Sareesitem.ratings}⭐</p>
                      </div>
                      <div className="flex justify-end font-bold text-xl text-center items-center ">
                          <button className="w-16 h-10 bg-red-950 text-white rounded-2xl">Add</button>
                      </div>
                    </div>
                </div>
                </div>
            )
        })
    }
    </div>
</div>
   )
 }
 