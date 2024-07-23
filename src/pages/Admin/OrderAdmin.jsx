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
      const updatedOrders = orders.map((order) =>
        order.id === selectedOrder.id ? { ...order, status: newStatus } : order
      );
      setOrders(updatedOrders);
      closeModal();
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  return (
    <div className="flex flex-col p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">
        Danh Sách Đơn Hàng
      </h1>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-6 text-xs font-medium text-gray-500 uppercase text-center tracking-wider">
                Mã đơn hàng
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tổng tiền
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ngày đặt hàng
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Trạng Thái
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Thao Tác
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="py-4 px-6 text-sm font-medium text-gray-900 text-center">
                  {order.id}
                </td>
                <td className="py-4 px-6 text-sm text-gray-500">
                  {formatCurrency(order.total)} VNĐ
                </td>
                <td className="py-4 px-6 text-sm text-gray-500">
                  {formattedDate(order.date)}
                </td>
                <td className="py-4 px-6 text-sm">
                  <span
                    className={`px-2 py-1 rounded-full text-white font-semibold ${
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
                <td className="py-4 px-6 text-sm">
                  {order.status === 3 || order.status === 4 ? (
                    <button
                      className="bg-gray-500 w-24 text-white hover:bg-gray-600 px-4 py-2 rounded"
                      onClick={() => openModal(order)}
                    >
                      Chi tiết
                    </button>
                  ) : (
                    <button
                      className="bg-orange-500 w-24 text-white hover:bg-orange-600 px-4 py-2 rounded"
                      onClick={() => openModal(order)}
                    >
                      Cập nhật
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && selectedOrder && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-6xl w-full">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">
                Chi Tiết Đơn Hàng
              </h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
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
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Sản Phẩm
                      </th>
                      <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Hình Ảnh
                      </th>
                      <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Giá
                      </th>
                      <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        SL
                      </th>
                      <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tổng
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {orderDetails.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="py-4 px-6 text-sm font-medium text-gray-900">
                          {item.name}
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-500">
                          <img
                            src={imagePaths[item.img]}
                            alt={item.name}
                            className="w-20 h-20 object-cover"
                          />
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-500">
                          {formatCurrency(item.price)}
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-500">
                          {item.quantity}
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-500">
                          {formatCurrency(item.price * item.quantity)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 flex justify-between items-center bg-gray-50 border-t border-gray-200">
                <div className="text-lg text-gray-800">
                  <b>Mã Đơn Hàng:</b> {selectedOrder.id}
                </div>
                <div>
                  <b className="text-gray-700">Ngày Đặt Hàng:</b>{" "}
                  {formattedDate(selectedOrder.date)}
                </div>
                <div className="text-lg text-gray-800">
                  <b>Tổng:</b> {formatCurrency(selectedOrder.total)}
                </div>
              </div>
              <div className="p-4 flex flex-col space-y-2">
                
                <div>
                  <b className="text-gray-700">Thông Tin Người Đặt Hàng:</b>
                </div>
                <div className="text-gray-600">
                  <p>
                    <b>Họ Tên:</b> {selectedOrder.recipient_name}
                  </p>
                  <p>
                    <b>Địa Chỉ:</b> {selectedOrder.address}
                  </p>
                  <p>
                    <b>Số Điện Thoại:</b> {selectedOrder.phone}
                  </p>
                </div>
              </div>
              {selectedOrder.status === 3 || selectedOrder.status === 4 ? (
                <div className="mb-4 flex items-center">
                  <p className="mr-4 text-gray-700">Trạng Thái:</p>
                  <span
                    className={`px-2 py-1 rounded-full text-white font-semibold ${
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
                  <p className="mr-4 text-gray-700">Trạng Thái:</p>
                  <form
                    onSubmit={handleStatusUpdate}
                    className="flex items-center"
                  >
                    <input
                      type="hidden"
                      name="idOrder"
                      value={selectedOrder.id}
                    />
                    <select
                      name="new_status"
                      value={newStatus}
                      onChange={(e) => setNewStatus(e.target.value)}
                      className="border rounded-lg p-2 text-gray-700"
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
                      className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
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
  );
};

export default OrderAdmin;
