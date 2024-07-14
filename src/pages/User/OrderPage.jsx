import React, { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import imagePaths from "../../assets/menu/menu";

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
        setSelectedInvoice(invoices.find((inv) => inv.id === invoiceId));
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

  const formatDate = (date) => {
    return format(new Date(date), "dd/MM/yyyy");
  };

  return (
    <div>
      <div className="bg-white shadow-md rounded p-6">
        <h4 className="text-xl font-semibold mb-4">Danh Sách Hóa Đơn</h4>
        <div className="space-y-4">
          {invoices.map((invoice) => (
            <div
              key={invoice.id}
              className="bg-gray-100 p-4 rounded-md shadow cursor-pointer hover:bg-gray-200"
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
        <div className="fixed inset-0 overflow-y-auto flex items-center justify-center z-50">
          <div className="w-full h-full bg-black opacity-25 fixed inset-0"></div>
          <div className="modal-content z-20 bg-white p-6 rounded shadow-lg w-full max-w-4xl overflow-y-auto">
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
              <p className="mb-4">Mã Hóa Đơn: {selectedInvoice.id}</p>
              <table className="min-w-full bg-white border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 px-4">Sản Phẩm</th>
                    <th className="py-2 px-4">Ảnh</th>
                    <th className="py-2 px-4">Số Lượng</th>
                    <th className="py-2 px-4">Giá</th>
                    <th className="py-2 px-4">Tổng</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedInvoiceDetails.map((detail) => (
                    <tr key={detail.id} className="border-b flex-col">
                      <td className="py-2 px-4">{detail.name}</td>
                      <td className="py-2 pl-4">
                        <img
                          src={imagePaths[detail.img]}
                          alt={detail.name}
                          className="h-20 w-20 object-cover rounded"
                        />
                      </td>
                      <td className="py-2 px-4 text-center">{detail.quantity}</td>
                      <td className="py-2 px-4 text-center">
                        {detail.price.toLocaleString()} VNĐ
                      </td>
                      <td className="py-2 px-4 text-center">
                        {detail.total.toLocaleString()} VNĐ
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-between mt-4">
                <p>Ngày tạo: {formatDate(selectedInvoice.date)}</p>
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
