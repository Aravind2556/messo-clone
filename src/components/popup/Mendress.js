import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Mendress = () => {
  const navigateCart = useNavigate()
  return (
    <div className="Popup gird w-2/3  bg-gray-300 fixed top-32">
    <div className="flex h-56  justify-around">
           <div className="grid w-full justify-center">
            <h3>Top Wear</h3>
            <a href='#'>All Top Wear</a>
            <p onClick={()=>{navigateCart('/mts')}}>T-Shirts</p>
            <a href='#'>Shirts</a>
           
           </div>
           <div className="grid bg-gray-100 w-full justify-center">
            <h3>Bottom Wear</h3>
            <a href='#'>Track Pants</a>
            <a href='#'>Jeans</a>
            <a href='#'>Trousers</a>
           
           </div>
           <div className="grid w-full justify-center">
            <h3>Men Accseeories</h3>
            <a href='#'>All Men Accseeories</a>
            <a href='#'>Watches</a>
            <a href='#'>Belts</a>
            <a href='#'>Wallets</a>
            <a href='#'>Jewellery</a>
            <a href='#'>Sunglasses</a>
            <a href='#'>Bags</a>
             
           </div>
           <div className="grid bg-gray-100 w-full justify-center ">
            <h3>Men Foot Waer</h3>
            <a href='#'>Casual Shoe</a>
            <a href='#'>Sports Shoe</a>
            <a href='#'>Spandals</a>
            <a href='#'>Formal Shoe</a>
           
           </div>
           <div className="grid w-full justify-center">
            <h3>Ethinic Waer</h3>
            <a href='#'>Men Kurtas</a>
            <a href='#'>Ethinic Jackets</a>
            
           </div>
           <div className="grid bg-gray-100 w-full justify-center">
            <h3> Ineer & Sleep Wear</h3>
            <a href='#'>All Ineer & Sleep Wear</a>
            <a href='#'>Vests</a>
            
           </div>
          </div>
          </div>
        
  )
}
