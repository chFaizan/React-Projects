import React from 'react';
import FoodData from "./FoodData";
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart } from "../redux/Slice/CartSlice";
import toast, { Toaster } from 'react-hot-toast';

const FoodItems = () => {
    const category = useSelector((state) => state.category.category);
    const search = useSelector((state) => state.search.search);
    
    const dispatch = useDispatch();

    const addToCart = (data) => {
        dispatch(addtoCart(data));
        toast.success(`${data.name} added to the cart!`);
    };

    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <div className='food-item-container'>
                {
                    FoodData.filter((food) => {

                        if (category === "All") {
                            return food.name.toLowerCase().includes(search.toLowerCase());
                        }
                        return (
                            category === food.category &&
                            food.name.toLowerCase().includes(search.toLowerCase())
                        );
                    }).map((curData, id) => (
                        <div key={id} className="card-section">
                            <div className="card">
                                <div className="img-section">
                                    <img src={curData.img} alt={curData.name} />
                                </div>
                                <div className="price-section">
                                    <div className="name-section">{curData.name}</div>
                                    <div className="price">{curData.price} PKR</div>
                                </div>
                                <div className="descr-section">
                                    {curData.desc}
                                </div>
                                <div className="rating-section">
                                    <div className="rate">
                                        <div className="star">
                                            <img src="star.png" alt="rating star" />
                                        </div>
                                        {curData.rating}
                                    </div>
                                    <button
                                        style={{ cursor: "pointer" }}
                                        onClick={() => addToCart(curData)}
                                        className='addtocart'
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default FoodItems;
