import HomeImag from '../assets/headericon/HomeFirstpic.png'

export const Homefirst = () => {
    
  return (
    <div className="flex justify-center items-center text-center w-2/3 h-96 relative top-36">
        <div className="flex justify-between">
            <div className="bg-gray-200 h-96 w-full grid">
            <div className="text-4xl font-semibold relative left-10 top-16 w-96 font-serif text-black">
                <h1>Lowest PricesBest Quality Shopping</h1>
                 </div>
                 <div className="flex w-96 h-16 gap-5 bg-white relative left-10 justify-center top-10 items-center text-center rounded-xl">
                    <div>
                         <h1>Free delivery</h1>

                    </div>
                    <div className="w-0.5 h-6 bg-black"></div>
                    <div>
                       <h1>Cash on delivey</h1>

                    </div>
                    <div className="w-0.5 h-6 bg-black"></div>
                    <div>
                        <h1>Easy Return</h1>

                    </div>
                    </div>
                    <div className="w-96 h-10 bg-fuchsia-800 relative left-10 items-center flex justify-center rounded-xl text-white font-bold text-xl cursor-pointer">
                         <a href='#'>Download the meesho app</a>
                    </div>



            </div>
            <div className=" flex">
                <img src={HomeImag} alt='../'/>

            </div>
        </div>

    </div>

    // <div className="relative ml-60">
    //     <div className="relative top-40 felx justify-center ">
    //         <div className="flex w-2/3 h-96 bg-gray-200 rounded-xl">
    //         <div className="grid">
    //             <div className="text-4xl font-semibold relative left-10 top-16 w-96 text-black">
    //             <h1>Lowest PricesBest Quality Shopping</h1>
    //             </div>
    //             <div className="flex w-96 h-16 bg-white relative left-10 justify-center top-10 items-center text-center rounded-xl">
    //                 <div>
    //                     <h1>Free delivery</h1>

    //                 </div>
    //                 <div>
    //                     <h1>Cash on delivey</h1>

    //                 </div>
    //                 <div>
    //                     <h1>Easy Return</h1>

    //                 </div>
    //                 <div>
                    
    //            </div>
    //             </div>
    //             <div className="w-96 h-10 bg-fuchsia-800 relative left-10 items-center flex justify-center rounded-xl text-white font-bold text-xl cursor-pointer">
    //                     <a href='#'>Download the meesho app</a>
    //                 </div>
    //                 </div>

    //         </div>

           
    //         <div className="Homefirstcolor border-2 border-solid  w-96 h-96 relative left-1/3 bottom-96 bg-fuchsia-800">
    //         <img src={Homepic} alt='../' className=" h-96 w-96 relative bottom-0.5 rounded-tr-xl rounded-br-xl"/>

               
    //         </div>
    //     </div>

    // </div>
  )
}
