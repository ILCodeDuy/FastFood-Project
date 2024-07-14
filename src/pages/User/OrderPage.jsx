import React, { useState, useEffect } from "react";
import axios from "axios";

const OrderPage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user.id; // Replace with actual user ID or get it dynamically
  const [invoices, setInvoices] = useState([]);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [selectedInvoiceDetails, setSelectedInvoiceDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/invoices/${userId}`)
      .then((response) => {
        setInvoices(response.data);
      })
      .catch((error) => {
        console.error("Error fetching invoices:", error);
      });
  }, [userId]);

  const showInvoiceDetails = (invoiceId) => {
    axios
      .get(`http://localhost:3001/api/orderdetails/${invoiceId}`)
      .then((response) => {
        setSelectedInvoice(invoices.find(inv => inv.id === invoiceId));
        setSelectedInvoiceDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching invoice details:", error);
      });
  };

  const hideInvoiceDetails = () => {
    setSelectedInvoice(null);
    setSelectedInvoiceDetails([]);
  };

  return (
    <div>
      <div className="bg-white shadow-md rounded p-6">
        <h4 className="text-xl font-semibold mb-4">Danh Sách Hóa Đơn</h4>
        <div className="space-y-4">
          {invoices.map((invoice) => (
            <div
              key={invoice.id}
              className="bg-gray-100 p-4 rounded-md shadow cursor-pointer"
              onClick={() => showInvoiceDetails(invoice.id)}
            >
              <div className="flex justify-between">
                <div>Mã Hóa Đơn: {invoice.id}</div>
                <div>Ngày: {invoice.date}</div>
                <div>Tổng Tiền: {invoice.total.toLocaleString()} VNĐ</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedInvoice && (
        <div className="modal-bg active">
          <div className="bg-white p-6 rounded shadow-lg w-[70%]">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-xl font-semibold">Chi Tiết Hóa Đơn</h4>
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={hideInvoiceDetails}
              >
                Đóng
              </button>
            </div>
            <div id="invoiceDetails">
              <p>Mã Hóa Đơn: {selectedInvoice.id}</p>
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2">Sản Phẩm</th>
                    <th className="py-2">Ảnh</th>
                    <th className="py-2">Số Lượng</th>
                    <th className="py-2">Giá</th>
                    <th className="py-2">Tổng</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedInvoiceDetails.map((detail) => (
                    <tr key={detail.id}>
                      <td className="py-2 ml-20">{detail.name}</td>
                      <td className="py-2">
                        <img
                          src={`../assets/img/${detail.img}`}
                          alt={detail.name}
                          width="50"
                          height="50"
                        />
                      </td>
                      <td className="py-2">{detail.quantity}</td>
                      <td className="py-2">
                        {detail.price.toLocaleString()} VNĐ
                      </td>
                      <td className="py-2">
                        {detail.total.toLocaleString()} VNĐ
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex place-content-between">
                <p>Ngày: {selectedInvoice.date}</p>
                <p>Tổng Tiền: {selectedInvoice.total.toLocaleString()} VNĐ</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderPage;
