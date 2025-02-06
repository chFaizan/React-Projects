import React from 'react'
import Announcement from '../../components/announcement/Announcement'
import NavBar from '../../components/navbar/NavBar'
import Slider from '../../components/slider/Slider'
import Categories from '../../components/categories/Categories'
import NewArrival from '../../components/products/NewArrival'
import BestSeller from '../../components/products/BestSeller'
import Newsletter from '../../components/newsletter/Newsletter'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <>
    <Announcement />
    <NavBar />
    <Slider />
    <Categories />
    <NewArrival />
    <BestSeller />
    <Newsletter />
    <Footer />
    </>
  )
}

export default Home





// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { sliderItems, categories, newArrivals, bestsellers } from "../../data"; 

// const Home = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const currentUser = JSON.parse(localStorage.getItem("currentUser"));
//     if (!currentUser) {
//       alert("You must log in first!");
//       navigate("/login");
//     }
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("currentUser");
//     alert("Logged out successfully!");
//     navigate("/login");
//   };

//   return (
//     <div>
//       <h1>Welcome to the Home Page!</h1>
//       <button onClick={handleLogout}>Logout</button>
//       <div>
//         <h2>Featured Categories</h2>
//         {categories.map((category) => (
//           <div key={category.id}>
//             <img src={category.img} alt={category.title} />
//             <h3>{category.title}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;