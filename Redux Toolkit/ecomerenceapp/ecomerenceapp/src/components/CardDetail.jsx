import React, { useEffect, useState } from 'react'
import './cartstyle.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, emptycartitem, removeCart, removeOneDec } from '../redux/features/CartSlices';
import toast from 'react-hot-toast';

const CardDetail = () => {
    const { carts } = useSelector((state) => state.allcart);
    const dispatch = useDispatch();
    const [price, setPrice] = useState(0);
    const [totalquantity, setTotalQuantity] = useState(0);

    const total = () =>{
        let totalprice = 0;
        carts.map((ele, item)=>{

            totalprice = ele.price * ele.qnty + totalprice
        });
        setPrice(totalprice)

    }
    const total_q = () => {
        let totalquantity = 0;
        carts.map((ele) => {
            totalquantity += ele.qnty;
        });
        setTotalQuantity(totalquantity);
    };

    useEffect(() => {
        total();
        total_q();
    }, [carts]); 

    const handleIncrement = (e)=>{
        dispatch(addToCart(e));
    }

    useEffect(() => {
        total();
    }, [carts]);

    const decIncrement = (e)=>{
        dispatch(removeCart(e));
        toast.success("Item removed from your Cart")
    }
    const emptycart = ()=>{
        dispatch(emptycartitem());
        toast.success("Your Cart is empty")
    }
    
    
    const handleSingleDecrement = (e)=>{
        dispatch(removeOneDec(e))
    }

  return (
   <>
    <div className='row justify-content-center m-0'>
                <div className='col-md-8 mt-5 mb-5 cardsdetails'>
                    <div className="card">
                        <div className="card-header bg-dark p-3">
                            <div className='card-header-flex'>
                                <h5 className='text-white m-0'>Cart Calculation {carts.length > 0 ? `(${carts.length})`: ''}</h5>
                                {
                                    carts.length > 0 ? <button className='btn btn-danger mt-0 btn-sm'
                                    onClick={emptycart} ><i className='fa fa-trash-alt mr-2'></i><span>EmptyCart</span></button>
                                        : " "
                                }
                            </div>

                        </div>
                        <div className="card-body p-0">
                                {
                                    carts.length === 0 ? <table className='table cart-table mb-0'>
                                        <tbody>
                                            <tr>
                                                <td colSpan={6}>
                                                    <div className='cart-empty'>
                                                        <i className='fa fa-shopping-cart'></i>
                                                        <p>Your Cart Is Empty</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table> :
                                    <table className='table cart-table mb-0 table-responsive-sm'>
                                        <thead>
                                            <tr>
                                                <th>Action</th>
                                                <th>Product</th>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Qty</th>
                                                <th className='text-right'> <span id="amount" className='amount'>Total Amount</span></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                carts.map((data,index)=>{
                                                    return (
                                                        <>
                                                            <tr>
                                                                <td>
                                                                    <button key={index} className='prdct-delete'
                                                                    onClick={()=>decIncrement(data.id)}
                                                                    ><i className='fa fa-trash-alt'></i></button>
                                                                </td>
                                                                <td><div className='product-img'><img src={data.imgdata} alt="" /></div></td>
                                                                <td><div className='product-name'><p>{data.dish}</p></div></td>
                                                                <td>{data.price}</td>
                                                                <td>
                                                                    <div className="prdct-qty-container">
                                                                        <button className='prdct-qty-btn' type='button' 
                                                                        onClick={data.qnty <=1 ?()=>decIncrement(data.id) :()=>handleSingleDecrement(data)}            >                              
                                                                            
                                                                            <i className='fa fa-minus'></i>
                                                                        </button>
                                                                        <input type="text" value={data.qnty} className='qty-input-box' disabled name="" id="" />
                                                                        <button className='prdct-qty-btn' type='button' onClick={()=>handleIncrement(data)} >
                                                                            <i className='fa fa-plus'></i>
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                                <td className='text-right'> {data.qnty * data.price} PKR</td>
                                                            </tr>
                                                        </>
                                                    )
                                                })
                                            }
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>&nbsp;</th>
                                                <th colSpan={3}>&nbsp;</th>
                                                <th>Items In Cart <span className='ml-2 mr-2'>:</span><span className='text-danger'>{totalquantity}</span></th>
                                                <th className='text-right'>Total Price<span className='ml-2 mr-2'>:</span><span className='text-danger'>{price}</span></th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                }
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default CardDetail