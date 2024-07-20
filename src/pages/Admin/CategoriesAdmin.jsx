import React from "react";

const CategoriesAdmin = () => {
    const openModal = () => {
        document.getElementById("my_modal_4").showModal();
    };

  return (
    <div className="h-full">
      <div className="flex justify-between">
        <div className="font-semibold text-xl">
          <h3>Products</h3>
        </div>
        <button className="btn bg-blue-500" onClick={openModal}>
          <svg
            stroke="currentColor"
            fill="#FFF"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="text-[1.4rem] text-whites"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Circle_Plus">
              <g>
                <path d="M15,12.5H12.5V15a.5.5,0,0,1-1,0V12.5H9a.5.5,0,0,1,0-1h2.5V9a.5.5,0,0,1,1,0v2.5H15A.5.5,0,0,1,15,12.5Z"></path>
                <path d="M12,21.932A9.934,9.934,0,1,1,21.932,12,9.944,9.944,0,0,1,12,21.932ZM12,3.065A8.934,8.934,0,1,0,20.932,12,8.944,8.944,0,0,0,12,3.065Z"></path>
              </g>
            </g>
          </svg>
        </button>
      </div>

      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="text-3xl font-semibold mb-6">Thêm Sản Phẩm</h3>
          <div className="modal-action w-full">
            <form className="w-full space-y-4" method="dialog">
              <div>
                <label
                  htmlFor="code"
                  className="block text-sm font-medium text-gray-700"
                >
                  Code:
                </label>
                <input
                  type="text"
                  id="code"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-gray-700"
                >
                  Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Price:
                </label>
                <input
                  type="number"
                  step="0.01"
                  id="price"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description:
                </label>
                <textarea
                  id="description"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="img"
                  className="block text-sm font-medium text-gray-700"
                >
                  Image:
                </label>
                <input
                  type="file"
                  id="img"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="categoryId"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category ID:
                </label>
                <input
                  type="number"
                  id="categoryId"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="modal-action flex justify-between mt-6">
                <button type="submit" className="btn btn-primary">
                  Add Product
                </button>
                <button type="button" className="btn btn-secondary">
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>

      <div className="bg-white rounded-xl p-1 mt-6">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Name</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Manipulation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>id</th>
                <td>name</td>
                <td>img</td>
                <td>quantity</td>
                <td>price</td>
                <td>
                  <button className="btn bg-yellow-300 text-white mr-4">
                    Sửa
                  </button>
                  <button className="btn bg-red-500 text-white">Xoá</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CategoriesAdmin;
