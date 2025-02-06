import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {DEL, ADD, REMOVE} from "../redux/actions/Action";

const CardsDetails = () => {
  const [data,setData] = useState([]);
  const { id } = useParams(); 
  const getData = useSelector((state) => state.cartreducer.carts);

  const history = useNavigate();
  const campare = () => {
    const comparedData = getData.filter((e) => e.id === Number(id));
    setData(comparedData);
  };

  const addToCart = (e) =>{
    dispatch(ADD(e));
  }


  useEffect(() => {
    campare();
  }, [id, getData]);

  const dispatch = useDispatch();
   const dlt = (id) =>{
      dispatch(DEL(id));
      history('/');
    }
    const remove = (item) =>{
      dispatch(REMOVE(item));
     
    }

    const total = () =>{
      let price = 0;
      getData.map((dta) =>{
        price = dta.price * dta.qnty + price
      });
    }

  return (
    <div className="container mt-2">
      <h2 className="text-center">Item Details Page</h2>
      <section className="container mt-3">
        <div className="iteamsdetails">
          {data.length > 0 ? (
            data.map((curData) => (
              <>
                <div className="items_img">
                  <img src={curData.imgdata} alt={curData.rname} />
                </div>
                <div className="details">
                  <Table>
               
                      <tr>
                        <td>
                          <p>
                            <strong>Restaurant:</strong> {curData.rname}
                          </p>
                          <p>
                            <strong>Price:</strong> {curData.price}
                          </p>
                          <p>
                            <strong>Dishes:</strong> {curData.address}
                          </p>
                          <p>
                            <strong>Total:</strong> {curData.price * curData.qnty}
                          
                          </p>
                          <div className="mt-5 d-flex justify-content-between align-items-center" style={{width:100, cursor:'pointer',background:"#ddd", color:'#111'}}>
                            <span style={{fontSize:24}} onClick={curData.qnty <=1 ? ()=>dlt(curData.id) :()=>remove(curData)}>-</span>
                            <span style={{fontSize:22}}>{curData.qnty}</span>
                            <span style={{fontSize:24}} onClick={()=>addToCart(curData)}>+</span>
                          </div>
                        </td>
                        <td>
                          <p>
                            <strong>Rating:</strong>
                            <span
                              style={{
                                background: "green",
                                color: "#fff",
                                padding: "2px 5px",
                                borderRadius: "5px",
                              }}
                            >
                              {curData.rating} ★
                            </span>
                          </p>
                          <p>
                            <strong>Order Review:</strong> {curData.somedata}
                          </p>
                          <p>
                            <strong>Remove:</strong>
                            <span>
                              <i
                                className="fas fa-trash"
                                onClick={()=>dlt(curData.id)}
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }} 
                              ></i>
                            </span>
                          </p>
                        </td>
                      </tr>
                 
                  </Table>
                </div>
              </>
            ))
          ) : (
            <p>No data found for this item.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default CardsDetails;
