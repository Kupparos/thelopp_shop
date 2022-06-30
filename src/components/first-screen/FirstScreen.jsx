import React from "react";
import { useState } from "react";
import { Menu, Dropdown, Space } from "antd";
import { IoMdArrowDropdown } from "react-icons/io";
import { TiPointOfInterest } from "react-icons/ti";
import { MdShoppingBasket } from "react-icons/md";
import "antd/dist/antd.min.css";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./first-screen.css";
import { useSelector } from "react-redux";
import ModalCart from "../modal/ModalCart";

export default function FirstScreen() {
  const menu = (
    <Menu
      items={[
        {
          label: <a href="/#">New</a>,
          key: "0",
        },
        {
          label: <a href="/#">Basics</a>,
          key: "1",
        },
        {
          label: <a href="/#">Accessories</a>,
          key: "2",
        },
      ]}
    />
  );
  SwiperCore.use([Autoplay]);

  const cartItems = useSelector((state) => state.cart.itemsInCart);
  localStorage.setItem('cart', JSON.stringify(cartItems));

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <div className="first_screen">
      <div className="container">
        <header className="menu">
          <div className="dropdown">
            <Dropdown overlay={menu} trigger={["click"]}>
              <a href="/" onClick={(e) => e.preventDefault()}>
                <Space>
                  For men
                  <IoMdArrowDropdown />
                </Space>
              </a>
            </Dropdown>
            <Dropdown overlay={menu} trigger={["click"]}>
              <a href="/" onClick={(e) => e.preventDefault()}>
                <Space>
                  For women
                  <IoMdArrowDropdown />
                </Space>
              </a>
            </Dropdown>
            <Dropdown overlay={menu} trigger={["click"]}>
              <a href="/" onClick={(e) => e.preventDefault()}>
                <Space>
                  For kids
                  <IoMdArrowDropdown />
                </Space>
              </a>
            </Dropdown>
          </div>
          <div className="logo">
            <TiPointOfInterest className="logo_icon" /> THE LOOP
          </div>
          <div className="conditions">
            <a href="/" className="menu_item">
              Payment
            </a>
            <a href="/" className="menu_item">
              Delivery
            </a>
          </div>
          <div className="bag">
            <MdShoppingBasket className="bag_icon" onClick={showModal} />
            <div className="bag_value">
              {Object.values(cartItems).reduce(
                (prev, cur) => prev + cur.count,
                0
              )}
            </div>
            <ModalCart
              visible={isModalVisible}
              setIsModalVisible={setIsModalVisible}
              cartItems={cartItems}
            />
          </div>
        </header>
        <div className="slider">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="proposal">
                <h2>Winter sale</h2>
                <h1>DISCOUNTS UP TO 90%</h1>
                <button>
                  <a href="#sale_item">See models</a>
                </button>
              </div>
              <div className="img">
                <p className="old_prise">900 $</p>
                <p className="new_prise">100 $</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="proposal">
                <h2>Winter sale</h2>
                <h1>DISCOUNTS UP TO 90%</h1>
                <button>
                  <a href="/">See models</a>
                </button>
              </div>
              <div className="img">
                <p className="old_prise">900 $</p>
                <p className="new_prise">100 $</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="proposal">
                <h2>Winter sale</h2>
                <h1>DISCOUNTS UP TO 90%</h1>
                <button>
                  <a href="/">See models</a>
                </button>
              </div>
              <div className="img">
                <p className="old_prise">900 $</p>
                <p className="new_prise">100 $</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="proposal">
                <h2>Winter sale</h2>
                <h1>DISCOUNTS UP TO 90%</h1>
                <button>
                  <a href="/">See models</a>
                </button>
              </div>
              <div className="img">
                <p className="old_prise">900 $</p>
                <p className="new_prise">100 $</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
