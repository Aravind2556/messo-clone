import React from 'react'
import Ess from '../assets/bigimg/for women.jpeg'


export const HomeFifth = () => {
  return (
    <div className="w-2/3 h-96 flex justify-center bg-rose-950 items-center text-center relative top-48">
        <div className="flex gap-20">
            <div className="flex text-white items-center">
                <div className="gird">
                    <div className="text-white text-3xl font-extrabold">
                <h1>New Styles</h1></div>
                <div className="text-black bg-white flex items-center justify-center w-32 h-14 rounded-xl font-bold cursor-pointer">
                <h1>View All</h1>
                </div>
                </div>


            </div>
            <div className="flex gap-28">
                <div className="grid w-40 h-80 bg-gray-300 justify-center">
                <div>
                        <h1>heading</h1>
                    </div>
                    <div>
                        <img src={Ess} alt='../' className="w-28 h-28"/>
                        <h1>ok</h1>
                    </div>
                    <div>
                    <img src={Ess} alt='../' className="w-28 h-28"/>
                    <h1>ok</h1>
                    </div>


                </div>
                <div className="grid w-40 h-80 bg-gray-300 justify-center">
                <div>
                        <h1>heading</h1>
                    </div>
                    <div>
                        
                    <img src={Ess} alt='../' className="w-32 h-32"/>
                    <h1>ok</h1>
                    </div>
                    <div>
                        
                    <img src={Ess} alt='../' className="w-28 h-28"/>
                    <h1>ok</h1>
                    </div>

                </div>
                <div className="grid w-40 h-80 bg-gray-300 justify-center">
                    <div>
                        <h1>heading</h1>
                    </div>
                    <div>
                        
                    <img src={Ess} alt='../' className="w-28 h-28"/>
                    <h1>ok</h1>
                    </div>
                    <div>
                        
                    <img src={Ess} alt='../' className="w-28 h-28"/>
                    <h1>ok</h1>
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}
