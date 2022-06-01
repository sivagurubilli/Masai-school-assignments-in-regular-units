import React from 'react'
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
const Navbar = () => {

const navigate = useNavigate();


    const handleclick =(id)=>{
        if(id===1){
            navigate('/products/1')
        }

    }
  return (
    <div>

<Link to ="/">Home</Link>
<Link to ="/about">about</Link>
<Link to ="/products">products</Link>
<bUtton onClick={()=>handleclick(1)}>go to product 1</bUtton>

    </div>
  );
};

export default Navbar
