import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Fetchdata({cat}) {
const [data,setdata]=useState([]);
const [iserror, setiserror] = useState("");

  useEffect(()=>{
    axios.get
   ( 
    cat?
    `https://newsapi.org/v2/top-headlines?country=us&category=${cat}&apiKey=5fcda2f29ea949e58b726e4eb22782dd` : 'https://newsapi.org/v2/top-headlines?country=in&apiKey=5fcda2f29ea949e58b726e4eb22782dd').then((res)=>{
      console.log(res.data.articles)
      setdata(res.data.articles) 
    }).catch((error)=>{
setiserror(error.message)
    })
  },[cat])
  return (
    <div className="container my-4">
      <h3>
        <u>TOP HEADLINES</u>
      </h3>
      <div className="container d-flex justify-content-center align-items-center flex-column my-3" style={{minHeight:'100vh'}}>
      {iserror !== " " && <h2>{iserror}</h2>}
        {
          data.map((items,index)=>{
            return(
              <>
              <div key={index} className="container my-3 p-3" style={{width:'600px',boxShadow:'2px 2px 10px silver', borderRadius:'10px'}}>
                <h5  className="my-2">{items.title}</h5>
                <div className=" d-flex justify-content-center align-items-center ">  
                <img src={items.urlToImage} alt="image not found" className="img-fluid" style={{width:'100%', height:'300px',objectFit:'cover'}}/>
                </div>
                <p className="my-1">{items.content}</p>
                <Link to={items.url} target='_blank'>view more</Link>
              </div>
            </>
            )
          
          })
        }
      </div>
    </div>
  );
}

export default Fetchdata;
