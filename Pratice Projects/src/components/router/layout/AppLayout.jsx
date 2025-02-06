import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useNavigation } from 'react-router-dom';
import "../Apps.css"
    
export default function AppLayout() {
  const colr ={
    color:"red"
  };
  const navigation = useNavigation();

  if(navigation.state === "loading") return <h1 style={colr}>Loading....</h1>
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    
    </>
  )
}
