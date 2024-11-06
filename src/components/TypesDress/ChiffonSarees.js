import React from 'react'
import { shareData } from '../../context/Createcontent';
 import { useContext } from 'react';
 import { useEffect} from 'react';
 import { useNavigate } from 'react-router-dom';
 
 export const ChiffonSarees = () => {
  const navigateCart = useNavigate()

    
   
  const {AllSareeS, setCartProducts}=useContext(shareData)

// how to puch array to cart and datacontact but we create new usestate create valuce called in cart and every items
  const addCart=(item)=>{
  

    setCartProducts(pre=>{
      let ProduceArray=[...pre]
      ProduceArray.push(item)
      return ProduceArray
      
    })

    navigateCart('/cart')
    
   }

useEffect(() => {
      document.title = "ALL SHAREE"
    }, []);

   return (
    <div className="relative top-32 bg-slate-50">
          <div className="font-semibold text-black text-3xl font-serif flex justify-center">
              <h1>All Sarees</h1>
          </div>
          <div className="flex flex-wrap justify-around gap-10">
          {
              AllSareeS.map((Sareesitem,Sareesindex)=>{
                  return(
                      <div key={Sareesindex} className="border-2 border-solid border-black w-64 h-96 flex justify-center rounded-xl bg-gray-950 hover:shadow-xl hover:border-x-rose-600" >
                        <div className="grid">
                          <div >
                          <img src={Sareesitem.image} alt={Sareesitem.image} className="w-60 h-64" />
                          </div>
                          <div className="grid">
                            <div className="text-white">
                            <p>{Sareesitem.category}</p>
                            <p>{`RS: ${Sareesitem.price}`}</p>
                            </div>
                            <div className="bg-green-700 w-16 h-8 rounded-full flex text-center items-center text-white font-bold text-xl justify-center">
                            <p>{Sareesitem.ratings}⭐</p>
                            </div>
                            <div className="flex justify-around items-center text-center text-white font-bold text-lg">
                              <div className="bg-rose-900 w-24 rounded-lg" onClick={()=>addCart(Sareesitem)}>
                                <p>Add cart</p>
                              </div>
                              <div className="bg-rose-900 w-24 rounded-lg">
                                <p>Buy cart</p>
                              </div>
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
 