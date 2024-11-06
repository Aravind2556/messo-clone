import React, { useState } from 'react'
import { createContext } from 'react'
import WomenBag from '../assets/bigimg/women bags.webp'
import WomenDress from '../assets/bigimg/black deass women.jpg'
import WomenMakeover from '../assets/bigimg/jweel for women.jpg'
import WomenFoot from '../assets/bigimg/wowmen foot wear.webp'
import MenBag from '../assets/bigimg/mens bages.jpg'
import MenDress from '../assets/bigimg/dress for men.jpeg'
import MenFoot from '../assets/bigimg/shoe fro men.jpeg'
import MenMake from '../assets/bigimg/for men.jpeg'
import BackGround from '../assets/bigimg/Impact-of-synergy-and-velocity-on-node-cooperation.png'
import KidsDress from '../assets/bigimg/kids dress.jpeg'
import KidsGrow from '../assets/bigimg/kids grow.jpg'
import KidsFoot from '../assets/bigimg/kids shoe.jpg'
import KidsPlay from '../assets/bigimg/play item for kids.jpeg'
import BackGro from '../assets/bigimg/16885262-beautiful-asian-art-pattern-on-red-background.jpg'
import AllSarees from '../assets/bigimg/black deass women.jpg'

import A1 from '../assets/allsaress/OIP (1).jpg'
import A2 from '../assets/allsaress/OIP (2).jpg'
import A3 from '../assets/allsaress/OIP (3).jpg'
import A4 from '../assets/allsaress/OIP (4).jpg'
import A5 from '../assets/allsaress/OIP (5).jpg'
import A6 from '../assets/allsaress/OIP (6).jpg'
import A7 from '../assets/allsaress/OIP (7).jpg'
import A8 from '../assets/allsaress/OIP (8).jpg'
import A9 from '../assets/allsaress/OIP (9).jpg'
import A10 from '../assets/allsaress/OIP (10).jpg'
import A11 from '../assets/allsaress/OIP (11).jpg'
import A12 from '../assets/allsaress/OIP (12).jpg'
import A13 from '../assets/allsaress/OIP (13).jpg'
import A14 from '../assets/allsaress/OIP (14).jpg'
import A15 from '../assets/allsaress/OIP (15).jpg'
import A16 from '../assets/allsaress/OIP (16).jpg'
import A17 from '../assets/allsaress/OIP (17).jpg'
import A18 from '../assets/allsaress/OIP.jpg'
import A19 from '../assets/allsaress/download (1).jpg'
import A20 from '../assets/allsaress/download.jpg'
import A21 from '../assets/allsaress/images (1).jpg'
import A22 from '../assets/allsaress/images (2).jpg'
import A23 from '../assets/allsaress/images (3).jpg'
import A24 from '../assets/allsaress/images (4).jpg'
import A25 from '../assets/allsaress/images (5).jpg'
import A26 from '../assets/allsaress/images (6).jpg'
import A27 from '../assets/allsaress/images (7).jpg'
import A28 from '../assets/allsaress/images (8).jpg'
import A29 from '../assets/allsaress/images (9).jpg'
import A30 from '../assets/allsaress/images (10).jpg'


 




export const shareData=createContext(null)



export default function Createcontent(props){

    


  const HomeProduct=[
 
  {
    homebotton:"Top Categories to choose from",
    
    whos:"Womens's Store",
    Bag:WomenBag,
    Dress:WomenDress,
    Foot:WomenFoot,
    Makeover:WomenMakeover,
    bag:"Bages",
    dress:"Cloths",
    makover:"Jwells",
    foot:"Foot Wears",
    BackGround:BackGround,
  },{

    whoes:"Mens's Store",
    Bagm:MenBag,
    Dress:MenDress,
    Foot:MenFoot,
    Makeoverm:MenMake,
    bag:"Bages",
    dress:"Cloths",
    makover:"Gromming",
    foot:"Foot Wears",
    BackGround:BackGro,
  },{
    who:"Kids's Store",
    Bag:KidsGrow,
    Dress:KidsDress,
    Foot:KidsFoot,
    Makeover:KidsPlay,
    bag:"Bages",
    dress:"Cloths",
    makover:"Jwells",
    foot:"Foot Wears",
    BackGround:BackGro
  },
  {
    BackGround:BackGro
  }
]
const Product1={
  whos:"Womens's Store",
    Bag:WomenBag,
    Dress:WomenDress,
    Foot:WomenFoot,
    Makeover:WomenMakeover,
    bag:"Bages",
    dress:"Cloths",
    makover:"Jwells",
    foot:"Foot Wears",
  BackGround:BackGround

}

const Fname={
  Fun:"Women Ethnic",
  Western:"Women Western",
  men:"Men",
  kids:"Kids",
  kitchen:"Home & Kitchen",
  beauty:"Beauty & Health",
  jewellery:"Jewellery & Accessories",
  bags:"Bags & FoodWear",
  electronics:"Electronics"
}


const [count,setcount]=useState(1)







const AllSareeS=[
  {
      id: 1,
      name: "Silk Saree",
      category: "Silk",
      price: count*250,
      currency: "USD",
      image: A1,
      description: "Elegant silk saree with traditional designs.",
      colors: ["Red", "Green", "Blue"],
      sizes: ["Free Size"],
      stock: 25,
      discount: 10,
      ratings: 4.5,
      reviews: [
          {
              user: "Alice",
              rating: 5,
              comment: "Beautiful saree, great quality!"
          },
          {
              user: "Bob",
              rating: 4,
              comment: "Loved the color and fabric."
          }
      ]
  },
  {
    id: 2,
    name: "Silk Saree",
    category: "Silk",
    price: count*30000,
    currency: "USD",
    image: A2,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
},
{
  id: 1,
  name: "Silk Saree",
  category: "Silk",
  price: count*69878,
  currency: "USD",
  image: A3,
  description: "Elegant silk saree with traditional designs.",
  colors: ["Red", "Green", "Blue"],
  sizes: ["Free Size"],
  stock: 25,
  discount: 10,
  ratings: 4.5,
  reviews: [
      {
          user: "Alice",
          rating: 5,
          comment: "Beautiful saree, great quality!"
      },
      {
          user: "Bob",
          rating: 4,
          comment: "Loved the color and fabric."
      }
  ]
},
{
  id: 1,
  name: "Silk Saree",
  category: "Silk",
  price:count*32000,
  currency: "USD",
  image:A4,
  description: "Elegant silk saree with traditional designs.",
  colors: ["Red", "Green", "Blue"],
  sizes: ["Free Size"],
  stock: 25,
  discount: 10,
  ratings: 4.5,
  reviews: [
      {
          user: "Alice",
          rating: 5,
          comment: "Beautiful saree, great quality!"
      },
      {
          user: "Bob",
          rating: 4,
          comment: "Loved the color and fabric."
      }
  ]
},
{
  id: 1,
  name: "Silk Saree",
  category: "Silk",
  price: count*32000,
  currency: "USD",
  image: A5,
  description: "Elegant silk saree with traditional designs.",
  colors: ["Red", "Green", "Blue"],
  sizes: ["Free Size"],
  stock: 25,
  discount: 10,
  ratings: 4.5,
  reviews: [
      {
          user: "Alice",
          rating: 5,
          comment: "Beautiful saree, great quality!"
      },
      {
          user: "Bob",
          rating: 4,
          comment: "Loved the color and fabric."
      }
  ]
},
{
  id: 1,
  name: "Silk Saree",
  category: "Silk",
  price: count*63000,
  currency: "USD",
  image: A6,
  description: "Elegant silk saree with traditional designs.",
  colors: ["Red", "Green", "Blue"],
  sizes: ["Free Size"],
  stock: 25,
  discount: 10,
  ratings: 4.5,
  reviews: [
      {
          user: "Alice",
          rating: 5,
          comment: "Beautiful saree, great quality!"
      },
      {
          user: "Bob",
          rating: 4,
          comment: "Loved the color and fabric."
      }
  ]
},
{
  id: 1,
  name: "Silk Saree",
  category: "Silk",
  price:count*36000,
  currency: "USD",
  image:A7,
  description: "Elegant silk saree with traditional designs.",
  colors: ["Red", "Green", "Blue"],
  sizes: ["Free Size"],
  stock: 25,
  discount: 10,
  ratings: 4.5,
  reviews: [
      {
          user: "Alice",
          rating: 5,
          comment: "Beautiful saree, great quality!"
      },
      {
          user: "Bob",
          rating: 4,
          comment: "Loved the color and fabric."
      }
  ]
},
{
  id: 1,
  name: "Silk Saree",
  category: "Silk",
  price: count*69000,
  currency: "USD",
  image: A8,
  description: "Elegant silk saree with traditional designs.",
  colors: ["Red", "Green", "Blue"],
  sizes: ["Free Size"],
  stock: 25,
  discount: 10,
  ratings: 4.5,
  reviews: [
      {
          user: "Alice",
          rating: 5,
          comment: "Beautiful saree, great quality!"
      },
      {
          user: "Bob",
          rating: 4,
          comment: "Loved the color and fabric."
      }
  ]
},
{
  id: 1,
  name: "Silk Saree",
  category: "Silk",
  price: count*23655,
  currency: "USD",
  image: A9,
  description: "Elegant silk saree with traditional designs.",
  colors: ["Red", "Green", "Blue"],
  sizes: ["Free Size"],
  stock: 25,
  discount: 10,
  ratings: 4.5,
  reviews: [
      {
          user: "Alice",
          rating: 5,
          comment: "Beautiful saree, great quality!"
      },
      {
          user: "Bob",
          rating: 4,
          comment: "Loved the color and fabric."
      }
  ]
},
{
  id: 1,
  name: "Silk Saree",
  category: "Silk",
  price: count*235,
  currency: "USD",
  image: A10,
  description: "Elegant silk saree with traditional designs.",
  colors: ["Red", "Green", "Blue"],
  sizes: ["Free Size"],
  stock: 25,
  discount: 10,
  ratings: 4.5,
  reviews: [
      {
          user: "Alice",
          rating: 5,
          comment: "Beautiful saree, great quality!"
      },
      {
          user: "Bob",
          rating: 4,
          comment: "Loved the color and fabric."
      }
  ]
},
{
  id: 1,
  name: "Silk Saree",
  category: "Silk",
  price: count*632,
  currency: "USD",
  image: A11,
  description: "Elegant silk saree with traditional designs.",
  colors: ["Red", "Green", "Blue"],
  sizes: ["Free Size"],
  stock: 25,
  discount: 10,
  ratings: 4.5,
  reviews: [
      {
          user: "Alice",
          rating: 5,
          comment: "Beautiful saree, great quality!"
      },
      {
          user: "Bob",
          rating: 4,
          comment: "Loved the color and fabric."
      }
  ]
},
{
  id: 1,
  name: "Silk Saree",
  category: "Silk",
  price: count*386,
  currency: "USD",
  image: A12,
  description: "Elegant silk saree with traditional designs.",
  colors: ["Red", "Green", "Blue"],
  sizes: ["Free Size"],
  stock: 25,
  discount: 10,
  ratings: 4.5,
  reviews: [
      {
          user: "Alice",
          rating: 5,
          comment: "Beautiful saree, great quality!"
      },
      {
          user: "Bob",
          rating: 4,
          comment: "Loved the color and fabric."
      }
  ]
},
{
  id: 1,
  name: "Silk Saree",
  category: "Silk",
  price: count*90655,
  currency: "USD",
  image: A13,
  description: "Elegant silk saree with traditional designs.",
  colors: ["Red", "Green", "Blue"],
  sizes: ["Free Size"],
  stock: 25,
  discount: 10,
  ratings: 4.5,
  reviews: [
      {
          user: "Alice",
          rating: 5,
          comment: "Beautiful saree, great quality!"
      },
      {
          user: "Bob",
          rating: 4,
          comment: "Loved the color and fabric."
      }
  ]
},
{
  id: 1,
  name: "Silk Saree",
  category: "Silk",
  price: count*15000,
  currency: "USD",
  image: A14,
  description: "Elegant silk saree with traditional designs.",
  colors: ["Red", "Green", "Blue"],
  sizes: ["Free Size"],
  stock: 25,
  discount: 10,
  ratings: 4.5,
  reviews: [
      {
          user: "Alice",
          rating: 5,
          comment: "Beautiful saree, great quality!"
      },
      {
          user: "Bob",
          rating: 4,
          comment: "Loved the color and fabric."
      }
  ]
},
{
  id: 1,
  name: "Silk Saree",
  category: "Silk",
  price: count*600,
  currency: "USD",
  image: A15,
  description: "Elegant silk saree with traditional designs.",
  colors: ["Red", "Green", "Blue"],
  sizes: ["Free Size"],
  stock: 25,
  discount: 10,
  ratings: 4.5,
  reviews: [
      {
          user: "Alice",
          rating: 5,
          comment: "Beautiful saree, great quality!"
      },
      {
          user: "Bob",
          rating: 4,
          comment: "Loved the color and fabric."
      }
  ]
},
{
  id: 1,
  name: "Silk Saree",
  category: "Silk",
  price: count*230,
  currency: "USD",
  image: A16,
  description: "Elegant silk saree with traditional designs.",
  colors: ["Red", "Green", "Blue"],
  sizes: ["Free Size"],
  stock: 25,
  discount: 10,
  ratings: 4.5,
  reviews: [
      {
          user: "Alice",
          rating: 5,
          comment: "Beautiful saree, great quality!"
      },
      {
          user: "Bob",
          rating: 4,
          comment: "Loved the color and fabric."
      }
  ]
},
{
  id: 1,
  name: "Silk Saree",
  category: "Silk",
  price: count*253,
  currency: "USD",
  image: A17,
  description: "Elegant silk saree with traditional designs.",
  colors: ["Red", "Green", "Blue"],
  sizes: ["Free Size"],
  stock: 25,
  discount: 10,
  ratings: 4.5,
  reviews: [
      {
          user: "Alice",
          rating: 5,
          comment: "Beautiful saree, great quality!"
      },
      {
          user: "Bob",
          rating: 4,
          comment: "Loved the color and fabric."
      }
  ]
},
{
  id: 1,
  name: "Silk Saree",
  category: "Silk",
  price: count*269,
  currency: "USD",
  image: A18,
  description: "Elegant silk saree with traditional designs.",
  colors: ["Red", "Green", "Blue"],
  sizes: ["Free Size"],
  stock: 25,
  discount: 10,
  ratings: 4.5,
  reviews: [
      {
          user: "Alice",
          rating: 5,
          comment: "Beautiful saree, great quality!"
      },
      {
          user: "Bob",
          rating: 4,
          comment: "Loved the color and fabric."
      }
  ]
},
{
  id: 1,
  name: "Silk Saree",
  category: "Silk",
  price: count*963,
  currency: "USD",
  image: A19,
  description: "Elegant silk saree with traditional designs.",
  colors: ["Red", "Green", "Blue"],
  sizes: ["Free Size"],
  stock: 25,
  discount: 10,
  ratings: 4.5,
  reviews: [
      {
          user: "Alice",
          rating: 5,
          comment: "Beautiful saree, great quality!"
      },
      {
          user: "Bob",
          rating: 4,
          comment: "Loved the color and fabric."
      }
  ]
},
{
  id: 1,
  name: "Silk Saree",
  category: "Silk",
  price: count*856,
  currency: "USD",
  image: A20,
  description: "Elegant silk saree with traditional designs.",
  colors: ["Red", "Green", "Blue"],
  sizes: ["Free Size"],
  stock: 25,
  discount: 10,
  ratings: 4.5,
  reviews: [
      {
          user: "Alice",
          rating: 5,
          comment: "Beautiful saree, great quality!"
      },
      {
          user: "Bob",
          rating: 4,
          comment: "Loved the color and fabric."
      }
  ]
},
{
  id: 1,
  name: "Silk Saree",
  category: "Silk",
  price: count*563,
  currency: "USD",
  image: A21,
  description: "Elegant silk saree with traditional designs.",
  colors: ["Red", "Green", "Blue"],
  sizes: ["Free Size"],
  stock: 25,
  discount: 10,
  ratings: 4.5,
  reviews: [
      {
          user: "Alice",
          rating: 5,
          comment: "Beautiful saree, great quality!"
      },
      {
          user: "Bob",
          rating: 4,
          comment: "Loved the color and fabric."
      }
  ]
},
{
  id: 1,
  name: "Silk Saree",
  category: "Silk",
  price: count*2639,
  currency: "USD",
  image: A22,
  description: "Elegant silk saree with traditional designs.",
  colors: ["Red", "Green", "Blue"],
  sizes: ["Free Size"],
  stock: 25,
  discount: 10,
  ratings: 4.5,
  reviews: [
      {
          user: "Alice",
          rating: 5,
          comment: "Beautiful saree, great quality!"
      },
      {
          user: "Bob",
          rating: 4,
          comment: "Loved the color and fabric."
      }
  ]
},
{
  id: 1,
  name: "Silk Saree",
  category: "Silk",
  price: count*2986,
  currency: "USD",
  image: A23,
  description: "Elegant silk saree with traditional designs.",
  colors: ["Red", "Green", "Blue"],
  sizes: ["Free Size"],
  stock: 25,
  discount: 10,
  ratings: 4.5,
  reviews: [
      {
          user: "Alice",
          rating: 5,
          comment: "Beautiful saree, great quality!"
      },
      {
          user: "Bob",
          rating: 4,
          comment: "Loved the color and fabric."
      }
  ]
},
{
  id: 1,
  name: "Silk Saree",
  category: "Silk",
  price: count*150,
  currency: "USD",
  image: A24,
  description: "Elegant silk saree with traditional designs.",
  colors: ["Red", "Green", "Blue"],
  sizes: ["Free Size"],
  stock: 25,
  discount: 10,
  ratings: 4.5,
  reviews: [
      {
          user: "Alice",
          rating: 5,
          comment: "Beautiful saree, great quality!"
      },
      {
          user: "Bob",
          rating: 4,
          comment: "Loved the color and fabric."
      }
  ]
},
{
  id: 1,
  name: "Silk Saree",
  category: "Silk",
  price: count*8500,
  currency: "USD",
  image: A25,
  description: "Elegant silk saree with traditional designs.",
  colors: ["Red", "Green", "Blue"],
  sizes: ["Free Size"],
  stock: 25,
  discount: 10,
  ratings: 4.5,
  reviews: [
      {
          user: "Alice",
          rating: 5,
          comment: "Beautiful saree, great quality!"
      },
      {
          user: "Bob",
          rating: 4,
          comment: "Loved the color and fabric."
      }
  ]
},
{
  id: 1,
  name: "Silk Saree",
  category: "Silk",
  price: count*6000,
  currency: "USD",
  image: A26,
  description: "Elegant silk saree with traditional designs.",
  colors: ["Red", "Green", "Blue"],
  sizes: ["Free Size"],
  stock: 25,
  discount: 10,
  ratings: 4.5,
  reviews: [
      {
          user: "Alice",
          rating: 5,
          comment: "Beautiful saree, great quality!"
      },
      {
          user: "Bob",
          rating: 4,
          comment: "Loved the color and fabric."
      }
  ]
},
{
  id: 1,
  name: "Silk Saree",
  category: "Silk",
  price: count*560,
  currency: "USD",
  image: A27,
  description: "Elegant silk saree with traditional designs.",
  colors: ["Red", "Green", "Blue"],
  sizes: ["Free Size"],
  stock: 25,
  discount: 10,
  ratings: 4.5,
  reviews: [
      {
          user: "Alice",
          rating: 5,
          comment: "Beautiful saree, great quality!"
      },
      {
          user: "Bob",
          rating: 4,
          comment: "Loved the color and fabric."
      }
  ]
},
{
  id: 1,
  name: "Silk Saree",
  category: "Silk",
  price: count*2300,
  currency: "USD",
  image: A28,
  description: "Elegant silk saree with traditional designs.",
  colors: ["Red", "Green", "Blue"],
  sizes: ["Free Size"],
  stock: 25,
  discount: 10,
  ratings: 4.5,
  reviews: [
      {
          user: "Alice",
          rating: 5,
          comment: "Beautiful saree, great quality!"
      },
      {
          user: "Bob",
          rating: 4,
          comment: "Loved the color and fabric."
      }
  ]
},
{
  id: 1,
  name: "Silk Saree",
  category: "Silk",
  price: count*560,
  currency: "USD",
  image: A29,
  description: "Elegant silk saree with traditional designs.",
  colors: ["Red", "Green", "Blue"],
  sizes: ["Free Size"],
  stock: 25,
  discount: 10,
  ratings: 4.5,
  reviews: [
      {
          user: "Alice",
          rating: 5,
          comment: "Beautiful saree, great quality!"
      },
      {
          user: "Bob",
          rating: 4,
          comment: "Loved the color and fabric."
      }
  ]
},
{
  id: 1,
  name: "Silk Saree",
  category: "Silk",
  price: count*320,
  currency: "USD",
  image: A30,
  description: "Elegant silk saree with traditional designs.",
  colors: ["Red", "Green", "Blue"],
  sizes: ["Free Size"],
  stock: 25,
  discount: 10,
  ratings: 4.5,
  reviews: [
      {
          user: "Alice",
          rating: 5,
          comment: "Beautiful saree, great quality!"
      },
      {
          user: "Bob",
          rating: 4,
          comment: "Loved the color and fabric."
      }
  ]
}

 
]


// const sareeOne = AllSareeS[0]
// const sareeTwo = AllSareeS[1]

const [cartProduct, setCartProducts] = useState([])


const SilkSaree=[
{
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
},
{
  id: 2,
  name: "Silk Saree",
  category: "Silk",
  price: 120.00,
  currency: "USD",
  image: AllSarees,
  description: "Elegant silk saree with traditional designs.",
  colors: ["Red", "Green", "Blue"],
  sizes: ["Free Size"],
  stock: 25,
  discount: 10,
  ratings: 4.5,
  reviews: [
      {
          user: "Alice",
          rating: 5,
          comment: "Beautiful saree, great quality!"
      },
      {
          user: "Bob",
          rating: 4,
          comment: "Loved the color and fabric."
      }
  ]
},
{
id: 1,
name: "Silk Saree",
category: "Silk",
price: 120.00,
currency: "USD",
image: AllSarees,
description: "Elegant silk saree with traditional designs.",
colors: ["Red", "Green", "Blue"],
sizes: ["Free Size"],
stock: 25,
discount: 10,
ratings: 4.5,
reviews: [
    {
        user: "Alice",
        rating: 5,
        comment: "Beautiful saree, great quality!"
    },
    {
        user: "Bob",
        rating: 4,
        comment: "Loved the color and fabric."
    }
]
},
{
id: 1,
name: "Silk Saree",
category: "Silk",
price: 120.00,
currency: "USD",
image: AllSarees,
description: "Elegant silk saree with traditional designs.",
colors: ["Red", "Green", "Blue"],
sizes: ["Free Size"],
stock: 25,
discount: 10,
ratings: 4.5,
reviews: [
    {
        user: "Alice",
        rating: 5,
        comment: "Beautiful saree, great quality!"
    },
    {
        user: "Bob",
        rating: 4,
        comment: "Loved the color and fabric."
    }
]
},
{
id: 1,
name: "Silk Saree",
category: "Silk",
price: 120.00,
currency: "USD",
image: AllSarees,
description: "Elegant silk saree with traditional designs.",
colors: ["Red", "Green", "Blue"],
sizes: ["Free Size"],
stock: 25,
discount: 10,
ratings: 4.5,
reviews: [
    {
        user: "Alice",
        rating: 5,
        comment: "Beautiful saree, great quality!"
    },
    {
        user: "Bob",
        rating: 4,
        comment: "Loved the color and fabric."
    }
]
},
{
id: 1,
name: "Silk Saree",
category: "Silk",
price: 120.00,
currency: "USD",
image: AllSarees,
description: "Elegant silk saree with traditional designs.",
colors: ["Red", "Green", "Blue"],
sizes: ["Free Size"],
stock: 25,
discount: 10,
ratings: 4.5,
reviews: [
    {
        user: "Alice",
        rating: 5,
        comment: "Beautiful saree, great quality!"
    },
    {
        user: "Bob",
        rating: 4,
        comment: "Loved the color and fabric."
    }
]
},
{
id: 1,
name: "Silk Saree",
category: "Silk",
price: 120.00,
currency: "USD",
image: AllSarees,
description: "Elegant silk saree with traditional designs.",
colors: ["Red", "Green", "Blue"],
sizes: ["Free Size"],
stock: 25,
discount: 10,
ratings: 4.5,
reviews: [
    {
        user: "Alice",
        rating: 5,
        comment: "Beautiful saree, great quality!"
    },
    {
        user: "Bob",
        rating: 4,
        comment: "Loved the color and fabric."
    }
]
},
{
id: 1,
name: "Silk Saree",
category: "Silk",
price: 120.00,
currency: "USD",
image: AllSarees,
description: "Elegant silk saree with traditional designs.",
colors: ["Red", "Green", "Blue"],
sizes: ["Free Size"],
stock: 25,
discount: 10,
ratings: 4.5,
reviews: [
    {
        user: "Alice",
        rating: 5,
        comment: "Beautiful saree, great quality!"
    },
    {
        user: "Bob",
        rating: 4,
        comment: "Loved the color and fabric."
    }
]
},
{
id: 1,
name: "Silk Saree",
category: "Silk",
price: 120.00,
currency: "USD",
image: AllSarees,
description: "Elegant silk saree with traditional designs.",
colors: ["Red", "Green", "Blue"],
sizes: ["Free Size"],
stock: 25,
discount: 10,
ratings: 4.5,
reviews: [
    {
        user: "Alice",
        rating: 5,
        comment: "Beautiful saree, great quality!"
    },
    {
        user: "Bob",
        rating: 4,
        comment: "Loved the color and fabric."
    }
]
},
{
id: 1,
name: "Silk Saree",
category: "Silk",
price: 120.00,
currency: "USD",
image: AllSarees,
description: "Elegant silk saree with traditional designs.",
colors: ["Red", "Green", "Blue"],
sizes: ["Free Size"],
stock: 25,
discount: 10,
ratings: 4.5,
reviews: [
    {
        user: "Alice",
        rating: 5,
        comment: "Beautiful saree, great quality!"
    },
    {
        user: "Bob",
        rating: 4,
        comment: "Loved the color and fabric."
    }
]
},
{
id: 1,
name: "Silk Saree",
category: "Silk",
price: 120.00,
currency: "USD",
image: AllSarees,
description: "Elegant silk saree with traditional designs.",
colors: ["Red", "Green", "Blue"],
sizes: ["Free Size"],
stock: 25,
discount: 10,
ratings: 4.5,
reviews: [
    {
        user: "Alice",
        rating: 5,
        comment: "Beautiful saree, great quality!"
    },
    {
        user: "Bob",
        rating: 4,
        comment: "Loved the color and fabric."
    }
]
},
{
id: 1,
name: "Silk Saree",
category: "Silk",
price: 120.00,
currency: "USD",
image: AllSarees,
description: "Elegant silk saree with traditional designs.",
colors: ["Red", "Green", "Blue"],
sizes: ["Free Size"],
stock: 25,
discount: 10,
ratings: 4.5,
reviews: [
    {
        user: "Alice",
        rating: 5,
        comment: "Beautiful saree, great quality!"
    },
    {
        user: "Bob",
        rating: 4,
        comment: "Loved the color and fabric."
    }
]
},
{
id: 1,
name: "Silk Saree",
category: "Silk",
price: 120.00,
currency: "USD",
image: AllSarees,
description: "Elegant silk saree with traditional designs.",
colors: ["Red", "Green", "Blue"],
sizes: ["Free Size"],
stock: 25,
discount: 10,
ratings: 4.5,
reviews: [
    {
        user: "Alice",
        rating: 5,
        comment: "Beautiful saree, great quality!"
    },
    {
        user: "Bob",
        rating: 4,
        comment: "Loved the color and fabric."
    }
]
},
{
id: 1,
name: "Silk Saree",
category: "Silk",
price: 120.00,
currency: "USD",
image: AllSarees,
description: "Elegant silk saree with traditional designs.",
colors: ["Red", "Green", "Blue"],
sizes: ["Free Size"],
stock: 25,
discount: 10,
ratings: 4.5,
reviews: [
    {
        user: "Alice",
        rating: 5,
        comment: "Beautiful saree, great quality!"
    },
    {
        user: "Bob",
        rating: 4,
        comment: "Loved the color and fabric."
    }
]
},
{
id: 1,
name: "Silk Saree",
category: "Silk",
price: 120.00,
currency: "USD",
image: AllSarees,
description: "Elegant silk saree with traditional designs.",
colors: ["Red", "Green", "Blue"],
sizes: ["Free Size"],
stock: 25,
discount: 10,
ratings: 4.5,
reviews: [
    {
        user: "Alice",
        rating: 5,
        comment: "Beautiful saree, great quality!"
    },
    {
        user: "Bob",
        rating: 4,
        comment: "Loved the color and fabric."
    }
]
},
{
id: 1,
name: "Silk Saree",
category: "Silk",
price: 120.00,
currency: "USD",
image: AllSarees,
description: "Elegant silk saree with traditional designs.",
colors: ["Red", "Green", "Blue"],
sizes: ["Free Size"],
stock: 25,
discount: 10,
ratings: 4.5,
reviews: [
    {
        user: "Alice",
        rating: 5,
        comment: "Beautiful saree, great quality!"
    },
    {
        user: "Bob",
        rating: 4,
        comment: "Loved the color and fabric."
    }
]
},
{
id: 1,
name: "Silk Saree",
category: "Silk",
price: 120.00,
currency: "USD",
image: AllSarees,
description: "Elegant silk saree with traditional designs.",
colors: ["Red", "Green", "Blue"],
sizes: ["Free Size"],
stock: 25,
discount: 10,
ratings: 4.5,
reviews: [
    {
        user: "Alice",
        rating: 5,
        comment: "Beautiful saree, great quality!"
    },
    {
        user: "Bob",
        rating: 4,
        comment: "Loved the color and fabric."
    }
]
},
{
id: 1,
name: "Silk Saree",
category: "Silk",
price: 120.00,
currency: "USD",
image: AllSarees,
description: "Elegant silk saree with traditional designs.",
colors: ["Red", "Green", "Blue"],
sizes: ["Free Size"],
stock: 25,
discount: 10,
ratings: 4.5,
reviews: [
    {
        user: "Alice",
        rating: 5,
        comment: "Beautiful saree, great quality!"
    },
    {
        user: "Bob",
        rating: 4,
        comment: "Loved the color and fabric."
    }
]
},
{
id: 1,
name: "Silk Saree",
category: "Silk",
price: 120.00,
currency: "USD",
image: AllSarees,
description: "Elegant silk saree with traditional designs.",
colors: ["Red", "Green", "Blue"],
sizes: ["Free Size"],
stock: 25,
discount: 10,
ratings: 4.5,
reviews: [
    {
        user: "Alice",
        rating: 5,
        comment: "Beautiful saree, great quality!"
    },
    {
        user: "Bob",
        rating: 4,
        comment: "Loved the color and fabric."
    }
]
},
{
id: 1,
name: "Silk Saree",
category: "Silk",
price: 120.00,
currency: "USD",
image: AllSarees,
description: "Elegant silk saree with traditional designs.",
colors: ["Red", "Green", "Blue"],
sizes: ["Free Size"],
stock: 25,
discount: 10,
ratings: 4.5,
reviews: [
    {
        user: "Alice",
        rating: 5,
        comment: "Beautiful saree, great quality!"
    },
    {
        user: "Bob",
        rating: 4,
        comment: "Loved the color and fabric."
    }
]
},
{
id: 1,
name: "Silk Saree",
category: "Silk",
price: 120.00,
currency: "USD",
image: AllSarees,
description: "Elegant silk saree with traditional designs.",
colors: ["Red", "Green", "Blue"],
sizes: ["Free Size"],
stock: 25,
discount: 10,
ratings: 4.5,
reviews: [
    {
        user: "Alice",
        rating: 5,
        comment: "Beautiful saree, great quality!"
    },
    {
        user: "Bob",
        rating: 4,
        comment: "Loved the color and fabric."
    }
]
},
{
id: 1,
name: "Silk Saree",
category: "Silk",
price: 120.00,
currency: "USD",
image: AllSarees,
description: "Elegant silk saree with traditional designs.",
colors: ["Red", "Green", "Blue"],
sizes: ["Free Size"],
stock: 25,
discount: 10,
ratings: 4.5,
reviews: [
    {
        user: "Alice",
        rating: 5,
        comment: "Beautiful saree, great quality!"
    },
    {
        user: "Bob",
        rating: 4,
        comment: "Loved the color and fabric."
    }
]
},
{
id: 1,
name: "Silk Saree",
category: "Silk",
price: 120.00,
currency: "USD",
image: AllSarees,
description: "Elegant silk saree with traditional designs.",
colors: ["Red", "Green", "Blue"],
sizes: ["Free Size"],
stock: 25,
discount: 10,
ratings: 4.5,
reviews: [
    {
        user: "Alice",
        rating: 5,
        comment: "Beautiful saree, great quality!"
    },
    {
        user: "Bob",
        rating: 4,
        comment: "Loved the color and fabric."
    }
]
},
{
id: 1,
name: "Silk Saree",
category: "Silk",
price: 120.00,
currency: "USD",
image: AllSarees,
description: "Elegant silk saree with traditional designs.",
colors: ["Red", "Green", "Blue"],
sizes: ["Free Size"],
stock: 25,
discount: 10,
ratings: 4.5,
reviews: [
    {
        user: "Alice",
        rating: 5,
        comment: "Beautiful saree, great quality!"
    },
    {
        user: "Bob",
        rating: 4,
        comment: "Loved the color and fabric."
    }
]
},
{
id: 1,
name: "Silk Saree",
category: "Silk",
price: 120.00,
currency: "USD",
image: AllSarees,
description: "Elegant silk saree with traditional designs.",
colors: ["Red", "Green", "Blue"],
sizes: ["Free Size"],
stock: 25,
discount: 10,
ratings: 4.5,
reviews: [
    {
        user: "Alice",
        rating: 5,
        comment: "Beautiful saree, great quality!"
    },
    {
        user: "Bob",
        rating: 4,
        comment: "Loved the color and fabric."
    }
]
},
{
id: 1,
name: "Silk Saree",
category: "Silk",
price: 120.00,
currency: "USD",
image: AllSarees,
description: "Elegant silk saree with traditional designs.",
colors: ["Red", "Green", "Blue"],
sizes: ["Free Size"],
stock: 25,
discount: 10,
ratings: 4.5,
reviews: [
    {
        user: "Alice",
        rating: 5,
        comment: "Beautiful saree, great quality!"
    },
    {
        user: "Bob",
        rating: 4,
        comment: "Loved the color and fabric."
    }
]
},
{
id: 1,
name: "Silk Saree",
category: "Silk",
price: 120.00,
currency: "USD",
image: AllSarees,
description: "Elegant silk saree with traditional designs.",
colors: ["Red", "Green", "Blue"],
sizes: ["Free Size"],
stock: 25,
discount: 10,
ratings: 4.5,
reviews: [
    {
        user: "Alice",
        rating: 5,
        comment: "Beautiful saree, great quality!"
    },
    {
        user: "Bob",
        rating: 4,
        comment: "Loved the color and fabric."
    }
]
},
{
id: 1,
name: "Silk Saree",
category: "Silk",
price: 120.00,
currency: "USD",
image: AllSarees,
description: "Elegant silk saree with traditional designs.",
colors: ["Red", "Green", "Blue"],
sizes: ["Free Size"],
stock: 25,
discount: 10,
ratings: 4.5,
reviews: [
    {
        user: "Alice",
        rating: 5,
        comment: "Beautiful saree, great quality!"
    },
    {
        user: "Bob",
        rating: 4,
        comment: "Loved the color and fabric."
    }
]
},
{
id: 1,
name: "Silk Saree",
category: "Silk",
price: 120.00,
currency: "USD",
image: AllSarees,
description: "Elegant silk saree with traditional designs.",
colors: ["Red", "Green", "Blue"],
sizes: ["Free Size"],
stock: 25,
discount: 10,
ratings: 4.5,
reviews: [
    {
        user: "Alice",
        rating: 5,
        comment: "Beautiful saree, great quality!"
    },
    {
        user: "Bob",
        rating: 4,
        comment: "Loved the color and fabric."
    }
]
},
{
id: 1,
name: "Silk Saree",
category: "Silk",
price: 120.00,
currency: "USD",
image: AllSarees,
description: "Elegant silk saree with traditional designs.",
colors: ["Red", "Green", "Blue"],
sizes: ["Free Size"],
stock: 25,
discount: 10,
ratings: 4.5,
reviews: [
    {
        user: "Alice",
        rating: 5,
        comment: "Beautiful saree, great quality!"
    },
    {
        user: "Bob",
        rating: 4,
        comment: "Loved the color and fabric."
    }
]
}
]

const CottonClikSaree=[
    {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
    },
    {
      id: 2,
      name: "Silk Saree",
      category: "Silk",
      price: 120.00,
      currency: "USD",
      image: AllSarees,
      description: "Elegant silk saree with traditional designs.",
      colors: ["Red", "Green", "Blue"],
      sizes: ["Free Size"],
      stock: 25,
      discount: 10,
      ratings: 4.5,
      reviews: [
          {
              user: "Alice",
              rating: 5,
              comment: "Beautiful saree, great quality!"
          },
          {
              user: "Bob",
              rating: 4,
              comment: "Loved the color and fabric."
          }
      ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    }
    
    
    ]

    const CottonSaree=[
        {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
        },
        {
          id: 2,
          name: "Silk Saree",
          category: "Silk",
          price: 120.00,
          currency: "USD",
          image: AllSarees,
          description: "Elegant silk saree with traditional designs.",
          colors: ["Red", "Green", "Blue"],
          sizes: ["Free Size"],
          stock: 25,
          discount: 10,
          ratings: 4.5,
          reviews: [
              {
                  user: "Alice",
                  rating: 5,
                  comment: "Beautiful saree, great quality!"
              },
              {
                  user: "Bob",
                  rating: 4,
                  comment: "Loved the color and fabric."
              }
          ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        }
        
        
        ]

        const GeoSaree=[
            {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
            },
            {
              id: 2,
              name: "Silk Saree",
              category: "Silk",
              price: 120.00,
              currency: "USD",
              image: AllSarees,
              description: "Elegant silk saree with traditional designs.",
              colors: ["Red", "Green", "Blue"],
              sizes: ["Free Size"],
              stock: 25,
              discount: 10,
              ratings: 4.5,
              reviews: [
                  {
                      user: "Alice",
                      rating: 5,
                      comment: "Beautiful saree, great quality!"
                  },
                  {
                      user: "Bob",
                      rating: 4,
                      comment: "Loved the color and fabric."
                  }
              ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            }
            ]

            const ChiSaree=[
                {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                },
                {
                  id: 2,
                  name: "Silk Saree",
                  category: "Silk",
                  price: 120.00,
                  currency: "USD",
                  image: AllSarees,
                  description: "Elegant silk saree with traditional designs.",
                  colors: ["Red", "Green", "Blue"],
                  sizes: ["Free Size"],
                  stock: 25,
                  discount: 10,
                  ratings: 4.5,
                  reviews: [
                      {
                          user: "Alice",
                          rating: 5,
                          comment: "Beautiful saree, great quality!"
                      },
                      {
                          user: "Bob",
                          rating: 4,
                          comment: "Loved the color and fabric."
                      }
                  ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                }
                ]

                const SatSaree=[
                    {
                        id: 1,
                        name: "Silk Saree",
                        category: "Silk",
                        price: 120.00,
                        currency: "USD",
                        image: AllSarees,
                        description: "Elegant silk saree with traditional designs.",
                        colors: ["Red", "Green", "Blue"],
                        sizes: ["Free Size"],
                        stock: 25,
                        discount: 10,
                        ratings: 4.5,
                        reviews: [
                            {
                                user: "Alice",
                                rating: 5,
                                comment: "Beautiful saree, great quality!"
                            },
                            {
                                user: "Bob",
                                rating: 4,
                                comment: "Loved the color and fabric."
                            }
                        ]
                    },
                    {
                      id: 2,
                      name: "Silk Saree",
                      category: "Silk",
                      price: 120.00,
                      currency: "USD",
                      image: AllSarees,
                      description: "Elegant silk saree with traditional designs.",
                      colors: ["Red", "Green", "Blue"],
                      sizes: ["Free Size"],
                      stock: 25,
                      discount: 10,
                      ratings: 4.5,
                      reviews: [
                          {
                              user: "Alice",
                              rating: 5,
                              comment: "Beautiful saree, great quality!"
                          },
                          {
                              user: "Bob",
                              rating: 4,
                              comment: "Loved the color and fabric."
                          }
                      ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    }
                    ]

    const EmbSaree=[
        {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
        },
        {
          id: 2,
          name: "Silk Saree",
          category: "Silk",
          price: 120.00,
          currency: "USD",
          image: AllSarees,
          description: "Elegant silk saree with traditional designs.",
          colors: ["Red", "Green", "Blue"],
          sizes: ["Free Size"],
          stock: 25,
          discount: 10,
          ratings: 4.5,
          reviews: [
              {
                  user: "Alice",
                  rating: 5,
                  comment: "Beautiful saree, great quality!"
              },
              {
                  user: "Bob",
                  rating: 4,
                  comment: "Loved the color and fabric."
              }
          ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        },
        {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
        }
        ]
        
        const AllKur=[
            {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
            },
            {
              id: 2,
              name: "Silk Saree",
              category: "Silk",
              price: 120.00,
              currency: "USD",
              image: AllSarees,
              description: "Elegant silk saree with traditional designs.",
              colors: ["Red", "Green", "Blue"],
              sizes: ["Free Size"],
              stock: 25,
              discount: 10,
              ratings: 4.5,
              reviews: [
                  {
                      user: "Alice",
                      rating: 5,
                      comment: "Beautiful saree, great quality!"
                  },
                  {
                      user: "Bob",
                      rating: 4,
                      comment: "Loved the color and fabric."
                  }
              ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            },
            {
            id: 1,
            name: "Silk Saree",
            category: "Silk",
            price: 120.00,
            currency: "USD",
            image: AllSarees,
            description: "Elegant silk saree with traditional designs.",
            colors: ["Red", "Green", "Blue"],
            sizes: ["Free Size"],
            stock: 25,
            discount: 10,
            ratings: 4.5,
            reviews: [
                {
                    user: "Alice",
                    rating: 5,
                    comment: "Beautiful saree, great quality!"
                },
                {
                    user: "Bob",
                    rating: 4,
                    comment: "Loved the color and fabric."
                }
            ]
            }
            ]

            const AnakaliKur=[
                {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                },
                {
                  id: 2,
                  name: "Silk Saree",
                  category: "Silk",
                  price: 120.00,
                  currency: "USD",
                  image: AllSarees,
                  description: "Elegant silk saree with traditional designs.",
                  colors: ["Red", "Green", "Blue"],
                  sizes: ["Free Size"],
                  stock: 25,
                  discount: 10,
                  ratings: 4.5,
                  reviews: [
                      {
                          user: "Alice",
                          rating: 5,
                          comment: "Beautiful saree, great quality!"
                      },
                      {
                          user: "Bob",
                          rating: 4,
                          comment: "Loved the color and fabric."
                      }
                  ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                },
                {
                id: 1,
                name: "Silk Saree",
                category: "Silk",
                price: 120.00,
                currency: "USD",
                image: AllSarees,
                description: "Elegant silk saree with traditional designs.",
                colors: ["Red", "Green", "Blue"],
                sizes: ["Free Size"],
                stock: 25,
                discount: 10,
                ratings: 4.5,
                reviews: [
                    {
                        user: "Alice",
                        rating: 5,
                        comment: "Beautiful saree, great quality!"
                    },
                    {
                        user: "Bob",
                        rating: 4,
                        comment: "Loved the color and fabric."
                    }
                ]
                }
                ]

                const RayKur=[
                    {
                        id: 1,
                        name: "Silk Saree",
                        category: "Silk",
                        price: 120.00,
                        currency: "USD",
                        image: AllSarees,
                        description: "Elegant silk saree with traditional designs.",
                        colors: ["Red", "Green", "Blue"],
                        sizes: ["Free Size"],
                        stock: 25,
                        discount: 10,
                        ratings: 4.5,
                        reviews: [
                            {
                                user: "Alice",
                                rating: 5,
                                comment: "Beautiful saree, great quality!"
                            },
                            {
                                user: "Bob",
                                rating: 4,
                                comment: "Loved the color and fabric."
                            }
                        ]
                    },
                    {
                      id: 2,
                      name: "Silk Saree",
                      category: "Silk",
                      price: 120.00,
                      currency: "USD",
                      image: AllSarees,
                      description: "Elegant silk saree with traditional designs.",
                      colors: ["Red", "Green", "Blue"],
                      sizes: ["Free Size"],
                      stock: 25,
                      discount: 10,
                      ratings: 4.5,
                      reviews: [
                          {
                              user: "Alice",
                              rating: 5,
                              comment: "Beautiful saree, great quality!"
                          },
                          {
                              user: "Bob",
                              rating: 4,
                              comment: "Loved the color and fabric."
                          }
                      ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    },
                    {
                    id: 1,
                    name: "Silk Saree",
                    category: "Silk",
                    price: 120.00,
                    currency: "USD",
                    image: AllSarees,
                    description: "Elegant silk saree with traditional designs.",
                    colors: ["Red", "Green", "Blue"],
                    sizes: ["Free Size"],
                    stock: 25,
                    discount: 10,
                    ratings: 4.5,
                    reviews: [
                        {
                            user: "Alice",
                            rating: 5,
                            comment: "Beautiful saree, great quality!"
                        },
                        {
                            user: "Bob",
                            rating: 4,
                            comment: "Loved the color and fabric."
                        }
                    ]
                    }
                    ]

                    const CottKur=[
                        {
                            id: 1,
                            name: "Silk Saree",
                            category: "Silk",
                            price: 120.00,
                            currency: "USD",
                            image: AllSarees,
                            description: "Elegant silk saree with traditional designs.",
                            colors: ["Red", "Green", "Blue"],
                            sizes: ["Free Size"],
                            stock: 25,
                            discount: 10,
                            ratings: 4.5,
                            reviews: [
                                {
                                    user: "Alice",
                                    rating: 5,
                                    comment: "Beautiful saree, great quality!"
                                },
                                {
                                    user: "Bob",
                                    rating: 4,
                                    comment: "Loved the color and fabric."
                                }
                            ]
                        },
                        {
                          id: 2,
                          name: "Silk Saree",
                          category: "Silk",
                          price: 120.00,
                          currency: "USD",
                          image: AllSarees,
                          description: "Elegant silk saree with traditional designs.",
                          colors: ["Red", "Green", "Blue"],
                          sizes: ["Free Size"],
                          stock: 25,
                          discount: 10,
                          ratings: 4.5,
                          reviews: [
                              {
                                  user: "Alice",
                                  rating: 5,
                                  comment: "Beautiful saree, great quality!"
                              },
                              {
                                  user: "Bob",
                                  rating: 4,
                                  comment: "Loved the color and fabric."
                              }
                          ]
                        },
                        {
                        id: 1,
                        name: "Silk Saree",
                        category: "Silk",
                        price: 120.00,
                        currency: "USD",
                        image: AllSarees,
                        description: "Elegant silk saree with traditional designs.",
                        colors: ["Red", "Green", "Blue"],
                        sizes: ["Free Size"],
                        stock: 25,
                        discount: 10,
                        ratings: 4.5,
                        reviews: [
                            {
                                user: "Alice",
                                rating: 5,
                                comment: "Beautiful saree, great quality!"
                            },
                            {
                                user: "Bob",
                                rating: 4,
                                comment: "Loved the color and fabric."
                            }
                        ]
                        },
                        {
                        id: 1,
                        name: "Silk Saree",
                        category: "Silk",
                        price: 120.00,
                        currency: "USD",
                        image: AllSarees,
                        description: "Elegant silk saree with traditional designs.",
                        colors: ["Red", "Green", "Blue"],
                        sizes: ["Free Size"],
                        stock: 25,
                        discount: 10,
                        ratings: 4.5,
                        reviews: [
                            {
                                user: "Alice",
                                rating: 5,
                                comment: "Beautiful saree, great quality!"
                            },
                            {
                                user: "Bob",
                                rating: 4,
                                comment: "Loved the color and fabric."
                            }
                        ]
                        },
                        {
                        id: 1,
                        name: "Silk Saree",
                        category: "Silk",
                        price: 120.00,
                        currency: "USD",
                        image: AllSarees,
                        description: "Elegant silk saree with traditional designs.",
                        colors: ["Red", "Green", "Blue"],
                        sizes: ["Free Size"],
                        stock: 25,
                        discount: 10,
                        ratings: 4.5,
                        reviews: [
                            {
                                user: "Alice",
                                rating: 5,
                                comment: "Beautiful saree, great quality!"
                            },
                            {
                                user: "Bob",
                                rating: 4,
                                comment: "Loved the color and fabric."
                            }
                        ]
                        },
                        {
                        id: 1,
                        name: "Silk Saree",
                        category: "Silk",
                        price: 120.00,
                        currency: "USD",
                        image: AllSarees,
                        description: "Elegant silk saree with traditional designs.",
                        colors: ["Red", "Green", "Blue"],
                        sizes: ["Free Size"],
                        stock: 25,
                        discount: 10,
                        ratings: 4.5,
                        reviews: [
                            {
                                user: "Alice",
                                rating: 5,
                                comment: "Beautiful saree, great quality!"
                            },
                            {
                                user: "Bob",
                                rating: 4,
                                comment: "Loved the color and fabric."
                            }
                        ]
                        },
                        {
                        id: 1,
                        name: "Silk Saree",
                        category: "Silk",
                        price: 120.00,
                        currency: "USD",
                        image: AllSarees,
                        description: "Elegant silk saree with traditional designs.",
                        colors: ["Red", "Green", "Blue"],
                        sizes: ["Free Size"],
                        stock: 25,
                        discount: 10,
                        ratings: 4.5,
                        reviews: [
                            {
                                user: "Alice",
                                rating: 5,
                                comment: "Beautiful saree, great quality!"
                            },
                            {
                                user: "Bob",
                                rating: 4,
                                comment: "Loved the color and fabric."
                            }
                        ]
                        },
                        {
                        id: 1,
                        name: "Silk Saree",
                        category: "Silk",
                        price: 120.00,
                        currency: "USD",
                        image: AllSarees,
                        description: "Elegant silk saree with traditional designs.",
                        colors: ["Red", "Green", "Blue"],
                        sizes: ["Free Size"],
                        stock: 25,
                        discount: 10,
                        ratings: 4.5,
                        reviews: [
                            {
                                user: "Alice",
                                rating: 5,
                                comment: "Beautiful saree, great quality!"
                            },
                            {
                                user: "Bob",
                                rating: 4,
                                comment: "Loved the color and fabric."
                            }
                        ]
                        },
                        {
                        id: 1,
                        name: "Silk Saree",
                        category: "Silk",
                        price: 120.00,
                        currency: "USD",
                        image: AllSarees,
                        description: "Elegant silk saree with traditional designs.",
                        colors: ["Red", "Green", "Blue"],
                        sizes: ["Free Size"],
                        stock: 25,
                        discount: 10,
                        ratings: 4.5,
                        reviews: [
                            {
                                user: "Alice",
                                rating: 5,
                                comment: "Beautiful saree, great quality!"
                            },
                            {
                                user: "Bob",
                                rating: 4,
                                comment: "Loved the color and fabric."
                            }
                        ]
                        },
                        {
                        id: 1,
                        name: "Silk Saree",
                        category: "Silk",
                        price: 120.00,
                        currency: "USD",
                        image: AllSarees,
                        description: "Elegant silk saree with traditional designs.",
                        colors: ["Red", "Green", "Blue"],
                        sizes: ["Free Size"],
                        stock: 25,
                        discount: 10,
                        ratings: 4.5,
                        reviews: [
                            {
                                user: "Alice",
                                rating: 5,
                                comment: "Beautiful saree, great quality!"
                            },
                            {
                                user: "Bob",
                                rating: 4,
                                comment: "Loved the color and fabric."
                            }
                        ]
                        },
                        {
                        id: 1,
                        name: "Silk Saree",
                        category: "Silk",
                        price: 120.00,
                        currency: "USD",
                        image: AllSarees,
                        description: "Elegant silk saree with traditional designs.",
                        colors: ["Red", "Green", "Blue"],
                        sizes: ["Free Size"],
                        stock: 25,
                        discount: 10,
                        ratings: 4.5,
                        reviews: [
                            {
                                user: "Alice",
                                rating: 5,
                                comment: "Beautiful saree, great quality!"
                            },
                            {
                                user: "Bob",
                                rating: 4,
                                comment: "Loved the color and fabric."
                            }
                        ]
                        },
                        {
                        id: 1,
                        name: "Silk Saree",
                        category: "Silk",
                        price: 120.00,
                        currency: "USD",
                        image: AllSarees,
                        description: "Elegant silk saree with traditional designs.",
                        colors: ["Red", "Green", "Blue"],
                        sizes: ["Free Size"],
                        stock: 25,
                        discount: 10,
                        ratings: 4.5,
                        reviews: [
                            {
                                user: "Alice",
                                rating: 5,
                                comment: "Beautiful saree, great quality!"
                            },
                            {
                                user: "Bob",
                                rating: 4,
                                comment: "Loved the color and fabric."
                            }
                        ]
                        },
                        {
                        id: 1,
                        name: "Silk Saree",
                        category: "Silk",
                        price: 120.00,
                        currency: "USD",
                        image: AllSarees,
                        description: "Elegant silk saree with traditional designs.",
                        colors: ["Red", "Green", "Blue"],
                        sizes: ["Free Size"],
                        stock: 25,
                        discount: 10,
                        ratings: 4.5,
                        reviews: [
                            {
                                user: "Alice",
                                rating: 5,
                                comment: "Beautiful saree, great quality!"
                            },
                            {
                                user: "Bob",
                                rating: 4,
                                comment: "Loved the color and fabric."
                            }
                        ]
                        },
                        {
                        id: 1,
                        name: "Silk Saree",
                        category: "Silk",
                        price: 120.00,
                        currency: "USD",
                        image: AllSarees,
                        description: "Elegant silk saree with traditional designs.",
                        colors: ["Red", "Green", "Blue"],
                        sizes: ["Free Size"],
                        stock: 25,
                        discount: 10,
                        ratings: 4.5,
                        reviews: [
                            {
                                user: "Alice",
                                rating: 5,
                                comment: "Beautiful saree, great quality!"
                            },
                            {
                                user: "Bob",
                                rating: 4,
                                comment: "Loved the color and fabric."
                            }
                        ]
                        },
                        {
                        id: 1,
                        name: "Silk Saree",
                        category: "Silk",
                        price: 120.00,
                        currency: "USD",
                        image: AllSarees,
                        description: "Elegant silk saree with traditional designs.",
                        colors: ["Red", "Green", "Blue"],
                        sizes: ["Free Size"],
                        stock: 25,
                        discount: 10,
                        ratings: 4.5,
                        reviews: [
                            {
                                user: "Alice",
                                rating: 5,
                                comment: "Beautiful saree, great quality!"
                            },
                            {
                                user: "Bob",
                                rating: 4,
                                comment: "Loved the color and fabric."
                            }
                        ]
                        },
                        {
                        id: 1,
                        name: "Silk Saree",
                        category: "Silk",
                        price: 120.00,
                        currency: "USD",
                        image: AllSarees,
                        description: "Elegant silk saree with traditional designs.",
                        colors: ["Red", "Green", "Blue"],
                        sizes: ["Free Size"],
                        stock: 25,
                        discount: 10,
                        ratings: 4.5,
                        reviews: [
                            {
                                user: "Alice",
                                rating: 5,
                                comment: "Beautiful saree, great quality!"
                            },
                            {
                                user: "Bob",
                                rating: 4,
                                comment: "Loved the color and fabric."
                            }
                        ]
                        },
                        {
                        id: 1,
                        name: "Silk Saree",
                        category: "Silk",
                        price: 120.00,
                        currency: "USD",
                        image: AllSarees,
                        description: "Elegant silk saree with traditional designs.",
                        colors: ["Red", "Green", "Blue"],
                        sizes: ["Free Size"],
                        stock: 25,
                        discount: 10,
                        ratings: 4.5,
                        reviews: [
                            {
                                user: "Alice",
                                rating: 5,
                                comment: "Beautiful saree, great quality!"
                            },
                            {
                                user: "Bob",
                                rating: 4,
                                comment: "Loved the color and fabric."
                            }
                        ]
                        },
                        {
                        id: 1,
                        name: "Silk Saree",
                        category: "Silk",
                        price: 120.00,
                        currency: "USD",
                        image: AllSarees,
                        description: "Elegant silk saree with traditional designs.",
                        colors: ["Red", "Green", "Blue"],
                        sizes: ["Free Size"],
                        stock: 25,
                        discount: 10,
                        ratings: 4.5,
                        reviews: [
                            {
                                user: "Alice",
                                rating: 5,
                                comment: "Beautiful saree, great quality!"
                            },
                            {
                                user: "Bob",
                                rating: 4,
                                comment: "Loved the color and fabric."
                            }
                        ]
                        },
                        {
                        id: 1,
                        name: "Silk Saree",
                        category: "Silk",
                        price: 120.00,
                        currency: "USD",
                        image: AllSarees,
                        description: "Elegant silk saree with traditional designs.",
                        colors: ["Red", "Green", "Blue"],
                        sizes: ["Free Size"],
                        stock: 25,
                        discount: 10,
                        ratings: 4.5,
                        reviews: [
                            {
                                user: "Alice",
                                rating: 5,
                                comment: "Beautiful saree, great quality!"
                            },
                            {
                                user: "Bob",
                                rating: 4,
                                comment: "Loved the color and fabric."
                            }
                        ]
                        },
                        {
                        id: 1,
                        name: "Silk Saree",
                        category: "Silk",
                        price: 120.00,
                        currency: "USD",
                        image: AllSarees,
                        description: "Elegant silk saree with traditional designs.",
                        colors: ["Red", "Green", "Blue"],
                        sizes: ["Free Size"],
                        stock: 25,
                        discount: 10,
                        ratings: 4.5,
                        reviews: [
                            {
                                user: "Alice",
                                rating: 5,
                                comment: "Beautiful saree, great quality!"
                            },
                            {
                                user: "Bob",
                                rating: 4,
                                comment: "Loved the color and fabric."
                            }
                        ]
                        },
                        {
                        id: 1,
                        name: "Silk Saree",
                        category: "Silk",
                        price: 120.00,
                        currency: "USD",
                        image: AllSarees,
                        description: "Elegant silk saree with traditional designs.",
                        colors: ["Red", "Green", "Blue"],
                        sizes: ["Free Size"],
                        stock: 25,
                        discount: 10,
                        ratings: 4.5,
                        reviews: [
                            {
                                user: "Alice",
                                rating: 5,
                                comment: "Beautiful saree, great quality!"
                            },
                            {
                                user: "Bob",
                                rating: 4,
                                comment: "Loved the color and fabric."
                            }
                        ]
                        },
                        {
                        id: 1,
                        name: "Silk Saree",
                        category: "Silk",
                        price: 120.00,
                        currency: "USD",
                        image: AllSarees,
                        description: "Elegant silk saree with traditional designs.",
                        colors: ["Red", "Green", "Blue"],
                        sizes: ["Free Size"],
                        stock: 25,
                        discount: 10,
                        ratings: 4.5,
                        reviews: [
                            {
                                user: "Alice",
                                rating: 5,
                                comment: "Beautiful saree, great quality!"
                            },
                            {
                                user: "Bob",
                                rating: 4,
                                comment: "Loved the color and fabric."
                            }
                        ]
                        },
                        {
                        id: 1,
                        name: "Silk Saree",
                        category: "Silk",
                        price: 120.00,
                        currency: "USD",
                        image: AllSarees,
                        description: "Elegant silk saree with traditional designs.",
                        colors: ["Red", "Green", "Blue"],
                        sizes: ["Free Size"],
                        stock: 25,
                        discount: 10,
                        ratings: 4.5,
                        reviews: [
                            {
                                user: "Alice",
                                rating: 5,
                                comment: "Beautiful saree, great quality!"
                            },
                            {
                                user: "Bob",
                                rating: 4,
                                comment: "Loved the color and fabric."
                            }
                        ]
                        },
                        {
                        id: 1,
                        name: "Silk Saree",
                        category: "Silk",
                        price: 120.00,
                        currency: "USD",
                        image: AllSarees,
                        description: "Elegant silk saree with traditional designs.",
                        colors: ["Red", "Green", "Blue"],
                        sizes: ["Free Size"],
                        stock: 25,
                        discount: 10,
                        ratings: 4.5,
                        reviews: [
                            {
                                user: "Alice",
                                rating: 5,
                                comment: "Beautiful saree, great quality!"
                            },
                            {
                                user: "Bob",
                                rating: 4,
                                comment: "Loved the color and fabric."
                            }
                        ]
                        },
                        {
                        id: 1,
                        name: "Silk Saree",
                        category: "Silk",
                        price: 120.00,
                        currency: "USD",
                        image: AllSarees,
                        description: "Elegant silk saree with traditional designs.",
                        colors: ["Red", "Green", "Blue"],
                        sizes: ["Free Size"],
                        stock: 25,
                        discount: 10,
                        ratings: 4.5,
                        reviews: [
                            {
                                user: "Alice",
                                rating: 5,
                                comment: "Beautiful saree, great quality!"
                            },
                            {
                                user: "Bob",
                                rating: 4,
                                comment: "Loved the color and fabric."
                            }
                        ]
                        },
                        {
                        id: 1,
                        name: "Silk Saree",
                        category: "Silk",
                        price: 120.00,
                        currency: "USD",
                        image: AllSarees,
                        description: "Elegant silk saree with traditional designs.",
                        colors: ["Red", "Green", "Blue"],
                        sizes: ["Free Size"],
                        stock: 25,
                        discount: 10,
                        ratings: 4.5,
                        reviews: [
                            {
                                user: "Alice",
                                rating: 5,
                                comment: "Beautiful saree, great quality!"
                            },
                            {
                                user: "Bob",
                                rating: 4,
                                comment: "Loved the color and fabric."
                            }
                        ]
                        },
                        {
                        id: 1,
                        name: "Silk Saree",
                        category: "Silk",
                        price: 120.00,
                        currency: "USD",
                        image: AllSarees,
                        description: "Elegant silk saree with traditional designs.",
                        colors: ["Red", "Green", "Blue"],
                        sizes: ["Free Size"],
                        stock: 25,
                        discount: 10,
                        ratings: 4.5,
                        reviews: [
                            {
                                user: "Alice",
                                rating: 5,
                                comment: "Beautiful saree, great quality!"
                            },
                            {
                                user: "Bob",
                                rating: 4,
                                comment: "Loved the color and fabric."
                            }
                        ]
                        },
                        {
                        id: 1,
                        name: "Silk Saree",
                        category: "Silk",
                        price: 120.00,
                        currency: "USD",
                        image: AllSarees,
                        description: "Elegant silk saree with traditional designs.",
                        colors: ["Red", "Green", "Blue"],
                        sizes: ["Free Size"],
                        stock: 25,
                        discount: 10,
                        ratings: 4.5,
                        reviews: [
                            {
                                user: "Alice",
                                rating: 5,
                                comment: "Beautiful saree, great quality!"
                            },
                            {
                                user: "Bob",
                                rating: 4,
                                comment: "Loved the color and fabric."
                            }
                        ]
                        },
                        {
                        id: 1,
                        name: "Silk Saree",
                        category: "Silk",
                        price: 120.00,
                        currency: "USD",
                        image: AllSarees,
                        description: "Elegant silk saree with traditional designs.",
                        colors: ["Red", "Green", "Blue"],
                        sizes: ["Free Size"],
                        stock: 25,
                        discount: 10,
                        ratings: 4.5,
                        reviews: [
                            {
                                user: "Alice",
                                rating: 5,
                                comment: "Beautiful saree, great quality!"
                            },
                            {
                                user: "Bob",
                                rating: 4,
                                comment: "Loved the color and fabric."
                            }
                        ]
                        },
                        {
                        id: 1,
                        name: "Silk Saree",
                        category: "Silk",
                        price: 120.00,
                        currency: "USD",
                        image: AllSarees,
                        description: "Elegant silk saree with traditional designs.",
                        colors: ["Red", "Green", "Blue"],
                        sizes: ["Free Size"],
                        stock: 25,
                        discount: 10,
                        ratings: 4.5,
                        reviews: [
                            {
                                user: "Alice",
                                rating: 5,
                                comment: "Beautiful saree, great quality!"
                            },
                            {
                                user: "Bob",
                                rating: 4,
                                comment: "Loved the color and fabric."
                            }
                        ]
                        }
                        ]

                        const EnbKur=[
                            {
                                id: 1,
                                name: "Silk Saree",
                                category: "Silk",
                                price: 120.00,
                                currency: "USD",
                                image: AllSarees,
                                description: "Elegant silk saree with traditional designs.",
                                colors: ["Red", "Green", "Blue"],
                                sizes: ["Free Size"],
                                stock: 25,
                                discount: 10,
                                ratings: 4.5,
                                reviews: [
                                    {
                                        user: "Alice",
                                        rating: 5,
                                        comment: "Beautiful saree, great quality!"
                                    },
                                    {
                                        user: "Bob",
                                        rating: 4,
                                        comment: "Loved the color and fabric."
                                    }
                                ]
                            },
                            {
                              id: 2,
                              name: "Silk Saree",
                              category: "Silk",
                              price: 120.00,
                              currency: "USD",
                              image: AllSarees,
                              description: "Elegant silk saree with traditional designs.",
                              colors: ["Red", "Green", "Blue"],
                              sizes: ["Free Size"],
                              stock: 25,
                              discount: 10,
                              ratings: 4.5,
                              reviews: [
                                  {
                                      user: "Alice",
                                      rating: 5,
                                      comment: "Beautiful saree, great quality!"
                                  },
                                  {
                                      user: "Bob",
                                      rating: 4,
                                      comment: "Loved the color and fabric."
                                  }
                              ]
                            },
                            {
                            id: 1,
                            name: "Silk Saree",
                            category: "Silk",
                            price: 120.00,
                            currency: "USD",
                            image: AllSarees,
                            description: "Elegant silk saree with traditional designs.",
                            colors: ["Red", "Green", "Blue"],
                            sizes: ["Free Size"],
                            stock: 25,
                            discount: 10,
                            ratings: 4.5,
                            reviews: [
                                {
                                    user: "Alice",
                                    rating: 5,
                                    comment: "Beautiful saree, great quality!"
                                },
                                {
                                    user: "Bob",
                                    rating: 4,
                                    comment: "Loved the color and fabric."
                                }
                            ]
                            },
                            {
                            id: 1,
                            name: "Silk Saree",
                            category: "Silk",
                            price: 120.00,
                            currency: "USD",
                            image: AllSarees,
                            description: "Elegant silk saree with traditional designs.",
                            colors: ["Red", "Green", "Blue"],
                            sizes: ["Free Size"],
                            stock: 25,
                            discount: 10,
                            ratings: 4.5,
                            reviews: [
                                {
                                    user: "Alice",
                                    rating: 5,
                                    comment: "Beautiful saree, great quality!"
                                },
                                {
                                    user: "Bob",
                                    rating: 4,
                                    comment: "Loved the color and fabric."
                                }
                            ]
                            },
                            {
                            id: 1,
                            name: "Silk Saree",
                            category: "Silk",
                            price: 120.00,
                            currency: "USD",
                            image: AllSarees,
                            description: "Elegant silk saree with traditional designs.",
                            colors: ["Red", "Green", "Blue"],
                            sizes: ["Free Size"],
                            stock: 25,
                            discount: 10,
                            ratings: 4.5,
                            reviews: [
                                {
                                    user: "Alice",
                                    rating: 5,
                                    comment: "Beautiful saree, great quality!"
                                },
                                {
                                    user: "Bob",
                                    rating: 4,
                                    comment: "Loved the color and fabric."
                                }
                            ]
                            },
                            {
                            id: 1,
                            name: "Silk Saree",
                            category: "Silk",
                            price: 120.00,
                            currency: "USD",
                            image: AllSarees,
                            description: "Elegant silk saree with traditional designs.",
                            colors: ["Red", "Green", "Blue"],
                            sizes: ["Free Size"],
                            stock: 25,
                            discount: 10,
                            ratings: 4.5,
                            reviews: [
                                {
                                    user: "Alice",
                                    rating: 5,
                                    comment: "Beautiful saree, great quality!"
                                },
                                {
                                    user: "Bob",
                                    rating: 4,
                                    comment: "Loved the color and fabric."
                                }
                            ]
                            },
                            {
                            id: 1,
                            name: "Silk Saree",
                            category: "Silk",
                            price: 120.00,
                            currency: "USD",
                            image: AllSarees,
                            description: "Elegant silk saree with traditional designs.",
                            colors: ["Red", "Green", "Blue"],
                            sizes: ["Free Size"],
                            stock: 25,
                            discount: 10,
                            ratings: 4.5,
                            reviews: [
                                {
                                    user: "Alice",
                                    rating: 5,
                                    comment: "Beautiful saree, great quality!"
                                },
                                {
                                    user: "Bob",
                                    rating: 4,
                                    comment: "Loved the color and fabric."
                                }
                            ]
                            },
                            {
                            id: 1,
                            name: "Silk Saree",
                            category: "Silk",
                            price: 120.00,
                            currency: "USD",
                            image: AllSarees,
                            description: "Elegant silk saree with traditional designs.",
                            colors: ["Red", "Green", "Blue"],
                            sizes: ["Free Size"],
                            stock: 25,
                            discount: 10,
                            ratings: 4.5,
                            reviews: [
                                {
                                    user: "Alice",
                                    rating: 5,
                                    comment: "Beautiful saree, great quality!"
                                },
                                {
                                    user: "Bob",
                                    rating: 4,
                                    comment: "Loved the color and fabric."
                                }
                            ]
                            },
                            {
                            id: 1,
                            name: "Silk Saree",
                            category: "Silk",
                            price: 120.00,
                            currency: "USD",
                            image: AllSarees,
                            description: "Elegant silk saree with traditional designs.",
                            colors: ["Red", "Green", "Blue"],
                            sizes: ["Free Size"],
                            stock: 25,
                            discount: 10,
                            ratings: 4.5,
                            reviews: [
                                {
                                    user: "Alice",
                                    rating: 5,
                                    comment: "Beautiful saree, great quality!"
                                },
                                {
                                    user: "Bob",
                                    rating: 4,
                                    comment: "Loved the color and fabric."
                                }
                            ]
                            },
                            {
                            id: 1,
                            name: "Silk Saree",
                            category: "Silk",
                            price: 120.00,
                            currency: "USD",
                            image: AllSarees,
                            description: "Elegant silk saree with traditional designs.",
                            colors: ["Red", "Green", "Blue"],
                            sizes: ["Free Size"],
                            stock: 25,
                            discount: 10,
                            ratings: 4.5,
                            reviews: [
                                {
                                    user: "Alice",
                                    rating: 5,
                                    comment: "Beautiful saree, great quality!"
                                },
                                {
                                    user: "Bob",
                                    rating: 4,
                                    comment: "Loved the color and fabric."
                                }
                            ]
                            },
                            {
                            id: 1,
                            name: "Silk Saree",
                            category: "Silk",
                            price: 120.00,
                            currency: "USD",
                            image: AllSarees,
                            description: "Elegant silk saree with traditional designs.",
                            colors: ["Red", "Green", "Blue"],
                            sizes: ["Free Size"],
                            stock: 25,
                            discount: 10,
                            ratings: 4.5,
                            reviews: [
                                {
                                    user: "Alice",
                                    rating: 5,
                                    comment: "Beautiful saree, great quality!"
                                },
                                {
                                    user: "Bob",
                                    rating: 4,
                                    comment: "Loved the color and fabric."
                                }
                            ]
                            },
                            {
                            id: 1,
                            name: "Silk Saree",
                            category: "Silk",
                            price: 120.00,
                            currency: "USD",
                            image: AllSarees,
                            description: "Elegant silk saree with traditional designs.",
                            colors: ["Red", "Green", "Blue"],
                            sizes: ["Free Size"],
                            stock: 25,
                            discount: 10,
                            ratings: 4.5,
                            reviews: [
                                {
                                    user: "Alice",
                                    rating: 5,
                                    comment: "Beautiful saree, great quality!"
                                },
                                {
                                    user: "Bob",
                                    rating: 4,
                                    comment: "Loved the color and fabric."
                                }
                            ]
                            },
                            {
                            id: 1,
                            name: "Silk Saree",
                            category: "Silk",
                            price: 120.00,
                            currency: "USD",
                            image: AllSarees,
                            description: "Elegant silk saree with traditional designs.",
                            colors: ["Red", "Green", "Blue"],
                            sizes: ["Free Size"],
                            stock: 25,
                            discount: 10,
                            ratings: 4.5,
                            reviews: [
                                {
                                    user: "Alice",
                                    rating: 5,
                                    comment: "Beautiful saree, great quality!"
                                },
                                {
                                    user: "Bob",
                                    rating: 4,
                                    comment: "Loved the color and fabric."
                                }
                            ]
                            },
                            {
                            id: 1,
                            name: "Silk Saree",
                            category: "Silk",
                            price: 120.00,
                            currency: "USD",
                            image: AllSarees,
                            description: "Elegant silk saree with traditional designs.",
                            colors: ["Red", "Green", "Blue"],
                            sizes: ["Free Size"],
                            stock: 25,
                            discount: 10,
                            ratings: 4.5,
                            reviews: [
                                {
                                    user: "Alice",
                                    rating: 5,
                                    comment: "Beautiful saree, great quality!"
                                },
                                {
                                    user: "Bob",
                                    rating: 4,
                                    comment: "Loved the color and fabric."
                                }
                            ]
                            },
                            {
                            id: 1,
                            name: "Silk Saree",
                            category: "Silk",
                            price: 120.00,
                            currency: "USD",
                            image: AllSarees,
                            description: "Elegant silk saree with traditional designs.",
                            colors: ["Red", "Green", "Blue"],
                            sizes: ["Free Size"],
                            stock: 25,
                            discount: 10,
                            ratings: 4.5,
                            reviews: [
                                {
                                    user: "Alice",
                                    rating: 5,
                                    comment: "Beautiful saree, great quality!"
                                },
                                {
                                    user: "Bob",
                                    rating: 4,
                                    comment: "Loved the color and fabric."
                                }
                            ]
                            },
                            {
                            id: 1,
                            name: "Silk Saree",
                            category: "Silk",
                            price: 120.00,
                            currency: "USD",
                            image: AllSarees,
                            description: "Elegant silk saree with traditional designs.",
                            colors: ["Red", "Green", "Blue"],
                            sizes: ["Free Size"],
                            stock: 25,
                            discount: 10,
                            ratings: 4.5,
                            reviews: [
                                {
                                    user: "Alice",
                                    rating: 5,
                                    comment: "Beautiful saree, great quality!"
                                },
                                {
                                    user: "Bob",
                                    rating: 4,
                                    comment: "Loved the color and fabric."
                                }
                            ]
                            },
                            {
                            id: 1,
                            name: "Silk Saree",
                            category: "Silk",
                            price: 120.00,
                            currency: "USD",
                            image: AllSarees,
                            description: "Elegant silk saree with traditional designs.",
                            colors: ["Red", "Green", "Blue"],
                            sizes: ["Free Size"],
                            stock: 25,
                            discount: 10,
                            ratings: 4.5,
                            reviews: [
                                {
                                    user: "Alice",
                                    rating: 5,
                                    comment: "Beautiful saree, great quality!"
                                },
                                {
                                    user: "Bob",
                                    rating: 4,
                                    comment: "Loved the color and fabric."
                                }
                            ]
                            },
                            {
                            id: 1,
                            name: "Silk Saree",
                            category: "Silk",
                            price: 120.00,
                            currency: "USD",
                            image: AllSarees,
                            description: "Elegant silk saree with traditional designs.",
                            colors: ["Red", "Green", "Blue"],
                            sizes: ["Free Size"],
                            stock: 25,
                            discount: 10,
                            ratings: 4.5,
                            reviews: [
                                {
                                    user: "Alice",
                                    rating: 5,
                                    comment: "Beautiful saree, great quality!"
                                },
                                {
                                    user: "Bob",
                                    rating: 4,
                                    comment: "Loved the color and fabric."
                                }
                            ]
                            },
                            {
                            id: 1,
                            name: "Silk Saree",
                            category: "Silk",
                            price: 120.00,
                            currency: "USD",
                            image: AllSarees,
                            description: "Elegant silk saree with traditional designs.",
                            colors: ["Red", "Green", "Blue"],
                            sizes: ["Free Size"],
                            stock: 25,
                            discount: 10,
                            ratings: 4.5,
                            reviews: [
                                {
                                    user: "Alice",
                                    rating: 5,
                                    comment: "Beautiful saree, great quality!"
                                },
                                {
                                    user: "Bob",
                                    rating: 4,
                                    comment: "Loved the color and fabric."
                                }
                            ]
                            },
                            {
                            id: 1,
                            name: "Silk Saree",
                            category: "Silk",
                            price: 120.00,
                            currency: "USD",
                            image: AllSarees,
                            description: "Elegant silk saree with traditional designs.",
                            colors: ["Red", "Green", "Blue"],
                            sizes: ["Free Size"],
                            stock: 25,
                            discount: 10,
                            ratings: 4.5,
                            reviews: [
                                {
                                    user: "Alice",
                                    rating: 5,
                                    comment: "Beautiful saree, great quality!"
                                },
                                {
                                    user: "Bob",
                                    rating: 4,
                                    comment: "Loved the color and fabric."
                                }
                            ]
                            },
                            {
                            id: 1,
                            name: "Silk Saree",
                            category: "Silk",
                            price: 120.00,
                            currency: "USD",
                            image: AllSarees,
                            description: "Elegant silk saree with traditional designs.",
                            colors: ["Red", "Green", "Blue"],
                            sizes: ["Free Size"],
                            stock: 25,
                            discount: 10,
                            ratings: 4.5,
                            reviews: [
                                {
                                    user: "Alice",
                                    rating: 5,
                                    comment: "Beautiful saree, great quality!"
                                },
                                {
                                    user: "Bob",
                                    rating: 4,
                                    comment: "Loved the color and fabric."
                                }
                            ]
                            },
                            {
                            id: 1,
                            name: "Silk Saree",
                            category: "Silk",
                            price: 120.00,
                            currency: "USD",
                            image: AllSarees,
                            description: "Elegant silk saree with traditional designs.",
                            colors: ["Red", "Green", "Blue"],
                            sizes: ["Free Size"],
                            stock: 25,
                            discount: 10,
                            ratings: 4.5,
                            reviews: [
                                {
                                    user: "Alice",
                                    rating: 5,
                                    comment: "Beautiful saree, great quality!"
                                },
                                {
                                    user: "Bob",
                                    rating: 4,
                                    comment: "Loved the color and fabric."
                                }
                            ]
                            },
                            {
                            id: 1,
                            name: "Silk Saree",
                            category: "Silk",
                            price: 120.00,
                            currency: "USD",
                            image: AllSarees,
                            description: "Elegant silk saree with traditional designs.",
                            colors: ["Red", "Green", "Blue"],
                            sizes: ["Free Size"],
                            stock: 25,
                            discount: 10,
                            ratings: 4.5,
                            reviews: [
                                {
                                    user: "Alice",
                                    rating: 5,
                                    comment: "Beautiful saree, great quality!"
                                },
                                {
                                    user: "Bob",
                                    rating: 4,
                                    comment: "Loved the color and fabric."
                                }
                            ]
                            },
                            {
                            id: 1,
                            name: "Silk Saree",
                            category: "Silk",
                            price: 120.00,
                            currency: "USD",
                            image: AllSarees,
                            description: "Elegant silk saree with traditional designs.",
                            colors: ["Red", "Green", "Blue"],
                            sizes: ["Free Size"],
                            stock: 25,
                            discount: 10,
                            ratings: 4.5,
                            reviews: [
                                {
                                    user: "Alice",
                                    rating: 5,
                                    comment: "Beautiful saree, great quality!"
                                },
                                {
                                    user: "Bob",
                                    rating: 4,
                                    comment: "Loved the color and fabric."
                                }
                            ]
                            },
                            {
                            id: 1,
                            name: "Silk Saree",
                            category: "Silk",
                            price: 120.00,
                            currency: "USD",
                            image: AllSarees,
                            description: "Elegant silk saree with traditional designs.",
                            colors: ["Red", "Green", "Blue"],
                            sizes: ["Free Size"],
                            stock: 25,
                            discount: 10,
                            ratings: 4.5,
                            reviews: [
                                {
                                    user: "Alice",
                                    rating: 5,
                                    comment: "Beautiful saree, great quality!"
                                },
                                {
                                    user: "Bob",
                                    rating: 4,
                                    comment: "Loved the color and fabric."
                                }
                            ]
                            },
                            {
                            id: 1,
                            name: "Silk Saree",
                            category: "Silk",
                            price: 120.00,
                            currency: "USD",
                            image: AllSarees,
                            description: "Elegant silk saree with traditional designs.",
                            colors: ["Red", "Green", "Blue"],
                            sizes: ["Free Size"],
                            stock: 25,
                            discount: 10,
                            ratings: 4.5,
                            reviews: [
                                {
                                    user: "Alice",
                                    rating: 5,
                                    comment: "Beautiful saree, great quality!"
                                },
                                {
                                    user: "Bob",
                                    rating: 4,
                                    comment: "Loved the color and fabric."
                                }
                            ]
                            },
                            {
                            id: 1,
                            name: "Silk Saree",
                            category: "Silk",
                            price: 120.00,
                            currency: "USD",
                            image: AllSarees,
                            description: "Elegant silk saree with traditional designs.",
                            colors: ["Red", "Green", "Blue"],
                            sizes: ["Free Size"],
                            stock: 25,
                            discount: 10,
                            ratings: 4.5,
                            reviews: [
                                {
                                    user: "Alice",
                                    rating: 5,
                                    comment: "Beautiful saree, great quality!"
                                },
                                {
                                    user: "Bob",
                                    rating: 4,
                                    comment: "Loved the color and fabric."
                                }
                            ]
                            },
                            {
                            id: 1,
                            name: "Silk Saree",
                            category: "Silk",
                            price: 120.00,
                            currency: "USD",
                            image: AllSarees,
                            description: "Elegant silk saree with traditional designs.",
                            colors: ["Red", "Green", "Blue"],
                            sizes: ["Free Size"],
                            stock: 25,
                            discount: 10,
                            ratings: 4.5,
                            reviews: [
                                {
                                    user: "Alice",
                                    rating: 5,
                                    comment: "Beautiful saree, great quality!"
                                },
                                {
                                    user: "Bob",
                                    rating: 4,
                                    comment: "Loved the color and fabric."
                                }
                            ]
                            },
                            {
                            id: 1,
                            name: "Silk Saree",
                            category: "Silk",
                            price: 120.00,
                            currency: "USD",
                            image: AllSarees,
                            description: "Elegant silk saree with traditional designs.",
                            colors: ["Red", "Green", "Blue"],
                            sizes: ["Free Size"],
                            stock: 25,
                            discount: 10,
                            ratings: 4.5,
                            reviews: [
                                {
                                    user: "Alice",
                                    rating: 5,
                                    comment: "Beautiful saree, great quality!"
                                },
                                {
                                    user: "Bob",
                                    rating: 4,
                                    comment: "Loved the color and fabric."
                                }
                            ]
                            },
                            {
                            id: 1,
                            name: "Silk Saree",
                            category: "Silk",
                            price: 120.00,
                            currency: "USD",
                            image: AllSarees,
                            description: "Elegant silk saree with traditional designs.",
                            colors: ["Red", "Green", "Blue"],
                            sizes: ["Free Size"],
                            stock: 25,
                            discount: 10,
                            ratings: 4.5,
                            reviews: [
                                {
                                    user: "Alice",
                                    rating: 5,
                                    comment: "Beautiful saree, great quality!"
                                },
                                {
                                    user: "Bob",
                                    rating: 4,
                                    comment: "Loved the color and fabric."
                                }
                            ]
                            }
                            ]

                            const AllKurta=[
                                {
                                    id: 1,
                                    name: "Silk Saree",
                                    category: "Silk",
                                    price: 120.00,
                                    currency: "USD",
                                    image: AllSarees,
                                    description: "Elegant silk saree with traditional designs.",
                                    colors: ["Red", "Green", "Blue"],
                                    sizes: ["Free Size"],
                                    stock: 25,
                                    discount: 10,
                                    ratings: 4.5,
                                    reviews: [
                                        {
                                            user: "Alice",
                                            rating: 5,
                                            comment: "Beautiful saree, great quality!"
                                        },
                                        {
                                            user: "Bob",
                                            rating: 4,
                                            comment: "Loved the color and fabric."
                                        }
                                    ]
                                },
                                {
                                  id: 2,
                                  name: "Silk Saree",
                                  category: "Silk",
                                  price: 120.00,
                                  currency: "USD",
                                  image: AllSarees,
                                  description: "Elegant silk saree with traditional designs.",
                                  colors: ["Red", "Green", "Blue"],
                                  sizes: ["Free Size"],
                                  stock: 25,
                                  discount: 10,
                                  ratings: 4.5,
                                  reviews: [
                                      {
                                          user: "Alice",
                                          rating: 5,
                                          comment: "Beautiful saree, great quality!"
                                      },
                                      {
                                          user: "Bob",
                                          rating: 4,
                                          comment: "Loved the color and fabric."
                                      }
                                  ]
                                },
                                {
                                id: 1,
                                name: "Silk Saree",
                                category: "Silk",
                                price: 120.00,
                                currency: "USD",
                                image: AllSarees,
                                description: "Elegant silk saree with traditional designs.",
                                colors: ["Red", "Green", "Blue"],
                                sizes: ["Free Size"],
                                stock: 25,
                                discount: 10,
                                ratings: 4.5,
                                reviews: [
                                    {
                                        user: "Alice",
                                        rating: 5,
                                        comment: "Beautiful saree, great quality!"
                                    },
                                    {
                                        user: "Bob",
                                        rating: 4,
                                        comment: "Loved the color and fabric."
                                    }
                                ]
                                },
                                {
                                id: 1,
                                name: "Silk Saree",
                                category: "Silk",
                                price: 120.00,
                                currency: "USD",
                                image: AllSarees,
                                description: "Elegant silk saree with traditional designs.",
                                colors: ["Red", "Green", "Blue"],
                                sizes: ["Free Size"],
                                stock: 25,
                                discount: 10,
                                ratings: 4.5,
                                reviews: [
                                    {
                                        user: "Alice",
                                        rating: 5,
                                        comment: "Beautiful saree, great quality!"
                                    },
                                    {
                                        user: "Bob",
                                        rating: 4,
                                        comment: "Loved the color and fabric."
                                    }
                                ]
                                },
                                {
                                id: 1,
                                name: "Silk Saree",
                                category: "Silk",
                                price: 120.00,
                                currency: "USD",
                                image: AllSarees,
                                description: "Elegant silk saree with traditional designs.",
                                colors: ["Red", "Green", "Blue"],
                                sizes: ["Free Size"],
                                stock: 25,
                                discount: 10,
                                ratings: 4.5,
                                reviews: [
                                    {
                                        user: "Alice",
                                        rating: 5,
                                        comment: "Beautiful saree, great quality!"
                                    },
                                    {
                                        user: "Bob",
                                        rating: 4,
                                        comment: "Loved the color and fabric."
                                    }
                                ]
                                },
                                {
                                id: 1,
                                name: "Silk Saree",
                                category: "Silk",
                                price: 120.00,
                                currency: "USD",
                                image: AllSarees,
                                description: "Elegant silk saree with traditional designs.",
                                colors: ["Red", "Green", "Blue"],
                                sizes: ["Free Size"],
                                stock: 25,
                                discount: 10,
                                ratings: 4.5,
                                reviews: [
                                    {
                                        user: "Alice",
                                        rating: 5,
                                        comment: "Beautiful saree, great quality!"
                                    },
                                    {
                                        user: "Bob",
                                        rating: 4,
                                        comment: "Loved the color and fabric."
                                    }
                                ]
                                },
                                {
                                id: 1,
                                name: "Silk Saree",
                                category: "Silk",
                                price: 120.00,
                                currency: "USD",
                                image: AllSarees,
                                description: "Elegant silk saree with traditional designs.",
                                colors: ["Red", "Green", "Blue"],
                                sizes: ["Free Size"],
                                stock: 25,
                                discount: 10,
                                ratings: 4.5,
                                reviews: [
                                    {
                                        user: "Alice",
                                        rating: 5,
                                        comment: "Beautiful saree, great quality!"
                                    },
                                    {
                                        user: "Bob",
                                        rating: 4,
                                        comment: "Loved the color and fabric."
                                    }
                                ]
                                },
                                {
                                id: 1,
                                name: "Silk Saree",
                                category: "Silk",
                                price: 120.00,
                                currency: "USD",
                                image: AllSarees,
                                description: "Elegant silk saree with traditional designs.",
                                colors: ["Red", "Green", "Blue"],
                                sizes: ["Free Size"],
                                stock: 25,
                                discount: 10,
                                ratings: 4.5,
                                reviews: [
                                    {
                                        user: "Alice",
                                        rating: 5,
                                        comment: "Beautiful saree, great quality!"
                                    },
                                    {
                                        user: "Bob",
                                        rating: 4,
                                        comment: "Loved the color and fabric."
                                    }
                                ]
                                },
                                {
                                id: 1,
                                name: "Silk Saree",
                                category: "Silk",
                                price: 120.00,
                                currency: "USD",
                                image: AllSarees,
                                description: "Elegant silk saree with traditional designs.",
                                colors: ["Red", "Green", "Blue"],
                                sizes: ["Free Size"],
                                stock: 25,
                                discount: 10,
                                ratings: 4.5,
                                reviews: [
                                    {
                                        user: "Alice",
                                        rating: 5,
                                        comment: "Beautiful saree, great quality!"
                                    },
                                    {
                                        user: "Bob",
                                        rating: 4,
                                        comment: "Loved the color and fabric."
                                    }
                                ]
                                },
                                {
                                id: 1,
                                name: "Silk Saree",
                                category: "Silk",
                                price: 120.00,
                                currency: "USD",
                                image: AllSarees,
                                description: "Elegant silk saree with traditional designs.",
                                colors: ["Red", "Green", "Blue"],
                                sizes: ["Free Size"],
                                stock: 25,
                                discount: 10,
                                ratings: 4.5,
                                reviews: [
                                    {
                                        user: "Alice",
                                        rating: 5,
                                        comment: "Beautiful saree, great quality!"
                                    },
                                    {
                                        user: "Bob",
                                        rating: 4,
                                        comment: "Loved the color and fabric."
                                    }
                                ]
                                },
                                {
                                id: 1,
                                name: "Silk Saree",
                                category: "Silk",
                                price: 120.00,
                                currency: "USD",
                                image: AllSarees,
                                description: "Elegant silk saree with traditional designs.",
                                colors: ["Red", "Green", "Blue"],
                                sizes: ["Free Size"],
                                stock: 25,
                                discount: 10,
                                ratings: 4.5,
                                reviews: [
                                    {
                                        user: "Alice",
                                        rating: 5,
                                        comment: "Beautiful saree, great quality!"
                                    },
                                    {
                                        user: "Bob",
                                        rating: 4,
                                        comment: "Loved the color and fabric."
                                    }
                                ]
                                },
                                {
                                id: 1,
                                name: "Silk Saree",
                                category: "Silk",
                                price: 120.00,
                                currency: "USD",
                                image: AllSarees,
                                description: "Elegant silk saree with traditional designs.",
                                colors: ["Red", "Green", "Blue"],
                                sizes: ["Free Size"],
                                stock: 25,
                                discount: 10,
                                ratings: 4.5,
                                reviews: [
                                    {
                                        user: "Alice",
                                        rating: 5,
                                        comment: "Beautiful saree, great quality!"
                                    },
                                    {
                                        user: "Bob",
                                        rating: 4,
                                        comment: "Loved the color and fabric."
                                    }
                                ]
                                },
                                {
                                id: 1,
                                name: "Silk Saree",
                                category: "Silk",
                                price: 120.00,
                                currency: "USD",
                                image: AllSarees,
                                description: "Elegant silk saree with traditional designs.",
                                colors: ["Red", "Green", "Blue"],
                                sizes: ["Free Size"],
                                stock: 25,
                                discount: 10,
                                ratings: 4.5,
                                reviews: [
                                    {
                                        user: "Alice",
                                        rating: 5,
                                        comment: "Beautiful saree, great quality!"
                                    },
                                    {
                                        user: "Bob",
                                        rating: 4,
                                        comment: "Loved the color and fabric."
                                    }
                                ]
                                },
                                {
                                id: 1,
                                name: "Silk Saree",
                                category: "Silk",
                                price: 120.00,
                                currency: "USD",
                                image: AllSarees,
                                description: "Elegant silk saree with traditional designs.",
                                colors: ["Red", "Green", "Blue"],
                                sizes: ["Free Size"],
                                stock: 25,
                                discount: 10,
                                ratings: 4.5,
                                reviews: [
                                    {
                                        user: "Alice",
                                        rating: 5,
                                        comment: "Beautiful saree, great quality!"
                                    },
                                    {
                                        user: "Bob",
                                        rating: 4,
                                        comment: "Loved the color and fabric."
                                    }
                                ]
                                },
                                {
                                id: 1,
                                name: "Silk Saree",
                                category: "Silk",
                                price: 120.00,
                                currency: "USD",
                                image: AllSarees,
                                description: "Elegant silk saree with traditional designs.",
                                colors: ["Red", "Green", "Blue"],
                                sizes: ["Free Size"],
                                stock: 25,
                                discount: 10,
                                ratings: 4.5,
                                reviews: [
                                    {
                                        user: "Alice",
                                        rating: 5,
                                        comment: "Beautiful saree, great quality!"
                                    },
                                    {
                                        user: "Bob",
                                        rating: 4,
                                        comment: "Loved the color and fabric."
                                    }
                                ]
                                },
                                {
                                id: 1,
                                name: "Silk Saree",
                                category: "Silk",
                                price: 120.00,
                                currency: "USD",
                                image: AllSarees,
                                description: "Elegant silk saree with traditional designs.",
                                colors: ["Red", "Green", "Blue"],
                                sizes: ["Free Size"],
                                stock: 25,
                                discount: 10,
                                ratings: 4.5,
                                reviews: [
                                    {
                                        user: "Alice",
                                        rating: 5,
                                        comment: "Beautiful saree, great quality!"
                                    },
                                    {
                                        user: "Bob",
                                        rating: 4,
                                        comment: "Loved the color and fabric."
                                    }
                                ]
                                },
                                {
                                id: 1,
                                name: "Silk Saree",
                                category: "Silk",
                                price: 120.00,
                                currency: "USD",
                                image: AllSarees,
                                description: "Elegant silk saree with traditional designs.",
                                colors: ["Red", "Green", "Blue"],
                                sizes: ["Free Size"],
                                stock: 25,
                                discount: 10,
                                ratings: 4.5,
                                reviews: [
                                    {
                                        user: "Alice",
                                        rating: 5,
                                        comment: "Beautiful saree, great quality!"
                                    },
                                    {
                                        user: "Bob",
                                        rating: 4,
                                        comment: "Loved the color and fabric."
                                    }
                                ]
                                },
                                {
                                id: 1,
                                name: "Silk Saree",
                                category: "Silk",
                                price: 120.00,
                                currency: "USD",
                                image: AllSarees,
                                description: "Elegant silk saree with traditional designs.",
                                colors: ["Red", "Green", "Blue"],
                                sizes: ["Free Size"],
                                stock: 25,
                                discount: 10,
                                ratings: 4.5,
                                reviews: [
                                    {
                                        user: "Alice",
                                        rating: 5,
                                        comment: "Beautiful saree, great quality!"
                                    },
                                    {
                                        user: "Bob",
                                        rating: 4,
                                        comment: "Loved the color and fabric."
                                    }
                                ]
                                },
                                {
                                id: 1,
                                name: "Silk Saree",
                                category: "Silk",
                                price: 120.00,
                                currency: "USD",
                                image: AllSarees,
                                description: "Elegant silk saree with traditional designs.",
                                colors: ["Red", "Green", "Blue"],
                                sizes: ["Free Size"],
                                stock: 25,
                                discount: 10,
                                ratings: 4.5,
                                reviews: [
                                    {
                                        user: "Alice",
                                        rating: 5,
                                        comment: "Beautiful saree, great quality!"
                                    },
                                    {
                                        user: "Bob",
                                        rating: 4,
                                        comment: "Loved the color and fabric."
                                    }
                                ]
                                },
                                {
                                id: 1,
                                name: "Silk Saree",
                                category: "Silk",
                                price: 120.00,
                                currency: "USD",
                                image: AllSarees,
                                description: "Elegant silk saree with traditional designs.",
                                colors: ["Red", "Green", "Blue"],
                                sizes: ["Free Size"],
                                stock: 25,
                                discount: 10,
                                ratings: 4.5,
                                reviews: [
                                    {
                                        user: "Alice",
                                        rating: 5,
                                        comment: "Beautiful saree, great quality!"
                                    },
                                    {
                                        user: "Bob",
                                        rating: 4,
                                        comment: "Loved the color and fabric."
                                    }
                                ]
                                },
                                {
                                id: 1,
                                name: "Silk Saree",
                                category: "Silk",
                                price: 120.00,
                                currency: "USD",
                                image: AllSarees,
                                description: "Elegant silk saree with traditional designs.",
                                colors: ["Red", "Green", "Blue"],
                                sizes: ["Free Size"],
                                stock: 25,
                                discount: 10,
                                ratings: 4.5,
                                reviews: [
                                    {
                                        user: "Alice",
                                        rating: 5,
                                        comment: "Beautiful saree, great quality!"
                                    },
                                    {
                                        user: "Bob",
                                        rating: 4,
                                        comment: "Loved the color and fabric."
                                    }
                                ]
                                },
                                {
                                id: 1,
                                name: "Silk Saree",
                                category: "Silk",
                                price: 120.00,
                                currency: "USD",
                                image: AllSarees,
                                description: "Elegant silk saree with traditional designs.",
                                colors: ["Red", "Green", "Blue"],
                                sizes: ["Free Size"],
                                stock: 25,
                                discount: 10,
                                ratings: 4.5,
                                reviews: [
                                    {
                                        user: "Alice",
                                        rating: 5,
                                        comment: "Beautiful saree, great quality!"
                                    },
                                    {
                                        user: "Bob",
                                        rating: 4,
                                        comment: "Loved the color and fabric."
                                    }
                                ]
                                },
                                {
                                id: 1,
                                name: "Silk Saree",
                                category: "Silk",
                                price: 120.00,
                                currency: "USD",
                                image: AllSarees,
                                description: "Elegant silk saree with traditional designs.",
                                colors: ["Red", "Green", "Blue"],
                                sizes: ["Free Size"],
                                stock: 25,
                                discount: 10,
                                ratings: 4.5,
                                reviews: [
                                    {
                                        user: "Alice",
                                        rating: 5,
                                        comment: "Beautiful saree, great quality!"
                                    },
                                    {
                                        user: "Bob",
                                        rating: 4,
                                        comment: "Loved the color and fabric."
                                    }
                                ]
                                },
                                {
                                id: 1,
                                name: "Silk Saree",
                                category: "Silk",
                                price: 120.00,
                                currency: "USD",
                                image: AllSarees,
                                description: "Elegant silk saree with traditional designs.",
                                colors: ["Red", "Green", "Blue"],
                                sizes: ["Free Size"],
                                stock: 25,
                                discount: 10,
                                ratings: 4.5,
                                reviews: [
                                    {
                                        user: "Alice",
                                        rating: 5,
                                        comment: "Beautiful saree, great quality!"
                                    },
                                    {
                                        user: "Bob",
                                        rating: 4,
                                        comment: "Loved the color and fabric."
                                    }
                                ]
                                },
                                {
                                id: 1,
                                name: "Silk Saree",
                                category: "Silk",
                                price: 120.00,
                                currency: "USD",
                                image: AllSarees,
                                description: "Elegant silk saree with traditional designs.",
                                colors: ["Red", "Green", "Blue"],
                                sizes: ["Free Size"],
                                stock: 25,
                                discount: 10,
                                ratings: 4.5,
                                reviews: [
                                    {
                                        user: "Alice",
                                        rating: 5,
                                        comment: "Beautiful saree, great quality!"
                                    },
                                    {
                                        user: "Bob",
                                        rating: 4,
                                        comment: "Loved the color and fabric."
                                    }
                                ]
                                },
                                {
                                id: 1,
                                name: "Silk Saree",
                                category: "Silk",
                                price: 120.00,
                                currency: "USD",
                                image: AllSarees,
                                description: "Elegant silk saree with traditional designs.",
                                colors: ["Red", "Green", "Blue"],
                                sizes: ["Free Size"],
                                stock: 25,
                                discount: 10,
                                ratings: 4.5,
                                reviews: [
                                    {
                                        user: "Alice",
                                        rating: 5,
                                        comment: "Beautiful saree, great quality!"
                                    },
                                    {
                                        user: "Bob",
                                        rating: 4,
                                        comment: "Loved the color and fabric."
                                    }
                                ]
                                },
                                {
                                id: 1,
                                name: "Silk Saree",
                                category: "Silk",
                                price: 120.00,
                                currency: "USD",
                                image: AllSarees,
                                description: "Elegant silk saree with traditional designs.",
                                colors: ["Red", "Green", "Blue"],
                                sizes: ["Free Size"],
                                stock: 25,
                                discount: 10,
                                ratings: 4.5,
                                reviews: [
                                    {
                                        user: "Alice",
                                        rating: 5,
                                        comment: "Beautiful saree, great quality!"
                                    },
                                    {
                                        user: "Bob",
                                        rating: 4,
                                        comment: "Loved the color and fabric."
                                    }
                                ]
                                },
                                {
                                id: 1,
                                name: "Silk Saree",
                                category: "Silk",
                                price: 120.00,
                                currency: "USD",
                                image: AllSarees,
                                description: "Elegant silk saree with traditional designs.",
                                colors: ["Red", "Green", "Blue"],
                                sizes: ["Free Size"],
                                stock: 25,
                                discount: 10,
                                ratings: 4.5,
                                reviews: [
                                    {
                                        user: "Alice",
                                        rating: 5,
                                        comment: "Beautiful saree, great quality!"
                                    },
                                    {
                                        user: "Bob",
                                        rating: 4,
                                        comment: "Loved the color and fabric."
                                    }
                                ]
                                },
                                {
                                id: 1,
                                name: "Silk Saree",
                                category: "Silk",
                                price: 120.00,
                                currency: "USD",
                                image: AllSarees,
                                description: "Elegant silk saree with traditional designs.",
                                colors: ["Red", "Green", "Blue"],
                                sizes: ["Free Size"],
                                stock: 25,
                                discount: 10,
                                ratings: 4.5,
                                reviews: [
                                    {
                                        user: "Alice",
                                        rating: 5,
                                        comment: "Beautiful saree, great quality!"
                                    },
                                    {
                                        user: "Bob",
                                        rating: 4,
                                        comment: "Loved the color and fabric."
                                    }
                                ]
                                },
                                {
                                id: 1,
                                name: "Silk Saree",
                                category: "Silk",
                                price: 120.00,
                                currency: "USD",
                                image: AllSarees,
                                description: "Elegant silk saree with traditional designs.",
                                colors: ["Red", "Green", "Blue"],
                                sizes: ["Free Size"],
                                stock: 25,
                                discount: 10,
                                ratings: 4.5,
                                reviews: [
                                    {
                                        user: "Alice",
                                        rating: 5,
                                        comment: "Beautiful saree, great quality!"
                                    },
                                    {
                                        user: "Bob",
                                        rating: 4,
                                        comment: "Loved the color and fabric."
                                    }
                                ]
                                }
                                ]

                                const AllSuit=[
                                    {
                                        id: 1,
                                        name: "Silk Saree",
                                        category: "Silk",
                                        price: 120.00,
                                        currency: "USD",
                                        image: AllSarees,
                                        description: "Elegant silk saree with traditional designs.",
                                        colors: ["Red", "Green", "Blue"],
                                        sizes: ["Free Size"],
                                        stock: 25,
                                        discount: 10,
                                        ratings: 4.5,
                                        reviews: [
                                            {
                                                user: "Alice",
                                                rating: 5,
                                                comment: "Beautiful saree, great quality!"
                                            },
                                            {
                                                user: "Bob",
                                                rating: 4,
                                                comment: "Loved the color and fabric."
                                            }
                                        ]
                                    },
                                    {
                                      id: 2,
                                      name: "Silk Saree",
                                      category: "Silk",
                                      price: 120.00,
                                      currency: "USD",
                                      image: AllSarees,
                                      description: "Elegant silk saree with traditional designs.",
                                      colors: ["Red", "Green", "Blue"],
                                      sizes: ["Free Size"],
                                      stock: 25,
                                      discount: 10,
                                      ratings: 4.5,
                                      reviews: [
                                          {
                                              user: "Alice",
                                              rating: 5,
                                              comment: "Beautiful saree, great quality!"
                                          },
                                          {
                                              user: "Bob",
                                              rating: 4,
                                              comment: "Loved the color and fabric."
                                          }
                                      ]
                                    },
                                    {
                                    id: 1,
                                    name: "Silk Saree",
                                    category: "Silk",
                                    price: 120.00,
                                    currency: "USD",
                                    image: AllSarees,
                                    description: "Elegant silk saree with traditional designs.",
                                    colors: ["Red", "Green", "Blue"],
                                    sizes: ["Free Size"],
                                    stock: 25,
                                    discount: 10,
                                    ratings: 4.5,
                                    reviews: [
                                        {
                                            user: "Alice",
                                            rating: 5,
                                            comment: "Beautiful saree, great quality!"
                                        },
                                        {
                                            user: "Bob",
                                            rating: 4,
                                            comment: "Loved the color and fabric."
                                        }
                                    ]
                                    },
                                    {
                                    id: 1,
                                    name: "Silk Saree",
                                    category: "Silk",
                                    price: 120.00,
                                    currency: "USD",
                                    image: AllSarees,
                                    description: "Elegant silk saree with traditional designs.",
                                    colors: ["Red", "Green", "Blue"],
                                    sizes: ["Free Size"],
                                    stock: 25,
                                    discount: 10,
                                    ratings: 4.5,
                                    reviews: [
                                        {
                                            user: "Alice",
                                            rating: 5,
                                            comment: "Beautiful saree, great quality!"
                                        },
                                        {
                                            user: "Bob",
                                            rating: 4,
                                            comment: "Loved the color and fabric."
                                        }
                                    ]
                                    },
                                    {
                                    id: 1,
                                    name: "Silk Saree",
                                    category: "Silk",
                                    price: 120.00,
                                    currency: "USD",
                                    image: AllSarees,
                                    description: "Elegant silk saree with traditional designs.",
                                    colors: ["Red", "Green", "Blue"],
                                    sizes: ["Free Size"],
                                    stock: 25,
                                    discount: 10,
                                    ratings: 4.5,
                                    reviews: [
                                        {
                                            user: "Alice",
                                            rating: 5,
                                            comment: "Beautiful saree, great quality!"
                                        },
                                        {
                                            user: "Bob",
                                            rating: 4,
                                            comment: "Loved the color and fabric."
                                        }
                                    ]
                                    },
                                    {
                                    id: 1,
                                    name: "Silk Saree",
                                    category: "Silk",
                                    price: 120.00,
                                    currency: "USD",
                                    image: AllSarees,
                                    description: "Elegant silk saree with traditional designs.",
                                    colors: ["Red", "Green", "Blue"],
                                    sizes: ["Free Size"],
                                    stock: 25,
                                    discount: 10,
                                    ratings: 4.5,
                                    reviews: [
                                        {
                                            user: "Alice",
                                            rating: 5,
                                            comment: "Beautiful saree, great quality!"
                                        },
                                        {
                                            user: "Bob",
                                            rating: 4,
                                            comment: "Loved the color and fabric."
                                        }
                                    ]
                                    },
                                    {
                                    id: 1,
                                    name: "Silk Saree",
                                    category: "Silk",
                                    price: 120.00,
                                    currency: "USD",
                                    image: AllSarees,
                                    description: "Elegant silk saree with traditional designs.",
                                    colors: ["Red", "Green", "Blue"],
                                    sizes: ["Free Size"],
                                    stock: 25,
                                    discount: 10,
                                    ratings: 4.5,
                                    reviews: [
                                        {
                                            user: "Alice",
                                            rating: 5,
                                            comment: "Beautiful saree, great quality!"
                                        },
                                        {
                                            user: "Bob",
                                            rating: 4,
                                            comment: "Loved the color and fabric."
                                        }
                                    ]
                                    },
                                    {
                                    id: 1,
                                    name: "Silk Saree",
                                    category: "Silk",
                                    price: 120.00,
                                    currency: "USD",
                                    image: AllSarees,
                                    description: "Elegant silk saree with traditional designs.",
                                    colors: ["Red", "Green", "Blue"],
                                    sizes: ["Free Size"],
                                    stock: 25,
                                    discount: 10,
                                    ratings: 4.5,
                                    reviews: [
                                        {
                                            user: "Alice",
                                            rating: 5,
                                            comment: "Beautiful saree, great quality!"
                                        },
                                        {
                                            user: "Bob",
                                            rating: 4,
                                            comment: "Loved the color and fabric."
                                        }
                                    ]
                                    },
                                    {
                                    id: 1,
                                    name: "Silk Saree",
                                    category: "Silk",
                                    price: 120.00,
                                    currency: "USD",
                                    image: AllSarees,
                                    description: "Elegant silk saree with traditional designs.",
                                    colors: ["Red", "Green", "Blue"],
                                    sizes: ["Free Size"],
                                    stock: 25,
                                    discount: 10,
                                    ratings: 4.5,
                                    reviews: [
                                        {
                                            user: "Alice",
                                            rating: 5,
                                            comment: "Beautiful saree, great quality!"
                                        },
                                        {
                                            user: "Bob",
                                            rating: 4,
                                            comment: "Loved the color and fabric."
                                        }
                                    ]
                                    },
                                    {
                                    id: 1,
                                    name: "Silk Saree",
                                    category: "Silk",
                                    price: 120.00,
                                    currency: "USD",
                                    image: AllSarees,
                                    description: "Elegant silk saree with traditional designs.",
                                    colors: ["Red", "Green", "Blue"],
                                    sizes: ["Free Size"],
                                    stock: 25,
                                    discount: 10,
                                    ratings: 4.5,
                                    reviews: [
                                        {
                                            user: "Alice",
                                            rating: 5,
                                            comment: "Beautiful saree, great quality!"
                                        },
                                        {
                                            user: "Bob",
                                            rating: 4,
                                            comment: "Loved the color and fabric."
                                        }
                                    ]
                                    },
                                    {
                                    id: 1,
                                    name: "Silk Saree",
                                    category: "Silk",
                                    price: 120.00,
                                    currency: "USD",
                                    image: AllSarees,
                                    description: "Elegant silk saree with traditional designs.",
                                    colors: ["Red", "Green", "Blue"],
                                    sizes: ["Free Size"],
                                    stock: 25,
                                    discount: 10,
                                    ratings: 4.5,
                                    reviews: [
                                        {
                                            user: "Alice",
                                            rating: 5,
                                            comment: "Beautiful saree, great quality!"
                                        },
                                        {
                                            user: "Bob",
                                            rating: 4,
                                            comment: "Loved the color and fabric."
                                        }
                                    ]
                                    },
                                    {
                                    id: 1,
                                    name: "Silk Saree",
                                    category: "Silk",
                                    price: 120.00,
                                    currency: "USD",
                                    image: AllSarees,
                                    description: "Elegant silk saree with traditional designs.",
                                    colors: ["Red", "Green", "Blue"],
                                    sizes: ["Free Size"],
                                    stock: 25,
                                    discount: 10,
                                    ratings: 4.5,
                                    reviews: [
                                        {
                                            user: "Alice",
                                            rating: 5,
                                            comment: "Beautiful saree, great quality!"
                                        },
                                        {
                                            user: "Bob",
                                            rating: 4,
                                            comment: "Loved the color and fabric."
                                        }
                                    ]
                                    },
                                    {
                                    id: 1,
                                    name: "Silk Saree",
                                    category: "Silk",
                                    price: 120.00,
                                    currency: "USD",
                                    image: AllSarees,
                                    description: "Elegant silk saree with traditional designs.",
                                    colors: ["Red", "Green", "Blue"],
                                    sizes: ["Free Size"],
                                    stock: 25,
                                    discount: 10,
                                    ratings: 4.5,
                                    reviews: [
                                        {
                                            user: "Alice",
                                            rating: 5,
                                            comment: "Beautiful saree, great quality!"
                                        },
                                        {
                                            user: "Bob",
                                            rating: 4,
                                            comment: "Loved the color and fabric."
                                        }
                                    ]
                                    },
                                    {
                                    id: 1,
                                    name: "Silk Saree",
                                    category: "Silk",
                                    price: 120.00,
                                    currency: "USD",
                                    image: AllSarees,
                                    description: "Elegant silk saree with traditional designs.",
                                    colors: ["Red", "Green", "Blue"],
                                    sizes: ["Free Size"],
                                    stock: 25,
                                    discount: 10,
                                    ratings: 4.5,
                                    reviews: [
                                        {
                                            user: "Alice",
                                            rating: 5,
                                            comment: "Beautiful saree, great quality!"
                                        },
                                        {
                                            user: "Bob",
                                            rating: 4,
                                            comment: "Loved the color and fabric."
                                        }
                                    ]
                                    },
                                    {
                                    id: 1,
                                    name: "Silk Saree",
                                    category: "Silk",
                                    price: 120.00,
                                    currency: "USD",
                                    image: AllSarees,
                                    description: "Elegant silk saree with traditional designs.",
                                    colors: ["Red", "Green", "Blue"],
                                    sizes: ["Free Size"],
                                    stock: 25,
                                    discount: 10,
                                    ratings: 4.5,
                                    reviews: [
                                        {
                                            user: "Alice",
                                            rating: 5,
                                            comment: "Beautiful saree, great quality!"
                                        },
                                        {
                                            user: "Bob",
                                            rating: 4,
                                            comment: "Loved the color and fabric."
                                        }
                                    ]
                                    },
                                    {
                                    id: 1,
                                    name: "Silk Saree",
                                    category: "Silk",
                                    price: 120.00,
                                    currency: "USD",
                                    image: AllSarees,
                                    description: "Elegant silk saree with traditional designs.",
                                    colors: ["Red", "Green", "Blue"],
                                    sizes: ["Free Size"],
                                    stock: 25,
                                    discount: 10,
                                    ratings: 4.5,
                                    reviews: [
                                        {
                                            user: "Alice",
                                            rating: 5,
                                            comment: "Beautiful saree, great quality!"
                                        },
                                        {
                                            user: "Bob",
                                            rating: 4,
                                            comment: "Loved the color and fabric."
                                        }
                                    ]
                                    },
                                    {
                                    id: 1,
                                    name: "Silk Saree",
                                    category: "Silk",
                                    price: 120.00,
                                    currency: "USD",
                                    image: AllSarees,
                                    description: "Elegant silk saree with traditional designs.",
                                    colors: ["Red", "Green", "Blue"],
                                    sizes: ["Free Size"],
                                    stock: 25,
                                    discount: 10,
                                    ratings: 4.5,
                                    reviews: [
                                        {
                                            user: "Alice",
                                            rating: 5,
                                            comment: "Beautiful saree, great quality!"
                                        },
                                        {
                                            user: "Bob",
                                            rating: 4,
                                            comment: "Loved the color and fabric."
                                        }
                                    ]
                                    },
                                    {
                                    id: 1,
                                    name: "Silk Saree",
                                    category: "Silk",
                                    price: 120.00,
                                    currency: "USD",
                                    image: AllSarees,
                                    description: "Elegant silk saree with traditional designs.",
                                    colors: ["Red", "Green", "Blue"],
                                    sizes: ["Free Size"],
                                    stock: 25,
                                    discount: 10,
                                    ratings: 4.5,
                                    reviews: [
                                        {
                                            user: "Alice",
                                            rating: 5,
                                            comment: "Beautiful saree, great quality!"
                                        },
                                        {
                                            user: "Bob",
                                            rating: 4,
                                            comment: "Loved the color and fabric."
                                        }
                                    ]
                                    },
                                    {
                                    id: 1,
                                    name: "Silk Saree",
                                    category: "Silk",
                                    price: 120.00,
                                    currency: "USD",
                                    image: AllSarees,
                                    description: "Elegant silk saree with traditional designs.",
                                    colors: ["Red", "Green", "Blue"],
                                    sizes: ["Free Size"],
                                    stock: 25,
                                    discount: 10,
                                    ratings: 4.5,
                                    reviews: [
                                        {
                                            user: "Alice",
                                            rating: 5,
                                            comment: "Beautiful saree, great quality!"
                                        },
                                        {
                                            user: "Bob",
                                            rating: 4,
                                            comment: "Loved the color and fabric."
                                        }
                                    ]
                                    },
                                    {
                                    id: 1,
                                    name: "Silk Saree",
                                    category: "Silk",
                                    price: 120.00,
                                    currency: "USD",
                                    image: AllSarees,
                                    description: "Elegant silk saree with traditional designs.",
                                    colors: ["Red", "Green", "Blue"],
                                    sizes: ["Free Size"],
                                    stock: 25,
                                    discount: 10,
                                    ratings: 4.5,
                                    reviews: [
                                        {
                                            user: "Alice",
                                            rating: 5,
                                            comment: "Beautiful saree, great quality!"
                                        },
                                        {
                                            user: "Bob",
                                            rating: 4,
                                            comment: "Loved the color and fabric."
                                        }
                                    ]
                                    },
                                    {
                                    id: 1,
                                    name: "Silk Saree",
                                    category: "Silk",
                                    price: 120.00,
                                    currency: "USD",
                                    image: AllSarees,
                                    description: "Elegant silk saree with traditional designs.",
                                    colors: ["Red", "Green", "Blue"],
                                    sizes: ["Free Size"],
                                    stock: 25,
                                    discount: 10,
                                    ratings: 4.5,
                                    reviews: [
                                        {
                                            user: "Alice",
                                            rating: 5,
                                            comment: "Beautiful saree, great quality!"
                                        },
                                        {
                                            user: "Bob",
                                            rating: 4,
                                            comment: "Loved the color and fabric."
                                        }
                                    ]
                                    },
                                    {
                                    id: 1,
                                    name: "Silk Saree",
                                    category: "Silk",
                                    price: 120.00,
                                    currency: "USD",
                                    image: AllSarees,
                                    description: "Elegant silk saree with traditional designs.",
                                    colors: ["Red", "Green", "Blue"],
                                    sizes: ["Free Size"],
                                    stock: 25,
                                    discount: 10,
                                    ratings: 4.5,
                                    reviews: [
                                        {
                                            user: "Alice",
                                            rating: 5,
                                            comment: "Beautiful saree, great quality!"
                                        },
                                        {
                                            user: "Bob",
                                            rating: 4,
                                            comment: "Loved the color and fabric."
                                        }
                                    ]
                                    },
                                    {
                                    id: 1,
                                    name: "Silk Saree",
                                    category: "Silk",
                                    price: 120.00,
                                    currency: "USD",
                                    image: AllSarees,
                                    description: "Elegant silk saree with traditional designs.",
                                    colors: ["Red", "Green", "Blue"],
                                    sizes: ["Free Size"],
                                    stock: 25,
                                    discount: 10,
                                    ratings: 4.5,
                                    reviews: [
                                        {
                                            user: "Alice",
                                            rating: 5,
                                            comment: "Beautiful saree, great quality!"
                                        },
                                        {
                                            user: "Bob",
                                            rating: 4,
                                            comment: "Loved the color and fabric."
                                        }
                                    ]
                                    },
                                    {
                                    id: 1,
                                    name: "Silk Saree",
                                    category: "Silk",
                                    price: 120.00,
                                    currency: "USD",
                                    image: AllSarees,
                                    description: "Elegant silk saree with traditional designs.",
                                    colors: ["Red", "Green", "Blue"],
                                    sizes: ["Free Size"],
                                    stock: 25,
                                    discount: 10,
                                    ratings: 4.5,
                                    reviews: [
                                        {
                                            user: "Alice",
                                            rating: 5,
                                            comment: "Beautiful saree, great quality!"
                                        },
                                        {
                                            user: "Bob",
                                            rating: 4,
                                            comment: "Loved the color and fabric."
                                        }
                                    ]
                                    },
                                    {
                                    id: 1,
                                    name: "Silk Saree",
                                    category: "Silk",
                                    price: 120.00,
                                    currency: "USD",
                                    image: AllSarees,
                                    description: "Elegant silk saree with traditional designs.",
                                    colors: ["Red", "Green", "Blue"],
                                    sizes: ["Free Size"],
                                    stock: 25,
                                    discount: 10,
                                    ratings: 4.5,
                                    reviews: [
                                        {
                                            user: "Alice",
                                            rating: 5,
                                            comment: "Beautiful saree, great quality!"
                                        },
                                        {
                                            user: "Bob",
                                            rating: 4,
                                            comment: "Loved the color and fabric."
                                        }
                                    ]
                                    },
                                    {
                                    id: 1,
                                    name: "Silk Saree",
                                    category: "Silk",
                                    price: 120.00,
                                    currency: "USD",
                                    image: AllSarees,
                                    description: "Elegant silk saree with traditional designs.",
                                    colors: ["Red", "Green", "Blue"],
                                    sizes: ["Free Size"],
                                    stock: 25,
                                    discount: 10,
                                    ratings: 4.5,
                                    reviews: [
                                        {
                                            user: "Alice",
                                            rating: 5,
                                            comment: "Beautiful saree, great quality!"
                                        },
                                        {
                                            user: "Bob",
                                            rating: 4,
                                            comment: "Loved the color and fabric."
                                        }
                                    ]
                                    },
                                    {
                                    id: 1,
                                    name: "Silk Saree",
                                    category: "Silk",
                                    price: 120.00,
                                    currency: "USD",
                                    image: AllSarees,
                                    description: "Elegant silk saree with traditional designs.",
                                    colors: ["Red", "Green", "Blue"],
                                    sizes: ["Free Size"],
                                    stock: 25,
                                    discount: 10,
                                    ratings: 4.5,
                                    reviews: [
                                        {
                                            user: "Alice",
                                            rating: 5,
                                            comment: "Beautiful saree, great quality!"
                                        },
                                        {
                                            user: "Bob",
                                            rating: 4,
                                            comment: "Loved the color and fabric."
                                        }
                                    ]
                                    },
                                    {
                                    id: 1,
                                    name: "Silk Saree",
                                    category: "Silk",
                                    price: 120.00,
                                    currency: "USD",
                                    image: AllSarees,
                                    description: "Elegant silk saree with traditional designs.",
                                    colors: ["Red", "Green", "Blue"],
                                    sizes: ["Free Size"],
                                    stock: 25,
                                    discount: 10,
                                    ratings: 4.5,
                                    reviews: [
                                        {
                                            user: "Alice",
                                            rating: 5,
                                            comment: "Beautiful saree, great quality!"
                                        },
                                        {
                                            user: "Bob",
                                            rating: 4,
                                            comment: "Loved the color and fabric."
                                        }
                                    ]
                                    },
                                    {
                                    id: 1,
                                    name: "Silk Saree",
                                    category: "Silk",
                                    price: 120.00,
                                    currency: "USD",
                                    image: AllSarees,
                                    description: "Elegant silk saree with traditional designs.",
                                    colors: ["Red", "Green", "Blue"],
                                    sizes: ["Free Size"],
                                    stock: 25,
                                    discount: 10,
                                    ratings: 4.5,
                                    reviews: [
                                        {
                                            user: "Alice",
                                            rating: 5,
                                            comment: "Beautiful saree, great quality!"
                                        },
                                        {
                                            user: "Bob",
                                            rating: 4,
                                            comment: "Loved the color and fabric."
                                        }
                                    ]
                                    },
                                    {
                                    id: 1,
                                    name: "Silk Saree",
                                    category: "Silk",
                                    price: 120.00,
                                    currency: "USD",
                                    image: AllSarees,
                                    description: "Elegant silk saree with traditional designs.",
                                    colors: ["Red", "Green", "Blue"],
                                    sizes: ["Free Size"],
                                    stock: 25,
                                    discount: 10,
                                    ratings: 4.5,
                                    reviews: [
                                        {
                                            user: "Alice",
                                            rating: 5,
                                            comment: "Beautiful saree, great quality!"
                                        },
                                        {
                                            user: "Bob",
                                            rating: 4,
                                            comment: "Loved the color and fabric."
                                        }
                                    ]
                                    }
                                    ]
const CottSuit=[
    {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
    },
    {
      id: 2,
      name: "Silk Saree",
      category: "Silk",
      price: 120.00,
      currency: "USD",
      image: AllSarees,
      description: "Elegant silk saree with traditional designs.",
      colors: ["Red", "Green", "Blue"],
      sizes: ["Free Size"],
      stock: 25,
      discount: 10,
      ratings: 4.5,
      reviews: [
          {
              user: "Alice",
              rating: 5,
              comment: "Beautiful saree, great quality!"
          },
          {
              user: "Bob",
              rating: 4,
              comment: "Loved the color and fabric."
          }
      ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    }
    ]
const EmbSuit=[
    {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
    },
    {
      id: 2,
      name: "Silk Saree",
      category: "Silk",
      price: 120.00,
      currency: "USD",
      image: AllSarees,
      description: "Elegant silk saree with traditional designs.",
      colors: ["Red", "Green", "Blue"],
      sizes: ["Free Size"],
      stock: 25,
      discount: 10,
      ratings: 4.5,
      reviews: [
          {
              user: "Alice",
              rating: 5,
              comment: "Beautiful saree, great quality!"
          },
          {
              user: "Bob",
              rating: 4,
              comment: "Loved the color and fabric."
          }
      ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    }
    ]
const ChnSuit=[
    {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
    },
    {
      id: 2,
      name: "Silk Saree",
      category: "Silk",
      price: 120.00,
      currency: "USD",
      image: AllSarees,
      description: "Elegant silk saree with traditional designs.",
      colors: ["Red", "Green", "Blue"],
      sizes: ["Free Size"],
      stock: 25,
      discount: 10,
      ratings: 4.5,
      reviews: [
          {
              user: "Alice",
              rating: 5,
              comment: "Beautiful saree, great quality!"
          },
          {
              user: "Bob",
              rating: 4,
              comment: "Loved the color and fabric."
          }
      ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    }
    ]
const Blous=[
    {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
    },
    {
      id: 2,
      name: "Silk Saree",
      category: "Silk",
      price: 120.00,
      currency: "USD",
      image: AllSarees,
      description: "Elegant silk saree with traditional designs.",
      colors: ["Red", "Green", "Blue"],
      sizes: ["Free Size"],
      stock: 25,
      discount: 10,
      ratings: 4.5,
      reviews: [
          {
              user: "Alice",
              rating: 5,
              comment: "Beautiful saree, great quality!"
          },
          {
              user: "Bob",
              rating: 4,
              comment: "Loved the color and fabric."
          }
      ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    }
    ]  
const Dupatta=[
    {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
    },
    {
      id: 2,
      name: "Silk Saree",
      category: "Silk",
      price: 120.00,
      currency: "USD",
      image: AllSarees,
      description: "Elegant silk saree with traditional designs.",
      colors: ["Red", "Green", "Blue"],
      sizes: ["Free Size"],
      stock: 25,
      discount: 10,
      ratings: 4.5,
      reviews: [
          {
              user: "Alice",
              rating: 5,
              comment: "Beautiful saree, great quality!"
          },
          {
              user: "Bob",
              rating: 4,
              comment: "Loved the color and fabric."
          }
      ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    }
    ]

const Lehan=[
    {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
    },
    {
      id: 2,
      name: "Silk Saree",
      category: "Silk",
      price: 120.00,
      currency: "USD",
      image: AllSarees,
      description: "Elegant silk saree with traditional designs.",
      colors: ["Red", "Green", "Blue"],
      sizes: ["Free Size"],
      stock: 25,
      discount: 10,
      ratings: 4.5,
      reviews: [
          {
              user: "Alice",
              rating: 5,
              comment: "Beautiful saree, great quality!"
          },
          {
              user: "Bob",
              rating: 4,
              comment: "Loved the color and fabric."
          }
      ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    }
    ]

const Gow=[
    {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
    },
    {
      id: 2,
      name: "Silk Saree",
      category: "Silk",
      price: 120.00,
      currency: "USD",
      image: AllSarees,
      description: "Elegant silk saree with traditional designs.",
      colors: ["Red", "Green", "Blue"],
      sizes: ["Free Size"],
      stock: 25,
      discount: 10,
      ratings: 4.5,
      reviews: [
          {
              user: "Alice",
              rating: 5,
              comment: "Beautiful saree, great quality!"
          },
          {
              user: "Bob",
              rating: 4,
              comment: "Loved the color and fabric."
          }
      ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    }
    ]

const EthBotWe=[
    {
        id: 1,
        name: "Silk Saree",
        category: "Silk",
        price: 120.00,
        currency: "USD",
        image: AllSarees,
        description: "Elegant silk saree with traditional designs.",
        colors: ["Red", "Green", "Blue"],
        sizes: ["Free Size"],
        stock: 25,
        discount: 10,
        ratings: 4.5,
        reviews: [
            {
                user: "Alice",
                rating: 5,
                comment: "Beautiful saree, great quality!"
            },
            {
                user: "Bob",
                rating: 4,
                comment: "Loved the color and fabric."
            }
        ]
    },
    {
      id: 2,
      name: "Silk Saree",
      category: "Silk",
      price: 120.00,
      currency: "USD",
      image: AllSarees,
      description: "Elegant silk saree with traditional designs.",
      colors: ["Red", "Green", "Blue"],
      sizes: ["Free Size"],
      stock: 25,
      discount: 10,
      ratings: 4.5,
      reviews: [
          {
              user: "Alice",
              rating: 5,
              comment: "Beautiful saree, great quality!"
          },
          {
              user: "Bob",
              rating: 4,
              comment: "Loved the color and fabric."
          }
      ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    },
    {
    id: 1,
    name: "Silk Saree",
    category: "Silk",
    price: 120.00,
    currency: "USD",
    image: AllSarees,
    description: "Elegant silk saree with traditional designs.",
    colors: ["Red", "Green", "Blue"],
    sizes: ["Free Size"],
    stock: 25,
    discount: 10,
    ratings: 4.5,
    reviews: [
        {
            user: "Alice",
            rating: 5,
            comment: "Beautiful saree, great quality!"
        },
        {
            user: "Bob",
            rating: 4,
            comment: "Loved the color and fabric."
        }
    ]
    }
    ]





    const output={
        HomeProduct,Product1,Fname,AllSareeS, count,setcount,SilkSaree,
        CottonClikSaree,CottonSaree,GeoSaree,ChiSaree,SatSaree,EmbSaree,AllKur,
        AnakaliKur,RayKur,CottKur,EnbKur,AllKurta,AllSuit,CottSuit,EmbSuit,ChnSuit,
        Blous,Dupatta,Lehan,Gow,EthBotWe, cartProduct, setCartProducts
    }
  return (
    <shareData.Provider value={output}>
    {props.children}
</shareData.Provider>
  )
}
