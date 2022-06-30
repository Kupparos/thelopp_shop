import React from "react";
import "./new-item.css";
import { CgArrowLongRight } from "react-icons/cg";
import { MdShoppingBasket } from "react-icons/md";
import { Popover } from "antd";
import { useState } from "react";
import { products } from "../../datasets/products";
import { useDispatch } from 'react-redux';
import { setItemInCart } from "../../redux/cartReducer";

export default function NewItem() {
  const [triggerName, setTriggerName] = useState("click");
  const dispatch = useDispatch()

  const handleTrigger = (key) => {
    if (triggerName !== key) {
      setTriggerName(key);
    }
  };

  return (
    <div className="new_item">
      <div className="container">
        <h1 className="new_item_title">NEW MODELS</h1>
        <div className="new_items">
          {products.filter((item) => item.category === 'new').map((item) => {
            return (
              <div className="new_item_card" key={item.id}>
                <div className="content">
                  <img src={item.img} alt="" className="img_item_card" />
                  <h2 className="card_title">{item.name}</h2>
                  <p className="item_price">{item.price}$</p>
                  <Popover
                    content="Added to card"
                    trigger={triggerName}
                    onClick={() => {
                      handleTrigger("hover");
                    }}
                    onMouseLeave={() => {
                      handleTrigger("click");
                    }}
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
        <button className="models">
          <a href="/">
            All models
            <CgArrowLongRight className="arrow" />
          </a>
        </button>
      </div>
    </div>
  );
}
