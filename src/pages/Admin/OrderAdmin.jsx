import React, { useState, useEffect } from "react";
import axios from "axios";
import { formattedDate } from "../../utils/formatDate";
import { formatCurrency } from "../../utils/formatCurrency";
import imagePaths from "../../assets/menu/menu";

const OrderAdmin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orderDetails, setOrderDetails] = useState([]);
  const [orders, setOrders] = useState([]);
  const [newStatus, setNewStatus] = useState("");

  useEffect(() => {
    // Fetch orders data from the server
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/orders");
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const openModal = async (order) => {
    setSelectedOrder(order);
    try {
      const response = await axios.get(
        `http://localhost:3001/api/orderdetails/${order.id}`
      );
      setOrderDetails(response.data);
    } catch (error) {
      console.error("Error fetching order details:", error);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
    setOrderDetails([]);
    setNewStatus("");
  };

  const handleStatusUpdate = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (!selectedOrder || newStatus === "") {
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/api/updateOrderStatus",
        {
          idOrder: selectedOrder.id,
          new_status: newStatus,
        }
      );

      console.log(response.data.message);
      // Update local state or refetch orders to reflect changes
      const updatedOrders = orders.map(order =>
        order.id === selectedOrder.id
          ? { ...order, status: newStatus }
          : order
      );
      setOrders(updatedOrders);
      closeModal();
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  return (
    <div className="flex">
      <div className="flex-1 p-5">
        <div className="mt-10">
          <h1 className="text-3xl text-gray-800 mb-5">Đơn hàng</h1>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="py-2 px-4 border-b">Mã đơn hàng</th>
                  <th className="py-2 px-4 border-b">Tổng tiền</th>
                  <th className="py-2 px-4 border-b">Ngày đặt hàng</th>
                  <th className="py-2 px-4 border-b">Trạng Thái</th>
                  <th className="py-2 px-4 border-b">Thao Tác</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="text-gray-700">
                    <td className="py-2 px-4 border-b text-center">{order.id}</td>
                    <td className="py-2 px-4 border-b text-center">
                      {formatCurrency(order.total)} VNĐ
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {formattedDate(order.date)}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      <span
                        className={`font-bold text-white px-2 py-1 rounded ${
                          order.status === 0
                            ? "bg-red-500"
                            : order.status === 1
                            ? "bg-yellow-500"
                            : order.status === 2
                            ? "bg-blue-500"
                            : order.status === 3
                            ? "bg-green-500"
                            : "bg-gray-500"
                        }`}
                      >
                        {order.status === 0
                          ? "Chưa Xác Nhận"
                          : order.status === 1
                          ? "Đang Xử Lý"
                          : order.status === 2
                          ? "Vận Chuyển"
                          : order.status === 3
                          ? "Giao Hàng Thành Công"
                          : "Huỷ Đơn"}
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {order.status === 3 || order.status === 4 ? (
                        <button
                          className="btn btn-primary  w-24 text-white border-none bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded"
                          onClick={() => openModal(order)}
                        >Chi tiết
                        </button>
                      ) : (
                        <button
                          className="btn btn-warning w-24 text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded"
                          onClick={() => openModal(order)}
                        >Cập nhật
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && selectedOrder && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-xl font-bold">Hoá đơn chi tiết</h2>
                <button className="text-gray-500" onClick={closeModal}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <div className="max-h-72 overflow-y-auto">
                  <table className="bg-white min-w-full shadow rounded-lg">
                    <thead>
                      <tr className="bg-gray-100 text-gray-700">
                        <th className="py-2 px-4">Sản Phẩm</th>
                        <th className="py-2 px-4">Hình Ảnh</th>
                        <th className="py-2 px-4">Giá</th>
                        <th className="py-2 px-4">SL</th>
                        <th className="py-2 px-4">Tổng</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderDetails.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-100">
                          <td className="py-2 px-4">{item.name}</td>
                          <td className="py-2 px-4">
                            <img
                              src={imagePaths[item.img]}
                              alt={item.name}
                              className="w-16 h-16 object-cover"
                            />
                          </td>
                          <td className="py-2 px-4">
                            {formatCurrency(item.price)}
                          </td>
                          <td className="py-2 px-4">{item.quantity}</td>
                          <td className="py-2 px-4">
                            {formatCurrency(item.price * item.quantity)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-4">
                  <b className="text-lg text-teal-500">
                    Mã Đơn Hàng: {selectedOrder.id}
                  </b>
                </div>
                <div className="flex justify-between mb-4 bg-black text-white p-4">
                  <div>Ngày: {formattedDate(selectedOrder.date)}</div>
                  <div>TỔNG: {formatCurrency(selectedOrder.total)}</div>
                </div>
                <div className="mb-4 flex justify-between w-full">
                  <p className="mr-4">Thông Tin Người Đặt Hàng:</p>
                  <p className="mr-4">
                    Họ Tên: {selectedOrder.recipient_name}
                  </p>
                  <p className="mr-4">Địa Chỉ: {selectedOrder.address}</p>
                  <p className="mr-4">Số Điện Thoại: {selectedOrder.phone}</p>
                </div>
                {selectedOrder.status === 3 || selectedOrder.status === 4 ? (
                  <div className="mb-4 flex items-center">
                    <p className="mr-4">Trạng Thái:</p>
                    <span
                      className={`font-bold text-white px-2 py-1 rounded ${
                        selectedOrder.status === 3
                          ? "bg-green-500"
                          : "bg-gray-500"
                      }`}
                    >
                      {selectedOrder.status === 3
                        ? "Giao Hàng Thành Công"
                        : "Huỷ Đơn"}
                    </span>
                  </div>
                ) : (
                  <div className="mb-4 flex items-center">
                    <p className="mr-4">Trạng Thái:</p>
                    <form onSubmit={handleStatusUpdate}>
                      <input
                        type="hidden"
                        name="idOrder"
                        value={selectedOrder.id}
                      />
                      <select
                        name="new_status"
                        value={newStatus}
                        onChange={(e) => setNewStatus(e.target.value)}
                        className="border rounded p-2"
                      >
                        <option value="0" className="text-red-500">
                          Chưa Xác Nhận
                        </option>
                        <option value="1" className="text-yellow-500">
                          Đang Xử Lý
                        </option>
                        <option value="2" className="text-blue-500">
                          Vận Chuyển
                        </option>
                        <option value="3" className="text-green-500">
                          Giao Hàng Thành Công
                        </option>
                        <option value="4" className="text-gray-500">
                          Hủy Đơn
                        </option>
                      </select>
                      <button
                        type="submit"
                        className="ml-4 bg-blue-500 text-white px-4 py-2 rounded"
                      >
                        Cập nhật trạng thái
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderAdmin;
