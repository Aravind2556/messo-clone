import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import User from '../assets/headericon/icons8-user-16.png'
import Cart from '../assets/headericon/icons8-cart-16.png'
import { shareData } from '../context/Createcontent';
import { useContext } from 'react';
import { useState} from 'react';
import { Wowenethnic } from '../components/popup/Wowenethnic';
import { Womenwestern } from '../components/popup/Womenwestern';
import { Kidsdress } from '../components/popup/Kidsdress';
import { Kitchenproduct } from '../components/popup/Kitchenproduct';
import { Beautyproduct } from '../components/popup/Beautyproduct';
import { Jewelleryproduct } from '../components/popup/Jewelleryproduct';
import { Bagesproduct } from '../components/popup/Bagesproduct';
import { Mendress } from '../components/popup/Mendress';

import { Electric } from '../components/popup/Electric';
import { useEffect } from 'react';








export const Header = () => {

  const navigateCart = useNavigate()

  const {Fname}=useContext(shareData)

  useEffect(() => {
    document.title = "FASHNER";
  }, []);
  
  const [isPopupVisible, setIsPopupVisible] = useState(true);
  const [Womenwest,WomenwesternD]=useState(true);
  const [Men,setMen]=useState(true)
  const [Kids,setKids]=useState(true)
  const [Kitechen,setKitechen]=useState(true)
  const [Beauty,setBeauty]=useState(true)
  const [Jewellery,setJewellery]=useState(true)
  const [Bags,setBags]=useState(true)
  const [Electronic,setElectronic]=useState(true)

 
  function handleToggle(option){
    setIsPopupVisible(true)
    WomenwesternD(true)
    setMen(true)
    setKids(true)
    setKitechen(true)
    setJewellery(true)
    setBeauty(true)
    setBags(true)
    setElectronic(true)
    if(option==='we'){
      setIsPopupVisible(!isPopupVisible)
    }
    else if(option==='ww'){
      WomenwesternD(!Womenwest)
    }
    else if(option==='m'){
      setMen(!Men)
    }
    else if(option==='k'){
      setKids(!Kids)
    }
    else if(option==='ki'){
      setKitechen(!Kitechen)
    }
    else if(option==='be'){
      setBeauty(!Beauty)
    }
    else if(option==='j'){
      setJewellery(!Jewellery)
    }
    else if(option==='ba'){
      setBags(!Bags)
    }
    else{
      setElectronic(!Electronic)
    }
  }

// console.log(isPopupVisible, Womenwest, Men ,Beauty , Kids , Kitechen ,Jewellery , Bags , Electronic)


// function WomenUpdate(){
//   setIsPopupVisible(!isPopupVisible)
// }
// function WowmenWes(){
//   WomenwesternD(!Womenwest)
// }
// function updateMen(){
//   setMen(!Men)
// }
// function updateKids(){
//   setKids(!Kids)
// }
// function UpdateBeauty(){
//   setBeauty(!Beauty)
// }
// function updateBags(){
//   setBags(!Bags)
// }
// function UpdateKitchen(){
//   setKitechen(!Kitechen)
// }
// function updateJwell(){
//   setJewellery(!Jewellery)
// }
// function upadteEltronic(){
//   setElectronic(!Electronic)
// }


  

  return (
    <>
    <div className="header fixed w-full z-10">
    <div className="flex justify-evenly items-center text-center h-20 bg-white">
      <Link to='/' className="header_logo uppercase">fashner</Link> 
      <Link to=''><input type='text' placeholder='Search for all caterics' className="w-96 h-10"></input></Link>
      <Link to=''>Download App</Link>
      <div className="bg-gray-500 h-10 w-0.5"></div>
      <Link to=''>Become a Supplier</Link>
      <div className="bg-gray-500 h-10 w-0.5"></div>
      <Link to=''>Newsroom</Link>
      <div className="bg-gray-500 h-10 w-0.5"></div>
      <div className="grid items-center text-center">
      <Link to='' className="relative left-2"><img src={User} alt='User' className="w-5 h-5"></img></Link>
      <Link to=''><h1>Profile</h1></Link>
      </div>
      <div>
      <Link to='' className="relative left-1"><img src={Cart} alt='Cart?' className="w-5 h-5"></img></Link>
      <p onClick={()=>navigateCart('/cart')}>Cart</p>
      </div>
      </div>
      <hr/>
      <div className="flex justify-evenly h-12 items-center bg-white cursor-pointer">
        
          <p onMouseOver={()=>{handleToggle('we')}} className="hover:underline underline-offset-8">{Fname.Fun}</p>
          <p onMouseOver={()=>{handleToggle('ww')}} className="hover:underline underline-offset-8">{Fname.Western}</p>
          <p onMouseOver={()=>{handleToggle('m')}} className="hover:underline underline-offset-8">{Fname.men}</p>
          <p onMouseOver={()=>{handleToggle('k')}} className="hover:underline underline-offset-8">{Fname.kids}</p>
          <p onMouseOver={()=>{handleToggle('ki')}} className="hover:underline underline-offset-8">{Fname.kitchen}</p>
          <p onMouseOver={()=>{handleToggle('be')}} className="hover:underline underline-offset-8">{Fname.beauty}</p>
          <p onMouseOver={()=>{handleToggle('j')}} className="hover:underline underline-offset-8">{Fname.jewellery}</p>
          <p onMouseOver={()=>{handleToggle('ba')}} className="hover:underline underline-offset-8">{Fname.bags}</p>
          <p onMouseOver={()=>{handleToggle('e')}} className="hover:underline underline-offset-8">{Fname.electronics}</p>
      </div>
      <hr/>
    </div>
    <div className="Ethnic fixed w-full z-20">
        <div className={`flex justify-center popup ${isPopupVisible?'':'show'}`}>
       {!isPopupVisible && (<Wowenethnic/>)}
       </div>
       <div className={`flex justify-center popup ${Womenwest?'show':''}`}>
       {!Womenwest && (<Womenwestern/>)}
       </div>
       <div className={`flex justify-center popup ${Men?'':'show'}`}>
       {!Men && (<Mendress/>)}
       </div>
       <div className={`flex justify-center popup ${Kids?'show':''}`}>
       {!Kids && (<Kidsdress/>)}
       </div>
       <div className={`flex justify-center popup ${Kitechen?'':'show'}`}>
       {!Kitechen && (<Kitchenproduct/>)}
       </div>
       <div className={`flex justify-center popup ${Beauty?'show':''}`}>
       {!Beauty && (<Beautyproduct/>)}
       </div>
       <div className={`flex justify-center popup ${Jewellery?'':'show'}`}>
       {!Jewellery && (<Jewelleryproduct/>)}
       </div>
       <div className={`flex justify-center popup ${!Bags?'show':''}`}>
       {!Bags && (<Bagesproduct/>)}
       </div>
       <div className={`flex justify-center popup ${!Electronic?'':'show'}`}>  
         {!Electronic && (<Electric/>)}
         </div>
       </div>
       </>
   
  )
}
