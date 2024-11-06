import { shareData } from '../context/Createcontent';
import { useContext, useEffect } from 'react';
import { useState } from 'react';


 import React from 'react'


 
 export const Cart = () => {
    const {cartProduct, setCartProducts}=useContext(shareData)

   console.log("count total:",cartProduct)

   const [CountLength,SetCountLength]=useState(1)
  
    

    const [count,setcount]=useState(1)
    
    const countIncease=(i)=>{
      setCartProducts(pre=>{
        let countArr=[...pre]
        if(countArr[i].count){
          countArr[i].count=countArr[i].count+1
        }
        else{
          countArr[i].count=2
        }
        return countArr
      })
    }

    const countDrcrease=(ind)=>{
      setCartProducts(pres=>{
        let countArrs=[...pres]
        if(countArrs[ind].count){
          countArrs[ind].count=countArrs[ind].count-1
        }
        else{
          countArrs[ind].count=1
        }
        return countArrs
      })
    }

    const removeCart=(inde)=>{
      setCartProducts(presd=>{
        let clearCartArray=[...presd]
        clearCartArray.splice(inde,1)
        return clearCartArray
      })
      
    }
    
    const TotalCalculation=()=>{
      let TotalPrice = 0
      const productTotal=cartProduct.map(ElementItem=>{
       
        if(!ElementItem.count){
          return ElementItem.price
        }
        else{
          return ElementItem.price*ElementItem.count
        }
        
      })
      
      for(let index in productTotal){

        // TotalPrice=TotalPrice+productTotal[index]
        TotalPrice+=productTotal[index]
      }
      setcount(TotalPrice)
      
    }


    const totalCountProduct=()=>{
      let TotalCount=0
      cartProduct.forEach(ElementCount=>{
        if(ElementCount.count){
          TotalCount+=ElementCount.count
        }
        else{
          // TotalCount+=TotalCount+1
           TotalCount+=1
          // TotalCount=TotalCount+
          }

        console.log('totalcount: ',TotalCount)
       
      }) 
      SetCountLength(TotalCount)

    }
    





    useEffect(()=>{
      TotalCalculation()
      totalCountProduct()
     
    },[])

    useEffect(()=>{
      TotalCalculation()
      totalCountProduct()
      
    },[cartProduct,CountLength])

   

   
    
    console.log(cartProduct)
   
    
   return (
     <div className="relative top-32 bg-slate-50 h-full w-full">
      <div className="grid gap-10">
          {
             cartProduct.map((Sareesitem,Sareesindex)=>{
                  return(
                    
                      <div key={Sareesindex} className="border-2 border-solid border-black w-2/3 h-72 items-center flex  rounded-xl bg-gray bg-sky-200 relative top-20 left-10 ">
                        <div className=" flex relative left-10">
                          <div >
                          <img src={Sareesitem.image} alt={Sareesitem.image} className="w-60 h-64" />
                          </div>
                          <div className="relative left-10 grid">
                            <div className="text-white">
                            <p>{Sareesitem.category}</p>
                            <p className="w-2/3">{Sareesitem.description}</p>
                            <p>{`RS: ${Sareesitem.price}`}</p>
                            </div>
                            <div className="bg-green-700 w-16 h-8 rounded-full flex text-center items-center text-white font-bold text-xl justify-center">
                            <p>{Sareesitem.ratings}⭐</p>
                            <p>{Sareesitem.count?Sareesitem.count:'1'}</p>
                            

                            </div>
                            <div className="w-52 h-10 flex items-center justify-center gap-4 bg-black">
                          
                            <button  className="text-white text-2xl" onClick={()=>{countIncease(Sareesindex)}}>➕</button>
                            <button  className="text-white text-2xl" onClick={()=>{countDrcrease(Sareesindex)}}>➖</button>
                            <button className=" text-white text-2xl" onClick={()=>{removeCart(Sareesindex)}}>Remove</button>

                            </div>

                            

                           
                              </div>
                            
                          </div>
                      </div>
                     
                      
                     
                  )
              })
            }
            <div className="flex justify-center bg-yellow-400 w-44 right-28 top-40 fixed">
            <div className="grid  h-56 items-center">
          <p>Total amount:{count}</p>
         
          <p>Total Product Item{CountLength}</p>
         
          
          </div>
          </div>
          
          </div>
          
      </div>
      
   )
 }
 