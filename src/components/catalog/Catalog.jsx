import React from "react";
import "./catalog.css";
import { MdShoppingBasket } from "react-icons/md";
import { Popover } from "antd";
import { useState } from "react";
import { products } from "../../datasets/products";
import { useDispatch } from 'react-redux';
import { setItemInCart } from "../../redux/cartReducer";

export default function Catalog() {
  const [triggerName, setTriggerName] = useState("click");
  const dispatch = useDispatch()

  const handleTrigger = (key) => {
    if (triggerName !== key) {
      setTriggerName(key);
    }
  };

  return (
    <div className="catalog">
      <div className="container">
        {products.filter((item) => item.category === 'product').slice(0,8).map((item) => {
          return (
            <div className="catalog_item" key={item.id}>
              <h1>{item.name}</h1>
              <img src={item.img} alt="" className="item_img" />
              <div className="item_footer">
                <div className="price">{item.price}$</div>
                <Popover
                  content="Added to card"
                  trigger={triggerName}
                  onClick={() => {handleTrigger("hover")}}
                  onMouseLeave={() => {handleTrigger("click")}}
                  mouseLeaveDelay={1}
                >
                  <button
                    className="add_item"
                    onClick={() => dispatch(setItemInCart(item))}
                  >
                    Add to <MdShoppingBasket className="item_bag_icon" />
                  </button>
                </Popover>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
