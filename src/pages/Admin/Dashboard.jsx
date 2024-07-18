import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div className="stats flex items-center gap-[10px] rounded-lg bg-transparent shadow scrollbar-hide md:gap-[30px]">
        <div className="stat rounded-lg border-none bg-gradient-to-r from-indigo-900 to-indigo-400">
          <div className="stat-figure text-secondary">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="text-[2rem] text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM8 9H16V11H8V9ZM8 13H16V15H8V13Z"></path>
            </svg>
          </div>
          <div className="stat-title font-semibold text-white">Number of Bills</div>
          <div className="stat-value my-4 text-white">312</div>
          <div className="stat-desc text-[14px] text-white">February - July</div>
        </div>
        <div className="stat rounded-lg border-none bg-gradient-to-r from-cyan-500 to-blue-600">
          <div className="stat-figure text-secondary">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[2rem] text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <div className="stat-title font-semibold text-white">Number of User</div>
          <div className="stat-value my-4 text-white">122</div>
          <div className="stat-desc text-[14px] text-white">
            Increase ↗ 400 (22%)
          </div>
        </div>
        <div className="stat rounded-lg border-none bg-gradient-to-r from-red-400 to-primary">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title font-semibold text-white">Revenue</div>
          <div className="stat-value my-4 text-[1.1rem] text-white">100.000VNĐ</div>
          <div className="stat-desc text-[14px] text-white">
            Increase ↗ 90 (14%)
          </div>
        </div>
      </div>

      <div className="mb-[25px]">
        <div className="mb-[10px] mt-[20px] overflow-x-auto rounded-lg bg-base-100 p-3 shadow-md xl:mt-[40px]">
          <div className="mb-[10px] text-[1.1rem] font-semibold text-black">
            Latest Bills
          </div>
          <div className="h-full overflow-x-auto">
            <table className="table table-zebra">
              <thead className="rounded-lg bg-yellow-400 text-center text-[.9rem]">
                <tr>
                  <th>Serial Number</th>
                  <th>Branch</th>
                  <th>Quantity</th>
                  <th>Total Amount</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td>1</td>
                  <td>TP.HCM</td>
                  <td>3</td>
                  <td>$1,000.00</td>
                  <td>20/3/2024 lúc 14:02</td>
                  <td>
                    <button className="w-[120px] rounded-lg bg-green-500 p-2 text-center text-[1rem] text-white">
                      Placed
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>TP.HCM</td>
                  <td>3</td>
                  <td>$1,000.00</td>
                  <td>20/3/2024 lúc 14:02</td>
                  <td>
                    <button className="w-[120px] rounded-lg bg-primary p-2 text-center text-[1rem] text-white">
                      Cancelled
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Hà Nội</td>
                  <td>3</td>
                  <td>$1,000.00</td>
                  <td>20/3/2024 lúc 14:02</td>
                  <td>
                    <button className="w-[120px] rounded-lg bg-orange-400 p-2 text-center text-[1rem] text-white">
                      Placing
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>TP.HCM</td>
                  <td>3</td>
                  <td>$1,000.00</td>
                  <td>20/3/2024 lúc 14:02</td>
                  <td>
                    <button className="w-[120px] rounded-lg bg-green-500 p-2 text-center text-[1rem] text-white">
                      Placed
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex items-center justify-between text-center">
          <div className="">Trang 1/23</div>
          <div className="join justify-center rounded-lg">
            <button className="btn join-item bg-primary text-white">1</button>
            <button className="btn join-item">2</button>
            <button className="btn join-item">...</button>
            <button className="btn join-item">12</button>
            <button className="btn join-item">13</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
