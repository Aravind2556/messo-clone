// import { useState } from 'react';
//  // Optional: For styling the popup
//  import { shareData } from '../context/Createcontent';
// import { useContext } from 'react';



// export default function Popup() {
//     const {Fname}=useContext(shareData)
  

// //   useEffect(()=>{
//    console.log("ok")
// //   },[])

//   // Step 1: useState to manage popup visibility
//   const [isPopupVisible, setIsPopupVisible] = useState(true);


  

//   // Function to toggle the popup visibility
//   const togglePopup = () => {
//     setIsPopupVisible(!isPopupVisible);
//   };

//   return (
//     <div className="App relative top-36">
//       <h1>React Popup Example</h1>
      
//       {/* Step 2: Button to trigger popup */}
//       <button onClick={togglePopup}>
//         {isPopupVisible ? Fname.Fun : Fname.Fun}
//       </button>

//       {/* Step 3: Conditional rendering for the popup */}
//       {!isPopupVisible && (
//         <div className="popup">
//           <div className="popup-content">
//             <h2>Popup Content</h2>
//             <p>This is a simple popup component.</p>
//             <button onClick={togglePopup}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



