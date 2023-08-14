import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { TempNav } from "../NavigationBar/TempNav";
import "./products.css";
import { useContext } from "react";
import { MyAuthContext } from "../Context/AuthContextProvider";


const Boxing = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [state, setState] = useState([]);
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(MyAuthContext);
  const tok = localStorage.getItem("token");
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);

    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
     login(true)
    fetchProductData();
  }, [page, sort, filter]);

  useEffect(() => {
    const debounceFn = setTimeout(() => {
      if (search) {
        getData(search);
      } else {
        setState([]);
      }
    }, 1000);

    return () => clearTimeout(debounceFn);
  }, [search]);

  const fetchProductData = async () => {
    let url = `http://localhost:8080/boxing?page=${page}&limit=9`;
    if (filter) {
      url += `&category=${filter}`;
    }
    try {
      const response = await axios.get(url);
      const data = response.data;
      setProduct(data.boxing);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching product data:", error);
    }
  };

  const getData = async () => {
    let res = await axios.get(`http://localhost:8080/boxing?q=${search}`);
    console.log(res.data);
    setState(res.data.boxing);
  };

  const handleSearchInputChange = (e) => {
    setSearch(e.target.value);
  };
  if (!tok) {
    return (
      <div id="gif">
        <h2>Please Log In</h2>
      </div>
    );
  }
  if (loading) {
    return (
      <div id="gif">
        <img
          src="https://miro.medium.com/v2/resize:fit:1100/1*e_Loq49BI4WmN7o9ItTADg.gif"
          alt=""
        />
      </div>
    );
  }
  console.log(product);
  return (
    <div id="proddiv">
      <TempNav />
      <div id="options">
        <div>
          <Input
            color="white"
            placeholder="Basic usage"
            type="text"
            data-testid="search_key"
            onChange={handleSearchInputChange}
          />
          <select
            name=""
            id="selectdata"
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          >
            <option value="">Filter</option>
            <option value="equipment">Equipments</option>
            <option value="Indoor">Indoor</option>
            <option value="Outdoor">Outdoor</option>
          </select>
        </div>
        <ul style={{ color: "white" }}>
          {state.map((e) => (
            <div key={e.id} onClick={() => navigate(`/boxing/${e.id}`)}>
              <h3> {e.title}</h3>
            </div>
          ))}
        </ul>
      </div>
      <div>
        <div id="maindiv">
          {product?.map((e) => (
            <div
              key={e.id}
              id="secdiv"
              onClick={() => navigate(`/boxing/${e._id}`)}
            >
              <div id="mainimg">
                <img src={e.image} alt="" />
              </div>
              <div id="maintext">
                <p>{e.title}</p>
                <h3> category: {e.category}</h3>
                <button onClick={() => navigate(`/boxing/${e.id}`)}>
                  More Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="buttonz">
        <Button
          colorScheme="teal"
          size="md"
          disabled={page === 1}
          onClick={() => {
            setPage(page - 1);
          }}
        >
          Previous
        </Button>
        <Button colorScheme="blackAlpha">{page}</Button>
        <Button
          colorScheme="teal"
          size="md"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Boxing;
