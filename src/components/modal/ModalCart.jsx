import { Button, Modal } from "antd";
import "./modal.css";
import "antd/dist/antd.min.css";
import { useDispatch } from "react-redux";
import { setItemInCart, deleteItemFromCart, deleteProduct } from "../../redux/cartReducer";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";

export default function ModalCart({ visible, setIsModalVisible, cartItems }) {
  const dispatch = useDispatch();

  const totalPrice = Object.values(cartItems).reduce(
    (prev, cur) => prev + cur.product.price*cur.count,
    0
  );

  const curtProducts = Object.values(cartItems)

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        title="Cart"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <div className="modal_total_price" key="totalPrice">
            Total price: {totalPrice}$
          </div>,
          <Button key="back" onClick={handleCancel}>
            Close
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            To cart
          </Button>,
        ]}
      >
        {curtProducts.length !== 0 ? (
          curtProducts.map((item) => {
            return (
              <div className="modal_card" key={item.product.id}>
                <div className="modal_img">
                  <img src={item.product.img} alt="" className="modal_card_img" />
                </div>
                <div className="modal_card_info">
                  {item.product.name}
                  <p>{item.product.price}$</p>
                </div>
                <div className="modal_card_amount">
                  <button className="modal_card_count_btn" onClick={() => dispatch(deleteItemFromCart(item.product))}>
                    <AiOutlineMinusCircle />
                  </button>
                  {item.count}
                  <button className="modal_card_count_btn" onClick={() => dispatch(setItemInCart(item.product))}>
                    <AiOutlinePlusCircle />
                  </button>
                </div>
                <button
                  className="modal_card_btn"
                  onClick={() => dispatch(deleteProduct(item.product))}
                >
                  Delete item
                </button>
              </div>
            );
          })
        ) : (
          <div>There is no products</div>
        )}
      </Modal>
    </>
  );
}
