import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md"; 
import { useDispatch } from 'react-redux';
import { removeCart, addtoCart, removeOneDec } from '../redux/Slice/CartSlice';
import toast from 'react-hot-toast';



const ItemCard = ({ id, name, price, img, qty }) => {
  const dispatch = useDispatch();
  const delItem = () => {
    dispatch(removeCart({ id, name, price, img, qty }))

  }

  return (
    <div className='item-container'>
      <MdDelete
        onClick={() => {
          delItem(id);
          toast(`${name} Removed!`, { icon: '👏' });
        }}
        className='delete-icon'
      />

      <img className='item-img' src={img} alt={name} />

      <div style={{ lineHeight: "1.5rem" }}>
        <h2 style={{ fontSize: '0.8rem', fontWeight: 'bold', width: "130px", color: "#1f2937" }}>{name}</h2>
        <div className='item-p-section'>
          <span className='item-price'>{price} PKR</span>

          <div className='btns-one'>
            <AiOutlineMinus onClick={() => qty > 1 ? dispatch(removeOneDec({ id })) : (qty = 0)} className='custom-button' />

            <span>{qty}</span>
            <AiOutlinePlus onClick={() => dispatch(addtoCart({ id, name, price, img, qty }))} className='custom-button' />
          </div></div>
      </div>
    </div>

  )
}

export default ItemCard