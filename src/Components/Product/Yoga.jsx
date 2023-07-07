import React, { useState, useEffect } from 'react';
import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom";

const Yoga = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const[search, setSearch]=useState("")
  const[state, setState]=useState([])

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
   

    let res= await axios.get(`https://herofit-app-server.onrender.com/floating?q=${search}`)
    console.log(res.data);
    setState(res.data)
  }
  const handleSearchInputChange=(e)=>{
    setSearch(e.target.value)
      }
    

  // const [query, setQuery] = useState('');
  // const [results, setResults] = useState([]);

  // const debounce = function (fn, d) {
  //   let timer;
  //   return function () {
  //     let context = this,
  //       args = arguments;
  //     clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       fn.apply(context, args);
  //     }, d);
  //   };
  // };

//  const goToProductDetails = (id) => {
//   navigate(`singlboxin/${id}`)
//    };

  // const search = debounce(() => {
  //   if (query === "") {
  //     setResults([]);
  //     return;
  //   }
  //   fetch(`https://fakestoreapi.com/products?q=${query}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       setResults(data);
  //     })
  //     .catch(error => console.log(error));
  // }, 500);

  // useEffect(() => {
  //   search();
  // }, [query]);

useEffect(() => {
  fetchProductData();
}, []);

  const fetchProductData = async () => {
    try {
      const response = await fetch('https://herofit-app-server.onrender.com/floating');
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
      <h1>hello</h1>

      <input
        type="text"
        placeholder="search"
        data-testid="search_key"
        
        // value={searchKey}
        onChange={handleSearchInputChange}
      />

{/* <input
        className="search_input"
        value={query}
        onChange={e => setQuery(e.target.value)}
      /> */}
      <ul id="results" >
      {
      state.map((e)=>(
        <div key={e.id}    onClick={()=>navigate(`singleyoga/${e.id}`)}
        >
          <h3> {e.title}</h3>
         
        </div>
      ))
    }
      </ul>
    
    <div>
      <div>
      {
        product?.map((e)=>(
          <div  style={{display: "grid", gridTemplateColumns:"1fr 1fr 1fr" }} onClick={()=>navigate(`singleyoga/${e.id}`)}>

      
      <div >
      <img src={e.image} alt="" width="200" height="200"  />
      </div>
      <div>
      <p>{e.title}</p>
      <p>Price: {e.price}</p>
        </div>
     
      </div>
        ))
      }
      </div>
      
    </div>
    </div>
  );
};

export default Yoga;
