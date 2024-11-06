import React from 'react'

import { Homefirst } from '../components/Homefirst';
import { HomeSecond } from '../components/HomeSecond';
import { HomeThired } from '../components/HomeThired'; 
import { HomeFourth } from '../components/HomeFourth';
import { HomeFifth } from '../components/HomeFifth';
import { HomeSixth } from '../components/HomeSixth';
import { HomeSeventh } from '../components/HomeSeventh';

const NewHome = () => {
  return (
    <div className="grid gap-16 ">
    <div className="flex justify-center">
      <Homefirst/>
      </div>
      <div className="flex justify-center">
        <HomeSecond/>
      </div>
      <div className="flex justify-center">
        <HomeThired/>
      </div>
      <div className="flex justify-center">
        <HomeFourth/>
      </div>
      <div className="flex justify-center">
        <HomeFifth/>
      </div>
      <div className="flex justify-center">
        <HomeSixth/>
      </div>
      <div className="flex justify-center">
        <HomeSeventh/>
      </div>
      
      
      
      
  </div>
  )
}

export default NewHome