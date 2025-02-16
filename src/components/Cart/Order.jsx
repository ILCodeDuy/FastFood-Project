import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../utils/formatCurrency";
import { CartContext } from "../../Service/Cart/cartService";
const Order = () => {
  const { clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")) || {}; // Default to empty object if user is null
  const user_id = user.id || ""; // Default to empty string if user.id is null
  const [recipient_name, setRecipientName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [pmds_id, setSelectedPaymentMethod] = useState("");
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/pmds");
        setPaymentMethods(response.data);
      } catch (error) {
        console.error("Error fetching payment methods:", error);
      }
    };

    fetchPaymentMethods();
    calculateTotalPrice();
  }, []);

  const calculateTotalPrice = () => {
    const cartItems = JSON.parse(localStorage.getItem("shopping_cart")) || [];
    let total = 0;
    cartItems.forEach((item) => {
      total += item.quantity * item.price;
    });
    setTotalPrice(total);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      user_id,
      recipient_name,
      address,
      phone,
      note,
      total: totalPrice,
      pmds_id,
    };

    try {
      const orderResponse = await axios.post("http://localhost:3001/api/orders", order);
      console.log("Order placed successfully:", orderResponse.data);
      const orderId = orderResponse.data.orderId;
      const cartItems = JSON.parse(localStorage.getItem("shopping_cart")) || [];
      const orderDetailPromises = cartItems.map((item) => {
        return axios.post("http://localhost:3001/api/orderdetails", {
          orders_id: orderId,
          products_id: item.id,
          quantity: item.quantity,
          total: item.quantity * item.price,
        });
      });

      const orderDetailResponses = await Promise.all(orderDetailPromises);
      console.log("Order details added successfully:", orderDetailResponses);
      localStorage.removeItem("shopping_cart");
      clearCart();
      alert('Đặt hàng thành công');
      navigate("/")
      // Example: navigate("/order-confirmation");
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <div className="col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
      <h2 className="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
        Đặt Hàng
      </h2>
      <div className="mt-8">
        <form onSubmit={handleSubmit}>
          <label className="flex items-center mb-1.5 text-gray-600 text-sm font-medium">
            Tên người nhận
          </label>
          <input
            type="text"
            name="recipientName"
            value={recipient_name}
            onChange={(e) => setRecipientName(e.target.value)}
            className="block w-full h-11 pr-10 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-gray-400"
            placeholder="Tên của bạn"
            required
          />

          <label className="flex items-center mb-1.5 text-gray-600 text-sm font-medium">
            Địa chỉ nhận hàng
          </label>
          <input
            type="text"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="block w-full h-11 pr-10 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-gray-400"
            placeholder="Địa chỉ của bạn"
            required
          />

          <label className="flex items-center mb-1.5 text-gray-600 text-sm font-medium">
            Số điện thoại
          </label>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="block w-full h-11 pr-10 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-gray-400"
            placeholder="Số điện thoại của bạn"
            required
          />

          <label className="flex items-center mb-1.5 text-gray-600 text-sm font-medium">
            Ghi chú
          </label>
          <textarea
            name="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="block w-full h-24 pr-10 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-gray-400"
            placeholder="Ghi chú (nếu có)"
          ></textarea>

          <label className="flex items-center mb-1.5 text-gray-600 text-sm font-medium">
            Phương thức thanh toán
          </label>
          <select
            name="selectedPaymentMethod"
            value={pmds_id}
            onChange={(e) => setSelectedPaymentMethod(e.target.value)}
            className="block w-full h-11 pr-10 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-gray-400"
            required
          >
            <option value="">Chọn phương thức thanh toán</option>
            {paymentMethods.map((method) => (
              <option key={method.id} value={method.id}>
                {method.name}
              </option>
            ))}
          </select>

          <div className="flex items-center justify-between py-8">
            <p className="font-medium text-xl leading-8 text-black">
              Tổng Tiền:{" "}
            </p>
            <p className="font-semibold text-xl leading-8 text-indigo-600">
              {formatCurrency(totalPrice)}
            </p>
          </div>
          <button
            type="submit"
            className="w-full text-center bg-indigo-600 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700"
          >
            Thanh Toán
          </button>
        </form>
      </div>
    </div>
  );
};

export default Order;
