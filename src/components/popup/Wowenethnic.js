import React from 'react'
import { useNavigate } from 'react-router-dom'
 


export const Wowenethnic = () => {
  const navigateCart = useNavigate()
  return (
    <div className="Popup gird w-2/3  bg-gray-300 fixed top-32">
    <div className="flex h-56   justify-around">
      <div className="grid bg-gray-100 w-full justify-center">
        <h3>All Women Ethnic</h3>
        <a href="#">View All</a>
      </div>
           <div className="grid w-full justify-center">
            <h3>Sarees</h3>
            <p onClick={()=>{navigateCart('/allsarees')}} >All Saree</p>
            <p onClick={()=>{navigateCart('/sliksaress')}} >Slik Saree</p>
            <p onClick={()=>{navigateCart('/cottonsilksarees')}} >Cotton Silk Saree</p>
            <p onClick={()=>{navigateCart('/cottonsarees')}} >Cotton Saree</p>
            <p onClick={()=>{navigateCart('/grorgettesarees')}}>Georgette Saree</p>
            <p onClick={()=>{navigateCart('/chiffonsarees')}}>Chiffon Saree</p>
            <p onClick={()=>{navigateCart('/satinsarees')}}>Satin Saree</p>
            <p onClick={()=>{navigateCart('/embroideredsarees')}}>Embroidered Saree</p>
           </div>
           <div className="grid bg-gray-100 w-full justify-center">
            <h3>Kurtis</h3>
            <a href='/AllKurtis' target='_blank'>All Kurtis</a>
            <a href='/AnarkaliKurtis' target='_blank'>Anarkali Kurtis</a>
            <a href='/RayonKurtis' target='_blank'>Rayon Kurtis</a>
            <a href='/CottonKurtis' target='_blank'>Cotton Kurtis</a>
            <a href='/EmbroideredKurtis' target='_blank'>Embroidered Kurtis</a>
           
           </div>
           <div className="grid w-full justify-center">
            <h3>Kurta Sets</h3>
            <a href='/AllKurtaSets' target='_blank'>All Kurta Sets</a>
            
           </div>
           <div className="grid bg-gray-100 w-full justify-center">
            <h3>Suits & Dress Material</h3>
            <a href='/AllSuits' target='_blank'>All suits & Dress Material</a>
            <a href='/ColltonSuits' target='_blank'>Cotton Suits</a>
            <a href='/EmbroideredSuits' target='_blank'>Embrodered Suits</a>
            <a href='/ChanderiSuits' target='_blank'>Chanderi Suits</a>
            
           </div>
           <div className="grid w-full justify-center">
            <h3>Other Ethinic</h3>
            <a href="/Blouses" target='_blank'>Blouses</a>
            <a href="/Dupattas" target='_blank'>Dupattas</a>
            <a href="/Lehanga" target='_blank'>Lehanga</a>
            <a href="/Gown" target='_blank'>Gown</a>
            <a href="/EthnicBottomWear" target='_blank'>Ethnic Bottomwear</a>

           </div>
          </div>
          </div>
       
  )
}
