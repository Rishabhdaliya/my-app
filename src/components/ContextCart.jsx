import React from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delItem } from "../redux/actions/index";
import { CartContext } from "./Cart";
import DATA from "../Data";
import { useHistory, NavLink } from "react-router-dom";
import { useAuth } from "../components/buttons/firebase";

const ContextCart = (cartItem) => {
  const history = useHistory();
  const item = useContext(CartContext);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.addItem);
  const currentUser = useAuth();
    
  const handleClose = (item) => {
    
    dispatch(delItem(item));
  };

  const increment = (id) => {
    
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  const decrement = (id) => {
    
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  const CartItems = (cartItem) => {

    return (
      <>
        <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
          <div className="container my-auto">
            <button
              onClick={() => handleClose(cartItem)}
              className="btn-close float-end "
              aria-label="Close"
            ></button>
            <div className="row  ">
              <div className="col-md-3 my-auto">
                <img
                  src={cartItem.img}
                  alt={cartItem.title}
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="col-md-3 my-auto">
                <h3>{cartItem.title}</h3>
                <p className="lead fw-bold">₹{cartItem.price}</p>
              </div>
              <div className="col-md-3 my-auto">
                <div className="mid">
                  <p className=" lead fw-bold ">
                    <i
                      className="fa fa-minus me-3"
                      onClick={() => decrement(cartItem.id)}
                    ></i>
                    <input
                      type="text"
                      placeholder={cartItem.quantity}
                      size="1"
                      className="me-3 "
                    />

                    <i
                      className="fa fa-plus me-2"
                      onClick={() => increment(cartItem.id)}
                    ></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
      </>
    );

    const emptyCart = () => {
      return (
        <div className="px-4 my-5 bg-light rounded-3 py-5">
          <div className="container py-4">
            <div className="row">
              <h3>Your Cart is Empty</h3>
            </div>
          </div>
        </div>
      );
    };

    const button = () => {
      return (
        <div className="container">
          <div className="row">
            <NavLink
              to="/checkout"
              className="btn btn-outline-primary mb-5 w-25 mx-auto"
            >
              Proceed To checkout
            </NavLink>
          </div>
        </div>
      );
    };
  };

  const handleCheckout = () => {
    debugger
    history.push('checkout')
  }

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const button = () => {
    return (
      <div className="container">
        <div className="row">
          {/* <NavLink
            to="/checkout"
            className="btn btn-outline-primary mb-5 w-25 mx-auto"
          >
            Proceed To checkout 
          </NavLink> */}
          <button
            type="button"
            className="btn btn-outline-primary ms-2"
            disabled={!(currentUser && currentUser.email)}
            onClick={handleCheckout}
          >
            <span className="fa fa-user-plus me-1"></span> {currentUser && currentUser.email ? 'Proceed To checkout' : 'Please login first' } 
          </button>
        </div>
      </div>
    );
  };
  
  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(CartItems)}
      {state.length !== 0 && button()}
    </>
  );
};

export default ContextCart;
