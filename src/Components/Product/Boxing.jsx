import React, { useState, useEffect } from 'react';
import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'

const Boxing = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const[page, setPage]= useState(1)
  const[search, setSearch]=useState("")
  const[state, setState]=useState([])
  const[sort, setSort]=useState("")
//  console.log(state)
const navigate= useNavigate()

  useEffect(()=>{
 
    
  const debounceFn= setTimeout(()=>{
    if(search){
      getData(search)
    }else{
      setState([])
    }
  }, 1000)


return ()=> clearTimeout(debounceFn);
  },[search])





  const getData= async ()=>{
   

    let res= await axios.get(`https://herofit-app-server.onrender.com/boxing?q=${search}`)
    console.log(res.data);
    setState(res.data)
  }
  const handleSearchInputChange=(e)=>{
    setSearch(e.target.value)
      }
    

useEffect(() => {
  fetchProductData();
}, [page,sort]);

  const fetchProductData = async () => {
    let url=`https://herofit-app-server.onrender.com/boxing?_page=${page}&_limit=5`
    if(sort==="high"){
        url+="&_sort=price&_order=desc"
    }  if(sort==="low"){
        url+="&_sort=price&_order=asc"

    }
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProduct(data);
      console.log(data)
      setLoading(false);
    } catch (error) {
      console.log('Error fetching product data:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
     
<div>
      <Input placeholder='Basic usage'
        type="text"
        
        data-testid="search_key"
        
        // value={searchKey}
        onChange={handleSearchInputChange}
      />


  <h1 style={{color: "black"}}>Sort by Price</h1>
<select name="" id="" onChange={(e)=>{setSort(e.target.value)}}>
            <option value="">Sort by Price</option>
            <option value="high">hightTolow</option>
            <option value="low">Lowtohigh</option>
        </select>
        <select name="" id="" >
            <option value="">Filter</option>
            <option value="high">hightTolow</option>
            <option value="low">Lowtohigh</option>
        </select>
        </div>
      <ul id="results" >
      {
      state.map((e)=>(
        <div key={e.id}    onClick={()=>navigate(`singleboxing/${e.id}`)}
        >
          <h3> {e.title}</h3>
         
        </div>
      ))
    }
      </ul>
    
    <div>
      <div style={{display: "grid", gridTemplateColumns:"1fr 1fr 1fr"}}>
      {
        product?.map((e)=>(
          <div  style={{display: "grid" ,boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px" }} onClick={()=>navigate(`singleboxing/${e.id}`)}>

      
      <div >
      <img src={e.image} alt="" width="200" height="200"  />
      </div>
      <div>
      <p>{e.title}</p>
      <p>Price: {e.price}</p>
      <button onClick={()=>navigate(`singleboxing/${e.id}`)}>More Details</button>
        </div>
     
      </div>
        ))
      }
      </div>
      
    </div>
    < Button colorScheme='teal' size='md' disabled={page===1} onClick={()=>{setPage(page-1)}}>prev</Button>
        <Button colorScheme='blackAlpha'>{page}</Button>
        <Button colorScheme='teal' size='md' onClick={()=>{setPage(page+1)}}>next</Button>
        
    </div>
  );
};

export default Boxing;
