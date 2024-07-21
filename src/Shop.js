import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "./state/index"
import { bindActionCreators } from "redux";

const Shop = () => {
  const dispatch = useDispatch();
  const {withdrawMoney,depositeMoney} = bindActionCreators(actionCreators,dispatch)
  return (
    <>
      <h1>Deposit/Withdraw Money</h1>
      <div className="text-center">
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn btn-primary" onClick={()=> withdrawMoney(100)}>-</button>
          <p className="mb-0 mx-3">Update Balance</p>
          <button className="btn btn-primary"  onClick={()=> depositeMoney(100)}>+</button>
        </div>
      </div>
    </>
  );
};

export default Shop;
