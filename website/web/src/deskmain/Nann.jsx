import React from 'react';
import { Link } from 'react-router-dom'
import{ FaUserAlt, FaCartPlus} from "react-icons/fa"
import { GiEternalLove } from "react-icons/gi";
import { SiMaterialformkdocs } from "react-icons/si";
import { DiMaterializecss } from "react-icons/di";
import { MdOutlineReduceCapacity } from "react-icons/md";
import { useCart } from './CartContext';
 // Import the CartContext
 import image16 from './Images/log2.png'

function Nann() {
  const { cart } = useCart(); // Use cart context

  return (
    <div className="border-b-2 flex justify-between items-center
     h-20 px-4 fixed top-0 left-0 right-0 bg-white z-10
     hover:text-pink-400">
      <div>
        <h1 className="text-gray-500 flex">
        {/* <MdOutlineReduceCapacity  className=' 
        text-gray-500 flex text-3xl mr-2'/> */}
      {/* <img src={image16} className=' 
        text-gray-500  text-1xl mr-1'/> */}
        <SiMaterialformkdocs  className='text-pink-400 mr-3'/>
        {/* <DiMaterializecss /> */}
          
           Edu
        
          <span className="text-pink-500 text-3xl mr-2">
          Material
          </span>
           Hub
          
        </h1>
      </div>
      {/* <Link to='/' className=' text-2xl'>Home</Link>
      <Link to='/AboutPage'  className=' text-2xl'>About</Link>
      <Link to='/ProductPage' className=' text-2xl'>Product
      </Link> */}
      {/* <Link to='/contact' style={{marginRight: "30px"}}>Service</Link>
      <Link to='/contact' style={{marginRight: "30px"}}>Contact</Link> */}
      <ul className="hidden md:flex text-2xl text-gray-500   ">
        <li className="hover:text-pink-400">Home</li>
        <li className="hover:text-pink-400">About</li>
        <li className="hover:text-pink-400">Product</li>
        <li className="hover:text-pink-400">Offers</li>
        <li className="hover:text-pink-400">Contact</li>
      </ul>

      <div className="hidden md:flex text-pink-500 space-x-6 hover:text-gray-500">
        <FaUserAlt className="text-2xl" />
        <GiEternalLove className="text-2xl" />
        <FaCartPlus className='text-2xl' />
        <span className="text-xs bg-green-600 text-white px-2
         py-1 rounded-full absolute top-2 right-2">{cart.length}</span>
      </div>
    </div>
  );
}

export default Nann;