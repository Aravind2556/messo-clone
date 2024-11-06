import React from 'react'
// import { Routes,Route } from 'react-router-dom'
// import { Home } from './components/Home'
import { Header } from './Header/Header'
import { Route, Routes } from 'react-router-dom'
import NewHome from './components/NewHome'
import { AllSarees } from './components/TypesDress/AllSarees'
import { SilkSaree } from './components/TypesDress/SilkSaree'
import { StainSaree } from './components/TypesDress/StainSaree'
import { GeorgetteSaree } from './components/TypesDress/GeorgetteSaree'
import { EmbroideredSarees } from './components/TypesDress/EmbroideredSarees'
import { CottonSaree } from './components/TypesDress/CottonSaree'
import { CottonSilkSaree } from './components/TypesDress/CottonSilkSaree'
import { ChiffonSarees } from './components/TypesDress/ChiffonSarees'
import { AllKurtis } from './components/TypesDress/AllKurtis'
import { RayonKurtis } from './components/TypesDress/RayonKurtis'
import { CottonKurtis } from './components/TypesDress/CottonKurtis'

import { AllKurtaSets } from './components/TypesDress/AllKurtaSets'

import { EmbroideredSuits } from './components/TypesDress/EmbroideredSuits'
import { ChanderiSuits } from './components/TypesDress/ChanderiSuits'
import { Blouses } from './components/TypesDress/Blouses'
import { Dupattas } from './components/TypesDress/Dupattas'
import { Lehanga } from './components/TypesDress/Lehanga'
import { Gown } from './components/TypesDress/Gown'
import { EthnicBottomWear } from './components/TypesDress/EthnicBottomWear'
import { AnarkaliKurtis } from './components/TypesDress/AnarkaliKurtis'
import { EmbroideredKurtis } from './components/TypesDress/EmbroideredKurtis'
import { AllSuits } from './components/TypesDress/AllSuits'
import { ColltonSuits } from './components/TypesDress/ColltonSuits'

import { Tops } from './components/Women Western/Tops'
import { Dresses } from './components/Women Western/Dresses'
import { Sweaters } from './components/Women Western/Sweaters'
import { Jumpsuits } from './components/Women Western/Jumpsuits'
import { Jeans } from './components/Women Western/Jeans'
import { Palazzos } from './components/Women Western/Palazzos'
import { Shorts } from './components/Women Western/Shorts'
import { Skirts } from './components/Women Western/Skirts'
import { Bra } from './components/Women Western/Bra'
import { Briefs } from './components/Women Western/Briefs'
import { Nightsuits } from './components/Women Western/Nightsuits'
import { Alltobwear } from './components/Men Dress/Alltobwear'
import { Tshirts } from './components/Men Dress/Tshirts'
import { Shirts } from './components/Men Dress/Shirts'
import { Trackpants } from './components/Men Dress/Trackpants'
import { Trousers } from './components/Men Dress/Trousers'
import { Allmenaccessories } from './components/Men Dress/Allmenaccessories'
import { Watches } from './components/Men Dress/Watches'
import { Belts } from './components/Men Dress/Belts'
import { Walletes } from './components/Men Dress/Walletes'
import { Jewellery } from './components/Men Dress/Jewellery'
import { Sunglasses } from './components/Men Dress/Sunglasses'
import { Bags } from './components/Men Dress/Bags'
import { Casualshoes } from './components/Men Dress/Casualshoes'
import { Sportsshoes } from './components/Men Dress/Sportsshoes'
import { Sandals } from './components/Men Dress/Sandals'
import { Formalshoes } from './components/Men Dress/formalshoes'
import { Menkurtas } from './components/Men Dress/Menkurtas'
import { Ethnicjackets } from './components/Men Dress/Ethnicjackets'
import { Rompers } from './components/Kids Dress/Rompers'
import { Softtoys } from './components/Kids Dress/Softtoys'
import { Footwear } from './components/Kids Dress/Footwear'
import { Stationary } from './components/Kids Dress/Stationary'
import { Allbabycare } from './components/Kids Dress/Allbabycare'
import { Jewelleryset } from './components/Jewellery/Jewelleryset'
import { Earrings } from './components/Jewellery/Earrings'
import { Mangalsutras } from './components/Jewellery/Mangalsutras'
import { Studs } from './components/Jewellery/Studs'
import { Bangles } from './components/Jewellery/Bangles'
import { Necklaces } from './components/Jewellery/Necklaces'
import { Rings } from './components/Jewellery/Rings'
import { Anklets } from './components/Jewellery/Anklets'
import { Hairaccessories } from './components/Jewellery/Hairaccessories'
import { Socks } from './components/Jewellery/Socks'
import { Bedsheets } from './components/Home & Kitechecn/Bedsheets'
import { Doormats } from './components/Home & Kitechecn/Doormats'
import { Curtains } from './components/Home & Kitechecn/Curtains'
import { Cushion } from './components/Home & Kitechecn/Cushion'
import { Mattress } from './components/Home & Kitechecn/Mattress'
import { Allhomedecore } from './components/Home & Kitechecn/Allhomedecore'
import { Stickers } from './components/Home & Kitechecn/Stickers'
import { Clocks } from './components/Home & Kitechecn/Clocks'
import { Showpieces } from './components/Home & Kitechecn/Showpieces'
import { Kitechecnstorage } from './components/Home & Kitechecn/Kitechecnstorage'
import { Cookware } from './components/Home & Kitechecn/Cookware'
import { Face } from './components/Beauty & Health/Face'
import { Eyes } from './components/Beauty & Health/Eyes'
import { Lips } from './components/Beauty & Health/Lips'
import { Nails } from './components/Beauty & Health/Nails'
import { Sanitizers } from './components/Beauty & Health/Sanitizers'
import { Oralcare } from './components/Beauty & Health/Oralcare'
import { Femininehygiene } from './components/Beauty & Health/Femininehygiene'
import { Deodorants } from './components/Beauty & Health/Deodorants'
import { Allwomenbags } from './components/Bags/Allwomenbags'
import { Handbags } from './components/Bags/Handbags'
import { Clutches } from './components/Bags/Clutches'
import { Slingbags } from './components/Bags/Slingbags'
import { Allmenbags } from './components/Bags/Allmenbags'
import { Menwallets } from './components/Bags/Menwallets'
import { Flats } from './components/Bags/Flats'
import { Bellies } from './components/Bags/Bellies'
import { Juttis } from './components/Bags/Juttis'
import { Allmobile } from './components/Mobile/Allmobile'
import { Smartwatches } from './components/Mobile/Smartwatches'
import { Mobileholdeers } from './components/Mobile/Mobileholdeers'
import { Mobilecas } from './components/Mobile/Mobilecas'
import { Allapliances } from './components/Mobile/Allapliances'
import { Grooming } from './components/Mobile/Grooming'
import { Homeappliances } from './components/Mobile/Homeappliances'
import { Cart } from './components/Cart'







export const App = () => {
  return (
    <div>
     <div>
     <Header/>
     </div>
      
     <Routes>
      <Route path='/' element={<NewHome/>}/>
      {/* WOMEN ETHNIC START */}
      <Route path='/allsarees' element={<AllSarees/>}/>
      <Route path='/silksaree' element={<SilkSaree/>}></Route>
      <Route path='/stainsaree' element={<StainSaree/>}></Route>
      <Route path='/georgettesaree' element={<GeorgetteSaree/>}></Route>
      <Route path='/embroideredsaree' element={<EmbroideredSarees/>}></Route>
      <Route path='/cottonsaree' element={<CottonSaree/>}></Route>
      <Route path='/Cottonsilksaree' element={<CottonSilkSaree/>}></Route>
      <Route path='/chiffonsaree' element={<ChiffonSarees/>}></Route>
      <Route path='/AllKurtis' element={<AllKurtis/>}></Route>
      <Route path='/RayonKurtis' element={<RayonKurtis/>}></Route>
      <Route path='/CottonKurtis' element={<CottonKurtis/>}></Route>
      <Route path='/EmbroideredKurtis' element={<EmbroideredKurtis/>}></Route>
      <Route path='/AllKurtaSets' element={<AllKurtaSets/>}></Route>
      <Route path='/EmbroideredSuits' element={<EmbroideredSuits/>}></Route>
      <Route path='/ChanderiSuits' element={<ChanderiSuits/>}></Route>
      <Route path='/Blouses' element={<Blouses/>}></Route>
      <Route path='/Dupattas' element={<Dupattas/>}></Route>
      <Route path='/Lehanga' element={<Lehanga/>}></Route>
      <Route path='/Gown' element={<Gown/>}></Route>
      <Route path='/EthnicBottomWear' element={<EthnicBottomWear/>}></Route>
      <Route path='/AnarkaliKurtis' element={<AnarkaliKurtis/>}></Route>
      <Route path='/AllSuits' element={<AllSuits/>}></Route>
      <Route path='/ColltonSuits' element={<ColltonSuits/>}></Route>
      {/* wOMEN ETHNIC END */}\

      <Route path='/Tops' element={<Tops/>}></Route>
      <Route path='/Dresses' element={<Dresses/>}></Route>
      <Route path='/Sweaters' element={<Sweaters/>}></Route>
      <Route path='/Jumpsuits' element={<Jumpsuits/>}></Route>
      <Route path='/Jeans' element={<Jeans/>}></Route>
      <Route path='/Jumpsuits' element={<Jumpsuits/>}></Route>
      <Route path='/Palazzos' element={<Palazzos/>}></Route>
      <Route path='/Shorts' element={<Shorts/>}></Route>
      <Route path='/Skirts' element={<Skirts/>}></Route>
      <Route path='/Bra' element={<Bra/>}></Route>
      <Route path='/Briefs' element={<Briefs/>}></Route>
      <Route path='/Nightsuits' element={<Nightsuits/>}></Route>

      <Route path='ml' element={<Alltobwear/>}></Route>
      <Route path='/mts' element={<Tshirts/>}></Route>
      <Route path='msh' element={<Shirts/>}></Route>
      <Route path='mtr' element={<Trackpants/>}></Route>
      <Route path='mj' element={<Jeans/>}></Route>
      <Route path='mtro' element={<Trousers/>}></Route>
      <Route path='mal' element={<Allmenaccessories/>}></Route>
      <Route path='mw' element={<Watches/>}></Route>
      <Route path='mb' element={<Belts/>}></Route>
      <Route path='mwa' element={<Walletes/>}></Route>
      <Route path='mje' element={<Jewellery/>}></Route>
      <Route path='ms' element={<Sunglasses/>}></Route>
      <Route path='mba' element={<Bags/>}></Route>
      <Route path='mc' element={<Casualshoes/>}></Route>
      <Route path='msp' element={<Sportsshoes/>}></Route>
      <Route path='msa' element={<Sandals/>}></Route>
      <Route path='mf' element={<Formalshoes/>}></Route>
      <Route path='mm' element={<Menkurtas/>}></Route>
      <Route path='me' element={<Ethnicjackets/>}></Route>

      <Route path='kd' element={<Dresses/>}></Route>
      <Route path='kr' element={<Rompers/>}></Route>
      <Route path='kso' element={<Softtoys/>}></Route>
      <Route path='kf' element={<Footwear/>}></Route>
      <Route path='ksr' element={<Stationary/>}></Route>
      <Route path='kw' element={<Watches/>}></Route>
      <Route path='kb' element={<Bags/>}></Route>
      <Route path='ka' element={<Allbabycare/>}></Route>

      <Route path='' element={<Jewelleryset/>}></Route>
      <Route path='' element={<Earrings/>}></Route>
      <Route path='' element={<Mangalsutras/>}></Route>
      <Route path='' element={<Studs/>}></Route>
      <Route path='' element={<Bangles/>}></Route>
      <Route path='' element={<Necklaces/>}></Route>
      <Route path='' element={<Rings/>}></Route>
      <Route path='' element={<Anklets/>}></Route>
      <Route path='' element={<Bags/>}></Route>
      <Route path='' element={<Watches/>}></Route>
      <Route path='' element={<Hairaccessories/>}></Route>
      <Route path='' element={<Sunglasses/>}></Route>
      <Route path='' element={<Socks/>}></Route>

      <Route path='' element={<Bedsheets/>}></Route>
      <Route path='' element={<Doormats/>}></Route>
      <Route path='' element={<Curtains/>}></Route>
      <Route path='' element={<Cushion/>}></Route>
      <Route path='' element={<Mattress/>}></Route>
      <Route path='' element={<Allhomedecore/>}></Route>
      <Route path='' element={<Stickers/>}></Route>
      <Route path='' element={<Clocks/>}></Route>
      <Route path='' element={<Showpieces/>}></Route>
      <Route path='' element={<Kitechecnstorage/>}></Route>
      <Route path='' element={<Cookware/>}></Route>


      <Route path='' element={<Face/>}></Route>
      <Route path='' element={<Eyes/>}></Route>
      <Route path='' element={<Lips/>}></Route>
      <Route path='' element={<Nails/>}></Route>
      <Route path='' element={<Sanitizers/>}></Route>
      <Route path='' element={<Oralcare/>}></Route>
      <Route path='' element={<Femininehygiene/>}></Route>
      <Route path='' element={<Deodorants/>}></Route>

      <Route path='' element={<Allwomenbags/>}></Route>
      <Route path='' element={<Handbags/>}></Route>
      <Route path='' element={<Clutches/>}></Route>
      <Route path='' element={<Slingbags/>}></Route>
      <Route path='' element={<Allmenbags/>}></Route>
      <Route path='' element={<Menwallets/>}></Route>
      <Route path='' element={<Sportsshoes/>}></Route>
      <Route path='' element={<Casualshoes/>}></Route>
      <Route path='' element={<Formalshoes/>}></Route>
      <Route path='' element={<Sandals/>}></Route>
      <Route path='' element={<Flats/>}></Route>
      <Route path='' element={<Bellies/>}></Route>
      <Route path='' element={<Juttis/>}></Route>


      <Route path='' element={<Allmobile/>}></Route>
      <Route path='' element={<Smartwatches/>}></Route>
      <Route path='' element={<Mobileholdeers/>}></Route>
      <Route path='' element={<Mobilecas/>}></Route>
      <Route path='' element={<Allapliances/>}></Route>
      <Route path='' element={<Grooming/>}></Route>
      <Route path='' element={<Homeappliances/>}></Route>




      <Route path='/Cart' element={<Cart/>}></Route>









      
      
      
     </Routes>
    
    </div>
  )
}

