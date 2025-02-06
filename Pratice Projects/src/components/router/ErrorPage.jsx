import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
    const navigate =useNavigate();

    const handleGoBack = () =>{
        navigate(-1);
    }


    const styleBtn = () => {
        return {
          backgroundColor: "red",
          padding: "12px",
          marginTop:"10px",
          marginLeft: "47%",
          color: "wheat",
        };
      };
      
  return (
    <>
    <h1 style={{textAlign:"center", marginTop:"20%", color:"red"}}>error 404 Found</h1>
    <br />
    <button style={styleBtn()} onClick={handleGoBack} >Go Back</button>
    </>
  )
}
