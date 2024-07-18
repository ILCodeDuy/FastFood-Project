import React from "react";

const Admin = () => {
  return (
    <div>
      <div class="stats flex items-center gap-[10px] rounded-lg bg-transparent shadow scrollbar-hide md:gap-[30px]">
        <div class="stat rounded-lg border-none bg-gradient-to-r from-indigo-900 to-indigo-400">
          <div class="stat-figure text-secondary">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              class="text-[2rem] text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM8 9H16V11H8V9ZM8 13H16V15H8V13Z"></path>
            </svg>
          </div>
          <div class="stat-title font-semibold text-white">Number of Bills</div>
          <div class="stat-value my-4 text-white">312</div>
          <div class="stat-desc text-[14px] text-white">February - July</div>
        </div>
        <div class="stat rounded-lg border-none bg-gradient-to-r from-cyan-500 to-blue-600">
          <div class="stat-figure text-secondary">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-[2rem] text-white"
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
          <div class="stat-title font-semibold text-white">Number of User</div>
          <div class="stat-value my-4 text-white">122</div>
          <div class="stat-desc text-[14px] text-white">
            Increase ↗ 400 (22%)
          </div>
        </div>
        <div class="stat rounded-lg border-none bg-gradient-to-r from-red-400 to-primary">
          <div class="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block h-8 w-8 stroke-current text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div class="stat-title font-semibold text-white">Revenue</div>
          <div class="stat-value my-4 text-[1.1rem] text-white">100.000VNĐ</div>
          <div class="stat-desc text-[14px] text-white">
            Increase ↗ 90 (14%)
          </div>
        </div>
      </div>

      <div class="mb-[25px]">
        <div class="mb-[10px] mt-[20px] overflow-x-auto rounded-lg bg-base-100 p-3 shadow-md xl:mt-[40px]">
          <div class="mb-[10px] text-[1.1rem] font-semibold text-black">
            Latest Bills
          </div>
          <div class="h-full overflow-x-auto">
            <table class="table table-zebra">
              <thead class="rounded-lg bg-yellow-400 text-center text-[.9rem]">
                <tr>
                  <th>Serial Number</th>
                  <th>Branch</th>
                  <th>Quantity</th>
                  <th>Total Amount</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody class="text-center">
                <tr>
                  <td>1</td>
                  <td>TP.HCM</td>
                  <td>3</td>
                  <td>$1,000.00</td>
                  <td>20/3/2024 lúc 14:02</td>
                  <td>
                    <button class="w-[120px] rounded-lg bg-green-500 p-2 text-center text-[1rem] text-white">
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
                    <button class="w-[120px] rounded-lg bg-primary p-2 text-center text-[1rem] text-white">
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
                    <button class="w-[120px] rounded-lg bg-orange-400 p-2 text-center text-[1rem] text-white">
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
                    <button class="w-[120px] rounded-lg bg-green-500 p-2 text-center text-[1rem] text-white">
                      Placed
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="flex items-center justify-between text-center">
          <div class="">Trang 1/23</div>
          <div class="join justify-center rounded-lg">
            <button class="btn join-item bg-primary text-white">1</button>
            <button class="btn join-item">2</button>
            <button class="btn join-item">...</button>
            <button class="btn join-item">12</button>
            <button class="btn join-item">13</button>
          </div>
        </div>
      </div>
      <div class="mt-[0] w-full justify-between overflow-x-hidden xl:mt-[40px]">
        <div class="grid grid-cols-1  gap-[10px] md:grid-cols-2">
          <div class="w-full overflow-x-auto rounded-lg bg-base-100 p-2 shadow-md lg:w-full ">
            <div class="p-2">
              <p class="text-[1.1rem] font-semibold text-primary">
                Bill statistics table by month
              </p>
            </div>
            <div
              class="recharts-responsive-container"
              style="width: 100%; height: 300px; min-width: 0px;"
            >
              <div
                class="recharts-wrapper"
                style="position: relative; cursor: default; width: 100%; height: 100%; max-height: 300px; max-width: 476px;"
              >
                <svg
                  cx="50%"
                  cy="50%"
                  class="recharts-surface"
                  width="476"
                  height="300"
                  viewBox="0 0 476 300"
                  style="width: 100%; height: 100%;"
                >
                  <title></title>
                  <desc></desc>
                  <defs>
                    <clipPath id="recharts1-clip">
                      <rect x="5" y="5" height="242" width="466"></rect>
                    </clipPath>
                  </defs>
                  <g class="recharts-layer recharts-pie" tabindex="0">
                    <g class="recharts-layer">
                      <g
                        class="recharts-layer recharts-pie-sector"
                        tabindex="-1"
                      >
                        <path
                          cx="238"
                          cy="135"
                          name="Group A"
                          fill="#ff4757"
                          stroke="#fff"
                          tabindex="-1"
                          class="recharts-sector"
                          d="M 318,135
  A 80,80,0,
  0,0,
  262.42607981560906,58.82016917292677
L 256.3195598617068,77.86512687969508
          A 60,60,0,
          0,1,
          298,135 Z"
                          role="img"
                        ></path>
                      </g>
                      <g
                        class="recharts-layer recharts-pie-sector"
                        tabindex="-1"
                      >
                        <path
                          cx="238"
                          cy="135"
                          name="Group B"
                          fill="#ff6348"
                          stroke="#fff"
                          tabindex="-1"
                          class="recharts-sector"
                          d="M 255.69362146935103,56.98118329980056
  A 80,80,0,
  0,0,
  185.10668902032057,74.98085594073402
L 198.33001676524043,89.98564195555052
          A 60,60,0,
          0,1,
          251.27021610201328,76.48588747485041 Z"
                          role="img"
                        ></path>
                      </g>
                      <g
                        class="recharts-layer recharts-pie-sector"
                        tabindex="-1"
                      >
                        <path
                          cx="238"
                          cy="135"
                          name="Group C"
                          fill="#eccc68"
                          stroke="#fff"
                          tabindex="-1"
                          class="recharts-sector"
                          d="M 180.0769509579614,79.81920270897139
  A 80,80,0,
  0,0,
  159.35378041417118,149.6551064430661
L 179.01533531062842,145.99132983229958
          A 60,60,0,
          0,1,
          194.55771321847104,93.61440203172855 Z"
                          role="img"
                        ></path>
                      </g>
                      <g
                        class="recharts-layer recharts-pie-sector"
                        tabindex="-1"
                      >
                        <path
                          cx="238"
                          cy="135"
                          name="Group D"
                          fill="#9980FA"
                          stroke="#fff"
                          tabindex="-1"
                          class="recharts-sector"
                          d="M 160.93032971072958,156.45380902085097
  A 80,80,0,
  0,0,
  188.38116069853916,197.75325319356602
L 200.78587052390438,182.06493989517452
          A 60,60,0,
          0,1,
          180.1977472830472,151.09035676563823 Z"
                          role="img"
                        ></path>
                      </g>
                      <g
                        class="recharts-layer recharts-pie-sector"
                        tabindex="-1"
                      >
                        <path
                          cx="238"
                          cy="135"
                          name="Group D"
                          fill="#33d9b2"
                          stroke="#fff"
                          tabindex="-1"
                          class="recharts-sector"
                          d="M 194.03928175433552,201.8390249130349
  A 80,80,0,
  0,0,
  241.87699025816025,214.906000691676
L 240.90774269362018,194.92950051875704
          A 60,60,0,
          0,1,
          205.02946131575163,185.1292686847762 Z"
                          role="img"
                        ></path>
                      </g>
                      <g
                        class="recharts-layer recharts-pie-sector"
                        tabindex="-1"
                      >
                        <path
                          cx="238"
                          cy="135"
                          name="Group D"
                          fill="#8884d8"
                          stroke="#fff"
                          tabindex="-1"
                          class="recharts-sector"
                          d="M 248.8265039800105,214.26403226918762
  A 80,80,0,
  0,0,
  293.4609665618819,192.65484531261723
L 279.59572492141143,178.24113398446292
          A 60,60,0,
          0,1,
          246.11987798500786,194.44802420189072 Z"
                          role="img"
                        ></path>
                      </g>
                      <g
                        class="recharts-layer recharts-pie-sector"
                        tabindex="-1"
                      >
                        <path
                          cx="238"
                          cy="135"
                          name="Group D"
                          fill="#8884d8"
                          stroke="#fff"
                          tabindex="-1"
                          class="recharts-sector"
                          d="M 298.2748717062128,187.60170948552513
  A 80,80,0,
  0,0,
  317.6955758473396,141.97245941981274
L 297.77168188550473,140.22934456485956
          A 60,60,0,
          0,1,
          283.2061537796596,174.45128211414385 Z"
                          role="img"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <div
                  class="recharts-legend-wrapper"
                  style="position: absolute; width: 466px; height: auto; left: 5px; bottom: 5px;"
                >
                  <ul
                    class="recharts-default-legend"
                    style="padding: 0px; margin: 0px; text-align: center;"
                  >
                    <li
                      class="recharts-legend-item legend-item-0"
                      style="display: inline-block; margin-right: 10px;"
                    >
                      <svg
                        class="recharts-surface"
                        width="14"
                        height="14"
                        viewBox="0 0 32 32"
                        style="display: inline-block; vertical-align: middle; margin-right: 4px;"
                      >
                        <title></title>
                        <desc></desc>
                        <path
                          stroke="none"
                          fill="#ff4757"
                          d="M0,4h32v24h-32z"
                          class="recharts-legend-icon"
                        ></path>
                      </svg>
                      <span
                        class="recharts-legend-item-text"
                        style="color: rgb(255, 71, 87);"
                      >
                        Group A
                      </span>
                    </li>
                    <li
                      class="recharts-legend-item legend-item-1"
                      style="display: inline-block; margin-right: 10px;"
                    >
                      <svg
                        class="recharts-surface"
                        width="14"
                        height="14"
                        viewBox="0 0 32 32"
                        style="display: inline-block; vertical-align: middle; margin-right: 4px;"
                      >
                        <title></title>
                        <desc></desc>
                        <path
                          stroke="none"
                          fill="#ff6348"
                          d="M0,4h32v24h-32z"
                          class="recharts-legend-icon"
                        ></path>
                      </svg>
                      <span
                        class="recharts-legend-item-text"
                        style="color: rgb(255, 99, 72);"
                      >
                        Group B
                      </span>
                    </li>
                    <li
                      class="recharts-legend-item legend-item-2"
                      style="display: inline-block; margin-right: 10px;"
                    >
                      <svg
                        class="recharts-surface"
                        width="14"
                        height="14"
                        viewBox="0 0 32 32"
                        style="display: inline-block; vertical-align: middle; margin-right: 4px;"
                      >
                        <title></title>
                        <desc></desc>
                        <path
                          stroke="none"
                          fill="#eccc68"
                          d="M0,4h32v24h-32z"
                          class="recharts-legend-icon"
                        ></path>
                      </svg>
                      <span
                        class="recharts-legend-item-text"
                        style="color: rgb(236, 204, 104);"
                      >
                        Group C
                      </span>
                    </li>
                    <li
                      class="recharts-legend-item legend-item-3"
                      style="display: inline-block; margin-right: 10px;"
                    >
                      <svg
                        class="recharts-surface"
                        width="14"
                        height="14"
                        viewBox="0 0 32 32"
                        style="display: inline-block; vertical-align: middle; margin-right: 4px;"
                      >
                        <title></title>
                        <desc></desc>
                        <path
                          stroke="none"
                          fill="#9980FA"
                          d="M0,4h32v24h-32z"
                          class="recharts-legend-icon"
                        ></path>
                      </svg>
                      <span
                        class="recharts-legend-item-text"
                        style="color: rgb(153, 128, 250);"
                      >
                        Group D
                      </span>
                    </li>
                    <li
                      class="recharts-legend-item legend-item-4"
                      style="display: inline-block; margin-right: 10px;"
                    >
                      <svg
                        class="recharts-surface"
                        width="14"
                        height="14"
                        viewBox="0 0 32 32"
                        style="display: inline-block; vertical-align: middle; margin-right: 4px;"
                      >
                        <title></title>
                        <desc></desc>
                        <path
                          stroke="none"
                          fill="#33d9b2"
                          d="M0,4h32v24h-32z"
                          class="recharts-legend-icon"
                        ></path>
                      </svg>
                      <span
                        class="recharts-legend-item-text"
                        style="color: rgb(51, 217, 178);"
                      >
                        Group D
                      </span>
                    </li>
                    <li
                      class="recharts-legend-item legend-item-5"
                      style="display: inline-block; margin-right: 10px;"
                    >
                      <svg
                        class="recharts-surface"
                        width="14"
                        height="14"
                        viewBox="0 0 32 32"
                        style="display: inline-block; vertical-align: middle; margin-right: 4px;"
                      >
                        <title></title>
                        <desc></desc>
                        <path
                          stroke="none"
                          fill="#8884d8"
                          d="M0,4h32v24h-32z"
                          class="recharts-legend-icon"
                        ></path>
                      </svg>
                      <span
                        class="recharts-legend-item-text"
                        style="color: rgb(136, 132, 216);"
                      >
                        Group D
                      </span>
                    </li>
                    <li
                      class="recharts-legend-item legend-item-6"
                      style="display: inline-block; margin-right: 10px;"
                    >
                      <svg
                        class="recharts-surface"
                        width="14"
                        height="14"
                        viewBox="0 0 32 32"
                        style="display: inline-block; vertical-align: middle; margin-right: 4px;"
                      >
                        <title></title>
                        <desc></desc>
                        <path
                          stroke="none"
                          fill="#8884d8"
                          d="M0,4h32v24h-32z"
                          class="recharts-legend-icon"
                        ></path>
                      </svg>
                      <span
                        class="recharts-legend-item-text"
                        style="color: rgb(136, 132, 216);"
                      >
                        Group D
                      </span>
                    </li>
                  </ul>
                </div>
                <div
                  tabindex="-1"
                  class="recharts-tooltip-wrapper recharts-tooltip-wrapper-right recharts-tooltip-wrapper-bottom"
                  style="visibility: hidden; pointer-events: none; position: absolute; top: 0px; left: 0px; transform: translate(304.551px, 103.745px);"
                >
                  <div
                    class="recharts-default-tooltip"
                    style="margin: 0px; padding: 10px; background-color: rgb(255, 255, 255); border: 1px solid rgb(204, 204, 204); white-space: nowrap;"
                  >
                    <p class="recharts-tooltip-label" style="margin: 0px;"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full overflow-x-auto rounded-lg bg-base-100 p-2 shadow-md lg:w-full">
            <div class="p-2">
              <p class="text-[1.1rem] font-semibold text-primary">
                Customer statistics table by month
              </p>
            </div>
            <div
              class="recharts-responsive-container"
              style="width: 100%; height: 300px; min-width: 0px;"
            >
              <div
                class="recharts-wrapper"
                style="position: relative; cursor: default; width: 100%; height: 100%; max-height: 300px; max-width: 476px;"
              >
                <svg
                  class="recharts-surface"
                  width="476"
                  height="300"
                  viewBox="0 0 476 300"
                  style="width: 100%; height: 100%;"
                >
                  <title></title>
                  <desc></desc>
                  <defs>
                    <clipPath id="recharts3-clip">
                      <rect x="65" y="5" height="236" width="406"></rect>
                    </clipPath>
                  </defs>
                  <g class="recharts-layer recharts-line">
                    <path
                      stroke="#ff6348"
                      stroke-width="2"
                      fill="none"
                      width="406"
                      height="236"
                      class="recharts-curve recharts-line-curve"
                      stroke-dasharray="657.3953857421875px 0px"
                      d="M65,184.36C87.556,196.184,110.111,208.007,132.667,208.007C155.222,208.007,177.778,9.72,200.333,9.72C222.889,9.72,245.444,148.771,268,148.771C290.556,148.771,313.111,127.72,335.667,127.72C358.222,127.72,380.778,151.32,403.333,151.32C425.889,151.32,448.444,145.42,471,139.52"
                    ></path>
                    <g class="recharts-layer"></g>
                    <g class="recharts-layer recharts-line-dots">
                      <circle
                        r="3"
                        stroke="#ff6348"
                        stroke-width="2"
                        fill="#fff"
                        width="406"
                        height="236"
                        cx="65"
                        cy="184.35999999999999"
                        class="recharts-dot recharts-line-dot"
                      ></circle>
                      <circle
                        r="3"
                        stroke="#ff6348"
                        stroke-width="2"
                        fill="#fff"
                        width="406"
                        height="236"
                        cx="132.66666666666669"
                        cy="208.0072"
                        class="recharts-dot recharts-line-dot"
                      ></circle>
                      <circle
                        r="3"
                        stroke="#ff6348"
                        stroke-width="2"
                        fill="#fff"
                        width="406"
                        height="236"
                        cx="200.33333333333334"
                        cy="9.720000000000004"
                        class="recharts-dot recharts-line-dot"
                      ></circle>
                      <circle
                        r="3"
                        stroke="#ff6348"
                        stroke-width="2"
                        fill="#fff"
                        width="406"
                        height="236"
                        cx="268"
                        cy="148.7712"
                        class="recharts-dot recharts-line-dot"
                      ></circle>
                      <circle
                        r="3"
                        stroke="#ff6348"
                        stroke-width="2"
                        fill="#fff"
                        width="406"
                        height="236"
                        cx="335.6666666666667"
                        cy="127.72000000000001"
                        class="recharts-dot recharts-line-dot"
                      ></circle>
                      <circle
                        r="3"
                        stroke="#ff6348"
                        stroke-width="2"
                        fill="#fff"
                        width="406"
                        height="236"
                        cx="403.33333333333337"
                        cy="151.32"
                        class="recharts-dot recharts-line-dot"
                      ></circle>
                      <circle
                        r="3"
                        stroke="#ff6348"
                        stroke-width="2"
                        fill="#fff"
                        width="406"
                        height="236"
                        cx="471"
                        cy="139.52"
                        class="recharts-dot recharts-line-dot"
                      ></circle>
                    </g>
                  </g>
                  <g class="recharts-cartesian-grid">
                    <g class="recharts-cartesian-grid-horizontal">
                      <line
                        stroke-dasharray="3 3"
                        stroke="#ccc"
                        fill="none"
                        x="65"
                        y="5"
                        width="406"
                        height="236"
                        x1="65"
                        y1="241"
                        x2="471"
                        y2="241"
                      ></line>
                      <line
                        stroke-dasharray="3 3"
                        stroke="#ccc"
                        fill="none"
                        x="65"
                        y="5"
                        width="406"
                        height="236"
                        x1="65"
                        y1="182"
                        x2="471"
                        y2="182"
                      ></line>
                      <line
                        stroke-dasharray="3 3"
                        stroke="#ccc"
                        fill="none"
                        x="65"
                        y="5"
                        width="406"
                        height="236"
                        x1="65"
                        y1="123"
                        x2="471"
                        y2="123"
                      ></line>
                      <line
                        stroke-dasharray="3 3"
                        stroke="#ccc"
                        fill="none"
                        x="65"
                        y="5"
                        width="406"
                        height="236"
                        x1="65"
                        y1="64"
                        x2="471"
                        y2="64"
                      ></line>
                      <line
                        stroke-dasharray="3 3"
                        stroke="#ccc"
                        fill="none"
                        x="65"
                        y="5"
                        width="406"
                        height="236"
                        x1="65"
                        y1="5"
                        x2="471"
                        y2="5"
                      ></line>
                    </g>
                    <g class="recharts-cartesian-grid-vertical">
                      <line
                        stroke-dasharray="3 3"
                        stroke="#ccc"
                        fill="none"
                        x="65"
                        y="5"
                        width="406"
                        height="236"
                        x1="65"
                        y1="5"
                        x2="65"
                        y2="241"
                      ></line>
                      <line
                        stroke-dasharray="3 3"
                        stroke="#ccc"
                        fill="none"
                        x="65"
                        y="5"
                        width="406"
                        height="236"
                        x1="132.66666666666669"
                        y1="5"
                        x2="132.66666666666669"
                        y2="241"
                      ></line>
                      <line
                        stroke-dasharray="3 3"
                        stroke="#ccc"
                        fill="none"
                        x="65"
                        y="5"
                        width="406"
                        height="236"
                        x1="200.33333333333334"
                        y1="5"
                        x2="200.33333333333334"
                        y2="241"
                      ></line>
                      <line
                        stroke-dasharray="3 3"
                        stroke="#ccc"
                        fill="none"
                        x="65"
                        y="5"
                        width="406"
                        height="236"
                        x1="268"
                        y1="5"
                        x2="268"
                        y2="241"
                      ></line>
                      <line
                        stroke-dasharray="3 3"
                        stroke="#ccc"
                        fill="none"
                        x="65"
                        y="5"
                        width="406"
                        height="236"
                        x1="335.6666666666667"
                        y1="5"
                        x2="335.6666666666667"
                        y2="241"
                      ></line>
                      <line
                        stroke-dasharray="3 3"
                        stroke="#ccc"
                        fill="none"
                        x="65"
                        y="5"
                        width="406"
                        height="236"
                        x1="471"
                        y1="5"
                        x2="471"
                        y2="241"
                      ></line>
                    </g>
                  </g>
                  <g class="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
                    <line
                      orientation="bottom"
                      width="406"
                      height="30"
                      x="65"
                      y="241"
                      class="recharts-cartesian-axis-line"
                      stroke="#666"
                      fill="none"
                      x1="65"
                      y1="241"
                      x2="471"
                      y2="241"
                    ></line>
                    <g class="recharts-cartesian-axis-ticks">
                      <g class="recharts-layer recharts-cartesian-axis-tick">
                        <line
                          orientation="bottom"
                          width="406"
                          height="30"
                          x="65"
                          y="241"
                          class="recharts-cartesian-axis-tick-line"
                          stroke="#666"
                          fill="none"
                          x1="65"
                          y1="247"
                          x2="65"
                          y2="241"
                        ></line>
                        <text
                          orientation="bottom"
                          width="406"
                          height="30"
                          stroke="none"
                          x="65"
                          y="249"
                          class="recharts-text recharts-cartesian-axis-tick-value"
                          text-anchor="middle"
                          fill="#666"
                        >
                          <tspan x="65" dy="0.71em">
                            Page A
                          </tspan>
                        </text>
                      </g>
                      <g class="recharts-layer recharts-cartesian-axis-tick">
                        <line
                          orientation="bottom"
                          width="406"
                          height="30"
                          x="65"
                          y="241"
                          class="recharts-cartesian-axis-tick-line"
                          stroke="#666"
                          fill="none"
                          x1="132.66666666666669"
                          y1="247"
                          x2="132.66666666666669"
                          y2="241"
                        ></line>
                        <text
                          orientation="bottom"
                          width="406"
                          height="30"
                          stroke="none"
                          x="132.66666666666669"
                          y="249"
                          class="recharts-text recharts-cartesian-axis-tick-value"
                          text-anchor="middle"
                          fill="#666"
                        >
                          <tspan x="132.66666666666669" dy="0.71em">
                            Page B
                          </tspan>
                        </text>
                      </g>
                      <g class="recharts-layer recharts-cartesian-axis-tick">
                        <line
                          orientation="bottom"
                          width="406"
                          height="30"
                          x="65"
                          y="241"
                          class="recharts-cartesian-axis-tick-line"
                          stroke="#666"
                          fill="none"
                          x1="200.33333333333334"
                          y1="247"
                          x2="200.33333333333334"
                          y2="241"
                        ></line>
                        <text
                          orientation="bottom"
                          width="406"
                          height="30"
                          stroke="none"
                          x="200.33333333333334"
                          y="249"
                          class="recharts-text recharts-cartesian-axis-tick-value"
                          text-anchor="middle"
                          fill="#666"
                        >
                          <tspan x="200.33333333333334" dy="0.71em">
                            Page C
                          </tspan>
                        </text>
                      </g>
                      <g class="recharts-layer recharts-cartesian-axis-tick">
                        <line
                          orientation="bottom"
                          width="406"
                          height="30"
                          x="65"
                          y="241"
                          class="recharts-cartesian-axis-tick-line"
                          stroke="#666"
                          fill="none"
                          x1="268"
                          y1="247"
                          x2="268"
                          y2="241"
                        ></line>
                        <text
                          orientation="bottom"
                          width="406"
                          height="30"
                          stroke="none"
                          x="268"
                          y="249"
                          class="recharts-text recharts-cartesian-axis-tick-value"
                          text-anchor="middle"
                          fill="#666"
                        >
                          <tspan x="268" dy="0.71em">
                            Page D
                          </tspan>
                        </text>
                      </g>
                      <g class="recharts-layer recharts-cartesian-axis-tick">
                        <line
                          orientation="bottom"
                          width="406"
                          height="30"
                          x="65"
                          y="241"
                          class="recharts-cartesian-axis-tick-line"
                          stroke="#666"
                          fill="none"
                          x1="335.6666666666667"
                          y1="247"
                          x2="335.6666666666667"
                          y2="241"
                        ></line>
                        <text
                          orientation="bottom"
                          width="406"
                          height="30"
                          stroke="none"
                          x="335.6666666666667"
                          y="249"
                          class="recharts-text recharts-cartesian-axis-tick-value"
                          text-anchor="middle"
                          fill="#666"
                        >
                          <tspan x="335.6666666666667" dy="0.71em">
                            Page E
                          </tspan>
                        </text>
                      </g>
                      <g class="recharts-layer recharts-cartesian-axis-tick">
                        <line
                          orientation="bottom"
                          width="406"
                          height="30"
                          x="65"
                          y="241"
                          class="recharts-cartesian-axis-tick-line"
                          stroke="#666"
                          fill="none"
                          x1="471"
                          y1="247"
                          x2="471"
                          y2="241"
                        ></line>
                        <text
                          orientation="bottom"
                          width="406"
                          height="30"
                          stroke="none"
                          x="451.1484375"
                          y="249"
                          class="recharts-text recharts-cartesian-axis-tick-value"
                          text-anchor="middle"
                          fill="#666"
                        >
                          <tspan x="451.1484375" dy="0.71em">
                            Page G
                          </tspan>
                        </text>
                      </g>
                    </g>
                  </g>
                  <g class="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
                    <line
                      orientation="left"
                      width="60"
                      height="236"
                      x="5"
                      y="5"
                      class="recharts-cartesian-axis-line"
                      stroke="#666"
                      fill="none"
                      x1="65"
                      y1="5"
                      x2="65"
                      y2="241"
                    ></line>
                    <g class="recharts-cartesian-axis-ticks">
                      <g class="recharts-layer recharts-cartesian-axis-tick">
                        <line
                          orientation="left"
                          width="60"
                          height="236"
                          x="5"
                          y="5"
                          class="recharts-cartesian-axis-tick-line"
                          stroke="#666"
                          fill="none"
                          x1="59"
                          y1="241"
                          x2="65"
                          y2="241"
                        ></line>
                        <text
                          orientation="left"
                          width="60"
                          height="236"
                          stroke="none"
                          x="57"
                          y="241"
                          class="recharts-text recharts-cartesian-axis-tick-value"
                          text-anchor="end"
                          fill="#666"
                        >
                          <tspan x="57" dy="0.355em">
                            0
                          </tspan>
                        </text>
                      </g>
                      <g class="recharts-layer recharts-cartesian-axis-tick">
                        <line
                          orientation="left"
                          width="60"
                          height="236"
                          x="5"
                          y="5"
                          class="recharts-cartesian-axis-tick-line"
                          stroke="#666"
                          fill="none"
                          x1="59"
                          y1="182"
                          x2="65"
                          y2="182"
                        ></line>
                        <text
                          orientation="left"
                          width="60"
                          height="236"
                          stroke="none"
                          x="57"
                          y="182"
                          class="recharts-text recharts-cartesian-axis-tick-value"
                          text-anchor="end"
                          fill="#666"
                        >
                          <tspan x="57" dy="0.355em">
                            2500
                          </tspan>
                        </text>
                      </g>
                      <g class="recharts-layer recharts-cartesian-axis-tick">
                        <line
                          orientation="left"
                          width="60"
                          height="236"
                          x="5"
                          y="5"
                          class="recharts-cartesian-axis-tick-line"
                          stroke="#666"
                          fill="none"
                          x1="59"
                          y1="123"
                          x2="65"
                          y2="123"
                        ></line>
                        <text
                          orientation="left"
                          width="60"
                          height="236"
                          stroke="none"
                          x="57"
                          y="123"
                          class="recharts-text recharts-cartesian-axis-tick-value"
                          text-anchor="end"
                          fill="#666"
                        >
                          <tspan x="57" dy="0.355em">
                            5000
                          </tspan>
                        </text>
                      </g>
                      <g class="recharts-layer recharts-cartesian-axis-tick">
                        <line
                          orientation="left"
                          width="60"
                          height="236"
                          x="5"
                          y="5"
                          class="recharts-cartesian-axis-tick-line"
                          stroke="#666"
                          fill="none"
                          x1="59"
                          y1="64"
                          x2="65"
                          y2="64"
                        ></line>
                        <text
                          orientation="left"
                          width="60"
                          height="236"
                          stroke="none"
                          x="57"
                          y="64"
                          class="recharts-text recharts-cartesian-axis-tick-value"
                          text-anchor="end"
                          fill="#666"
                        >
                          <tspan x="57" dy="0.355em">
                            7500
                          </tspan>
                        </text>
                      </g>
                      <g class="recharts-layer recharts-cartesian-axis-tick">
                        <line
                          orientation="left"
                          width="60"
                          height="236"
                          x="5"
                          y="5"
                          class="recharts-cartesian-axis-tick-line"
                          stroke="#666"
                          fill="none"
                          x1="59"
                          y1="5"
                          x2="65"
                          y2="5"
                        ></line>
                        <text
                          orientation="left"
                          width="60"
                          height="236"
                          stroke="none"
                          x="57"
                          y="12"
                          class="recharts-text recharts-cartesian-axis-tick-value"
                          text-anchor="end"
                          fill="#666"
                        >
                          <tspan x="57" dy="0.355em">
                            10000
                          </tspan>
                        </text>
                      </g>
                    </g>
                  </g>
                </svg>
                <div
                  class="recharts-legend-wrapper"
                  style="position: absolute; width: 466px; height: auto; left: 5px; bottom: 5px;"
                >
                  <ul
                    class="recharts-default-legend"
                    style="padding: 0px; margin: 0px; text-align: center;"
                  >
                    <li
                      class="recharts-legend-item legend-item-0"
                      style="display: inline-block; margin-right: 10px;"
                    >
                      <svg
                        class="recharts-surface"
                        width="14"
                        height="14"
                        viewBox="0 0 32 32"
                        style="display: inline-block; vertical-align: middle; margin-right: 4px;"
                      >
                        <title></title>
                        <desc></desc>
                        <path
                          stroke-width="4"
                          fill="none"
                          stroke="#ff6348"
                          d="M0,16h10.666666666666666
          A5.333333333333333,5.333333333333333,0,1,1,21.333333333333332,16
          H32M21.333333333333332,16
          A5.333333333333333,5.333333333333333,0,1,1,10.666666666666666,16"
                          class="recharts-legend-icon"
                        ></path>
                      </svg>
                      <span
                        class="recharts-legend-item-text"
                        style="color: rgb(255, 99, 72);"
                      >
                        pv
                      </span>
                    </li>
                  </ul>
                </div>
                <div
                  tabindex="-1"
                  class="recharts-tooltip-wrapper recharts-tooltip-wrapper-right recharts-tooltip-wrapper-bottom"
                  style="visibility: hidden; pointer-events: none; position: absolute; top: 0px; left: 0px; transform: translate(75px, 159px);"
                >
                  <div
                    class="recharts-default-tooltip"
                    style="margin: 0px; padding: 10px; background-color: rgb(255, 255, 255); border: 1px solid rgb(204, 204, 204); white-space: nowrap;"
                  >
                    <p class="recharts-tooltip-label" style="margin: 0px;">
                      Page A
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-[10px]">
          <div class="w-full rounded-lg bg-base-100 p-2 shadow-md">
            <div class="p-2 ">
              <p class="text-[1.1rem] font-semibold text-primary">
                Customer statistics table by month
              </p>
            </div>
            <div
              class="recharts-responsive-container"
              style="width: 100%; height: 300px; min-width: 0px;"
            >
              <div
                class="recharts-wrapper"
                style="position: relative; cursor: default; width: 100%; height: 100%; max-height: 300px; max-width: 978px;"
              >
                <svg
                  class="recharts-surface"
                  width="978"
                  height="300"
                  viewBox="0 0 978 300"
                  style="width: 100%; height: 100%;"
                >
                  <title></title>
                  <desc></desc>
                  <defs>
                    <clipPath id="recharts6-clip">
                      <rect x="80" y="5" height="236" width="868"></rect>
                    </clipPath>
                  </defs>
                  <g class="recharts-cartesian-grid">
                    <g class="recharts-cartesian-grid-horizontal">
                      <line
                        stroke-dasharray="3 3"
                        stroke="#ccc"
                        fill="none"
                        x="80"
                        y="5"
                        width="868"
                        height="236"
                        x1="80"
                        y1="241"
                        x2="948"
                        y2="241"
                      ></line>
                      <line
                        stroke-dasharray="3 3"
                        stroke="#ccc"
                        fill="none"
                        x="80"
                        y="5"
                        width="868"
                        height="236"
                        x1="80"
                        y1="182"
                        x2="948"
                        y2="182"
                      ></line>
                      <line
                        stroke-dasharray="3 3"
                        stroke="#ccc"
                        fill="none"
                        x="80"
                        y="5"
                        width="868"
                        height="236"
                        x1="80"
                        y1="123"
                        x2="948"
                        y2="123"
                      ></line>
                      <line
                        stroke-dasharray="3 3"
                        stroke="#ccc"
                        fill="none"
                        x="80"
                        y="5"
                        width="868"
                        height="236"
                        x1="80"
                        y1="64"
                        x2="948"
                        y2="64"
                      ></line>
                      <line
                        stroke-dasharray="3 3"
                        stroke="#ccc"
                        fill="none"
                        x="80"
                        y="5"
                        width="868"
                        height="236"
                        x1="80"
                        y1="5"
                        x2="948"
                        y2="5"
                      ></line>
                    </g>
                    <g class="recharts-cartesian-grid-vertical">
                      <line
                        stroke-dasharray="3 3"
                        stroke="#ccc"
                        fill="none"
                        x="80"
                        y="5"
                        width="868"
                        height="236"
                        x1="142"
                        y1="5"
                        x2="142"
                        y2="241"
                      ></line>
                      <line
                        stroke-dasharray="3 3"
                        stroke="#ccc"
                        fill="none"
                        x="80"
                        y="5"
                        width="868"
                        height="236"
                        x1="266"
                        y1="5"
                        x2="266"
                        y2="241"
                      ></line>
                      <line
                        stroke-dasharray="3 3"
                        stroke="#ccc"
                        fill="none"
                        x="80"
                        y="5"
                        width="868"
                        height="236"
                        x1="390"
                        y1="5"
                        x2="390"
                        y2="241"
                      ></line>
                      <line
                        stroke-dasharray="3 3"
                        stroke="#ccc"
                        fill="none"
                        x="80"
                        y="5"
                        width="868"
                        height="236"
                        x1="514"
                        y1="5"
                        x2="514"
                        y2="241"
                      ></line>
                      <line
                        stroke-dasharray="3 3"
                        stroke="#ccc"
                        fill="none"
                        x="80"
                        y="5"
                        width="868"
                        height="236"
                        x1="638"
                        y1="5"
                        x2="638"
                        y2="241"
                      ></line>
                      <line
                        stroke-dasharray="3 3"
                        stroke="#ccc"
                        fill="none"
                        x="80"
                        y="5"
                        width="868"
                        height="236"
                        x1="762"
                        y1="5"
                        x2="762"
                        y2="241"
                      ></line>
                      <line
                        stroke-dasharray="3 3"
                        stroke="#ccc"
                        fill="none"
                        x="80"
                        y="5"
                        width="868"
                        height="236"
                        x1="886"
                        y1="5"
                        x2="886"
                        y2="241"
                      ></line>
                      <line
                        stroke-dasharray="3 3"
                        stroke="#ccc"
                        fill="none"
                        x="80"
                        y="5"
                        width="868"
                        height="236"
                        x1="80"
                        y1="5"
                        x2="80"
                        y2="241"
                      ></line>
                      <line
                        stroke-dasharray="3 3"
                        stroke="#ccc"
                        fill="none"
                        x="80"
                        y="5"
                        width="868"
                        height="236"
                        x1="948"
                        y1="5"
                        x2="948"
                        y2="241"
                      ></line>
                    </g>
                  </g>
                  <g class="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
                    <line
                      orientation="bottom"
                      width="868"
                      height="30"
                      x="80"
                      y="241"
                      class="recharts-cartesian-axis-line"
                      stroke="#666"
                      fill="none"
                      x1="80"
                      y1="241"
                      x2="948"
                      y2="241"
                    ></line>
                    <g class="recharts-cartesian-axis-ticks">
                      <g class="recharts-layer recharts-cartesian-axis-tick">
                        <line
                          orientation="bottom"
                          width="868"
                          height="30"
                          x="80"
                          y="241"
                          class="recharts-cartesian-axis-tick-line"
                          stroke="#666"
                          fill="none"
                          x1="142"
                          y1="247"
                          x2="142"
                          y2="241"
                        ></line>
                        <text
                          orientation="bottom"
                          width="868"
                          height="30"
                          stroke="none"
                          x="142"
                          y="249"
                          class="recharts-text recharts-cartesian-axis-tick-value"
                          text-anchor="middle"
                          fill="#666"
                        >
                          <tspan x="142" dy="0.71em">
                            Page A
                          </tspan>
                        </text>
                      </g>
                      <g class="recharts-layer recharts-cartesian-axis-tick">
                        <line
                          orientation="bottom"
                          width="868"
                          height="30"
                          x="80"
                          y="241"
                          class="recharts-cartesian-axis-tick-line"
                          stroke="#666"
                          fill="none"
                          x1="266"
                          y1="247"
                          x2="266"
                          y2="241"
                        ></line>
                        <text
                          orientation="bottom"
                          width="868"
                          height="30"
                          stroke="none"
                          x="266"
                          y="249"
                          class="recharts-text recharts-cartesian-axis-tick-value"
                          text-anchor="middle"
                          fill="#666"
                        >
                          <tspan x="266" dy="0.71em">
                            Page B
                          </tspan>
                        </text>
                      </g>
                      <g class="recharts-layer recharts-cartesian-axis-tick">
                        <line
                          orientation="bottom"
                          width="868"
                          height="30"
                          x="80"
                          y="241"
                          class="recharts-cartesian-axis-tick-line"
                          stroke="#666"
                          fill="none"
                          x1="390"
                          y1="247"
                          x2="390"
                          y2="241"
                        ></line>
                        <text
                          orientation="bottom"
                          width="868"
                          height="30"
                          stroke="none"
                          x="390"
                          y="249"
                          class="recharts-text recharts-cartesian-axis-tick-value"
                          text-anchor="middle"
                          fill="#666"
                        >
                          <tspan x="390" dy="0.71em">
                            Page C
                          </tspan>
                        </text>
                      </g>
                      <g class="recharts-layer recharts-cartesian-axis-tick">
                        <line
                          orientation="bottom"
                          width="868"
                          height="30"
                          x="80"
                          y="241"
                          class="recharts-cartesian-axis-tick-line"
                          stroke="#666"
                          fill="none"
                          x1="514"
                          y1="247"
                          x2="514"
                          y2="241"
                        ></line>
                        <text
                          orientation="bottom"
                          width="868"
                          height="30"
                          stroke="none"
                          x="514"
                          y="249"
                          class="recharts-text recharts-cartesian-axis-tick-value"
                          text-anchor="middle"
                          fill="#666"
                        >
                          <tspan x="514" dy="0.71em">
                            Page D
                          </tspan>
                        </text>
                      </g>
                      <g class="recharts-layer recharts-cartesian-axis-tick">
                        <line
                          orientation="bottom"
                          width="868"
                          height="30"
                          x="80"
                          y="241"
                          class="recharts-cartesian-axis-tick-line"
                          stroke="#666"
                          fill="none"
                          x1="638"
                          y1="247"
                          x2="638"
                          y2="241"
                        ></line>
                        <text
                          orientation="bottom"
                          width="868"
                          height="30"
                          stroke="none"
                          x="638"
                          y="249"
                          class="recharts-text recharts-cartesian-axis-tick-value"
                          text-anchor="middle"
                          fill="#666"
                        >
                          <tspan x="638" dy="0.71em">
                            Page E
                          </tspan>
                        </text>
                      </g>
                      <g class="recharts-layer recharts-cartesian-axis-tick">
                        <line
                          orientation="bottom"
                          width="868"
                          height="30"
                          x="80"
                          y="241"
                          class="recharts-cartesian-axis-tick-line"
                          stroke="#666"
                          fill="none"
                          x1="762"
                          y1="247"
                          x2="762"
                          y2="241"
                        ></line>
                        <text
                          orientation="bottom"
                          width="868"
                          height="30"
                          stroke="none"
                          x="762"
                          y="249"
                          class="recharts-text recharts-cartesian-axis-tick-value"
                          text-anchor="middle"
                          fill="#666"
                        >
                          <tspan x="762" dy="0.71em">
                            Page F
                          </tspan>
                        </text>
                      </g>
                      <g class="recharts-layer recharts-cartesian-axis-tick">
                        <line
                          orientation="bottom"
                          width="868"
                          height="30"
                          x="80"
                          y="241"
                          class="recharts-cartesian-axis-tick-line"
                          stroke="#666"
                          fill="none"
                          x1="886"
                          y1="247"
                          x2="886"
                          y2="241"
                        ></line>
                        <text
                          orientation="bottom"
                          width="868"
                          height="30"
                          stroke="none"
                          x="886"
                          y="249"
                          class="recharts-text recharts-cartesian-axis-tick-value"
                          text-anchor="middle"
                          fill="#666"
                        >
                          <tspan x="886" dy="0.71em">
                            Page G
                          </tspan>
                        </text>
                      </g>
                    </g>
                  </g>
                  <g class="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
                    <line
                      orientation="left"
                      width="60"
                      height="236"
                      x="20"
                      y="5"
                      class="recharts-cartesian-axis-line"
                      stroke="#666"
                      fill="none"
                      x1="80"
                      y1="5"
                      x2="80"
                      y2="241"
                    ></line>
                    <g class="recharts-cartesian-axis-ticks">
                      <g class="recharts-layer recharts-cartesian-axis-tick">
                        <line
                          orientation="left"
                          width="60"
                          height="236"
                          x="20"
                          y="5"
                          class="recharts-cartesian-axis-tick-line"
                          stroke="#666"
                          fill="none"
                          x1="74"
                          y1="241"
                          x2="80"
                          y2="241"
                        ></line>
                        <text
                          orientation="left"
                          width="60"
                          height="236"
                          stroke="none"
                          x="72"
                          y="241"
                          class="recharts-text recharts-cartesian-axis-tick-value"
                          text-anchor="end"
                          fill="#666"
                        >
                          <tspan x="72" dy="0.355em">
                            0
                          </tspan>
                        </text>
                      </g>
                      <g class="recharts-layer recharts-cartesian-axis-tick">
                        <line
                          orientation="left"
                          width="60"
                          height="236"
                          x="20"
                          y="5"
                          class="recharts-cartesian-axis-tick-line"
                          stroke="#666"
                          fill="none"
                          x1="74"
                          y1="182"
                          x2="80"
                          y2="182"
                        ></line>
                        <text
                          orientation="left"
                          width="60"
                          height="236"
                          stroke="none"
                          x="72"
                          y="182"
                          class="recharts-text recharts-cartesian-axis-tick-value"
                          text-anchor="end"
                          fill="#666"
                        >
                          <tspan x="72" dy="0.355em">
                            2500
                          </tspan>
                        </text>
                      </g>
                      <g class="recharts-layer recharts-cartesian-axis-tick">
                        <line
                          orientation="left"
                          width="60"
                          height="236"
                          x="20"
                          y="5"
                          class="recharts-cartesian-axis-tick-line"
                          stroke="#666"
                          fill="none"
                          x1="74"
                          y1="123"
                          x2="80"
                          y2="123"
                        ></line>
                        <text
                          orientation="left"
                          width="60"
                          height="236"
                          stroke="none"
                          x="72"
                          y="123"
                          class="recharts-text recharts-cartesian-axis-tick-value"
                          text-anchor="end"
                          fill="#666"
                        >
                          <tspan x="72" dy="0.355em">
                            5000
                          </tspan>
                        </text>
                      </g>
                      <g class="recharts-layer recharts-cartesian-axis-tick">
                        <line
                          orientation="left"
                          width="60"
                          height="236"
                          x="20"
                          y="5"
                          class="recharts-cartesian-axis-tick-line"
                          stroke="#666"
                          fill="none"
                          x1="74"
                          y1="64"
                          x2="80"
                          y2="64"
                        ></line>
                        <text
                          orientation="left"
                          width="60"
                          height="236"
                          stroke="none"
                          x="72"
                          y="64"
                          class="recharts-text recharts-cartesian-axis-tick-value"
                          text-anchor="end"
                          fill="#666"
                        >
                          <tspan x="72" dy="0.355em">
                            7500
                          </tspan>
                        </text>
                      </g>
                      <g class="recharts-layer recharts-cartesian-axis-tick">
                        <line
                          orientation="left"
                          width="60"
                          height="236"
                          x="20"
                          y="5"
                          class="recharts-cartesian-axis-tick-line"
                          stroke="#666"
                          fill="none"
                          x1="74"
                          y1="5"
                          x2="80"
                          y2="5"
                        ></line>
                        <text
                          orientation="left"
                          width="60"
                          height="236"
                          stroke="none"
                          x="72"
                          y="12"
                          class="recharts-text recharts-cartesian-axis-tick-value"
                          text-anchor="end"
                          fill="#666"
                        >
                          <tspan x="72" dy="0.355em">
                            10000
                          </tspan>
                        </text>
                      </g>
                    </g>
                  </g>
                  <g class="recharts-layer recharts-bar">
                    <g class="recharts-layer recharts-bar-rectangles">
                      <g class="recharts-layer">
                        <g class="recharts-layer recharts-bar-rectangle">
                          <path
                            x="92.4"
                            y="184.35999999999999"
                            width="30"
                            height="56.640000000000015"
                            radius="0"
                            fill="#33d9b2"
                            name="Page A"
                            class="recharts-rectangle"
                            d="M 92.4,184.35999999999999 h 30 v 56.640000000000015 h -30 Z"
                          ></path>
                        </g>
                        <g class="recharts-layer recharts-bar-rectangle">
                          <path
                            x="216.4"
                            y="208.0072"
                            width="30"
                            height="32.99279999999999"
                            radius="0"
                            fill="#33d9b2"
                            name="Page B"
                            class="recharts-rectangle"
                            d="M 216.4,208.0072 h 30 v 32.99279999999999 h -30 Z"
                          ></path>
                        </g>
                        <g class="recharts-layer recharts-bar-rectangle">
                          <path
                            x="340.4"
                            y="9.719999999999999"
                            width="30"
                            height="231.28"
                            radius="0"
                            fill="#33d9b2"
                            name="Page C"
                            class="recharts-rectangle"
                            d="M 340.4,9.719999999999999 h 30 v 231.28 h -30 Z"
                          ></path>
                        </g>
                        <g class="recharts-layer recharts-bar-rectangle">
                          <path
                            x="464.4"
                            y="148.7712"
                            width="30"
                            height="92.2288"
                            radius="0"
                            fill="#33d9b2"
                            name="Page D"
                            class="recharts-rectangle"
                            d="M 464.4,148.7712 h 30 v 92.2288 h -30 Z"
                          ></path>
                        </g>
                        <g class="recharts-layer recharts-bar-rectangle">
                          <path
                            x="588.4"
                            y="127.72000000000001"
                            width="30"
                            height="113.27999999999999"
                            radius="0"
                            fill="#33d9b2"
                            name="Page E"
                            class="recharts-rectangle"
                            d="M 588.4,127.72000000000001 h 30 v 113.27999999999999 h -30 Z"
                          ></path>
                        </g>
                        <g class="recharts-layer recharts-bar-rectangle">
                          <path
                            x="712.4"
                            y="151.32"
                            width="30"
                            height="89.68"
                            radius="0"
                            fill="#33d9b2"
                            name="Page F"
                            class="recharts-rectangle"
                            d="M 712.4,151.32 h 30 v 89.68 h -30 Z"
                          ></path>
                        </g>
                        <g class="recharts-layer recharts-bar-rectangle">
                          <path
                            x="836.4"
                            y="139.52"
                            width="30"
                            height="101.47999999999999"
                            radius="0"
                            fill="#33d9b2"
                            name="Page G"
                            class="recharts-rectangle"
                            d="M 836.4,139.52 h 30 v 101.47999999999999 h -30 Z"
                          ></path>
                        </g>
                      </g>
                    </g>
                    <g class="recharts-layer"></g>
                  </g>
                  <g class="recharts-layer recharts-bar">
                    <g class="recharts-layer recharts-bar-rectangles">
                      <g class="recharts-layer">
                        <g class="recharts-layer recharts-bar-rectangle">
                          <path
                            x="126.4"
                            y="146.6"
                            width="30"
                            height="94.4"
                            radius="0"
                            fill="#ff6348"
                            name="Page A"
                            class="recharts-rectangle"
                            d="M 126.4,146.6 h 30 v 94.4 h -30 Z"
                          ></path>
                        </g>
                        <g class="recharts-layer recharts-bar-rectangle">
                          <path
                            x="250.4"
                            y="170.2"
                            width="30"
                            height="70.80000000000001"
                            radius="0"
                            fill="#ff6348"
                            name="Page B"
                            class="recharts-rectangle"
                            d="M 250.4,170.2 h 30 v 70.80000000000001 h -30 Z"
                          ></path>
                        </g>
                        <g class="recharts-layer recharts-bar-rectangle">
                          <path
                            x="374.4"
                            y="193.8"
                            width="30"
                            height="47.19999999999999"
                            radius="0"
                            fill="#ff6348"
                            name="Page C"
                            class="recharts-rectangle"
                            d="M 374.4,193.8 h 30 v 47.19999999999999 h -30 Z"
                          ></path>
                        </g>
                        <g class="recharts-layer recharts-bar-rectangle">
                          <path
                            x="498.4"
                            y="175.39199999999997"
                            width="30"
                            height="65.60800000000003"
                            radius="0"
                            fill="#ff6348"
                            name="Page D"
                            class="recharts-rectangle"
                            d="M 498.4,175.39199999999997 h 30 v 65.60800000000003 h -30 Z"
                          ></path>
                        </g>
                        <g class="recharts-layer recharts-bar-rectangle">
                          <path
                            x="622.4"
                            y="196.396"
                            width="30"
                            height="44.60400000000001"
                            radius="0"
                            fill="#ff6348"
                            name="Page E"
                            class="recharts-rectangle"
                            d="M 622.4,196.396 h 30 v 44.60400000000001 h -30 Z"
                          ></path>
                        </g>
                        <g class="recharts-layer recharts-bar-rectangle">
                          <path
                            x="746.4"
                            y="184.596"
                            width="30"
                            height="56.403999999999996"
                            radius="0"
                            fill="#ff6348"
                            name="Page F"
                            class="recharts-rectangle"
                            d="M 746.4,184.596 h 30 v 56.403999999999996 h -30 Z"
                          ></path>
                        </g>
                        <g class="recharts-layer recharts-bar-rectangle">
                          <path
                            x="870.4"
                            y="158.63600000000002"
                            width="30"
                            height="82.36399999999998"
                            radius="0"
                            fill="#ff6348"
                            name="Page G"
                            class="recharts-rectangle"
                            d="M 870.4,158.63600000000002 h 30 v 82.36399999999998 h -30 Z"
                          ></path>
                        </g>
                      </g>
                    </g>
                    <g class="recharts-layer"></g>
                  </g>
                  <g class="recharts-layer recharts-bar">
                    <g class="recharts-layer recharts-bar-rectangles">
                      <g class="recharts-layer">
                        <g class="recharts-layer recharts-bar-rectangle">
                          <path
                            x="160.4"
                            y="146.6"
                            width="30"
                            height="94.4"
                            radius="0"
                            fill="#9980FA"
                            name="Page A"
                            class="recharts-rectangle"
                            d="M 160.4,146.6 h 30 v 94.4 h -30 Z"
                          ></path>
                        </g>
                        <g class="recharts-layer recharts-bar-rectangle">
                          <path
                            x="284.4"
                            y="170.2"
                            width="30"
                            height="70.80000000000001"
                            radius="0"
                            fill="#9980FA"
                            name="Page B"
                            class="recharts-rectangle"
                            d="M 284.4,170.2 h 30 v 70.80000000000001 h -30 Z"
                          ></path>
                        </g>
                        <g class="recharts-layer recharts-bar-rectangle">
                          <path
                            x="408.4"
                            y="193.8"
                            width="30"
                            height="47.19999999999999"
                            radius="0"
                            fill="#9980FA"
                            name="Page C"
                            class="recharts-rectangle"
                            d="M 408.4,193.8 h 30 v 47.19999999999999 h -30 Z"
                          ></path>
                        </g>
                        <g class="recharts-layer recharts-bar-rectangle">
                          <path
                            x="532.4"
                            y="175.39199999999997"
                            width="30"
                            height="65.60800000000003"
                            radius="0"
                            fill="#9980FA"
                            name="Page D"
                            class="recharts-rectangle"
                            d="M 532.4,175.39199999999997 h 30 v 65.60800000000003 h -30 Z"
                          ></path>
                        </g>
                        <g class="recharts-layer recharts-bar-rectangle">
                          <path
                            x="656.4"
                            y="196.396"
                            width="30"
                            height="44.60400000000001"
                            radius="0"
                            fill="#9980FA"
                            name="Page E"
                            class="recharts-rectangle"
                            d="M 656.4,196.396 h 30 v 44.60400000000001 h -30 Z"
                          ></path>
                        </g>
                        <g class="recharts-layer recharts-bar-rectangle">
                          <path
                            x="780.4"
                            y="184.596"
                            width="30"
                            height="56.403999999999996"
                            radius="0"
                            fill="#9980FA"
                            name="Page F"
                            class="recharts-rectangle"
                            d="M 780.4,184.596 h 30 v 56.403999999999996 h -30 Z"
                          ></path>
                        </g>
                        <g class="recharts-layer recharts-bar-rectangle">
                          <path
                            x="904.4"
                            y="158.63600000000002"
                            width="30"
                            height="82.36399999999998"
                            radius="0"
                            fill="#9980FA"
                            name="Page G"
                            class="recharts-rectangle"
                            d="M 904.4,158.63600000000002 h 30 v 82.36399999999998 h -30 Z"
                          ></path>
                        </g>
                      </g>
                    </g>
                    <g class="recharts-layer"></g>
                  </g>
                </svg>
                <div
                  class="recharts-legend-wrapper"
                  style="position: absolute; width: 928px; height: auto; left: 20px; bottom: 5px;"
                >
                  <ul
                    class="recharts-default-legend"
                    style="padding: 0px; margin: 0px; text-align: center;"
                  >
                    <li
                      class="recharts-legend-item legend-item-0"
                      style="display: inline-block; margin-right: 10px;"
                    >
                      <svg
                        class="recharts-surface"
                        width="14"
                        height="14"
                        viewBox="0 0 32 32"
                        style="display: inline-block; vertical-align: middle; margin-right: 4px;"
                      >
                        <title></title>
                        <desc></desc>
                        <path
                          stroke="none"
                          fill="#33d9b2"
                          d="M0,4h32v24h-32z"
                          class="recharts-legend-icon"
                        ></path>
                      </svg>
                      <span
                        class="recharts-legend-item-text"
                        style="color: rgb(51, 217, 178);"
                      >
                        pv
                      </span>
                    </li>
                    <li
                      class="recharts-legend-item legend-item-1"
                      style="display: inline-block; margin-right: 10px;"
                    >
                      <svg
                        class="recharts-surface"
                        width="14"
                        height="14"
                        viewBox="0 0 32 32"
                        style="display: inline-block; vertical-align: middle; margin-right: 4px;"
                      >
                        <title></title>
                        <desc></desc>
                        <path
                          stroke="none"
                          fill="#ff6348"
                          d="M0,4h32v24h-32z"
                          class="recharts-legend-icon"
                        ></path>
                      </svg>
                      <span
                        class="recharts-legend-item-text"
                        style="color: rgb(255, 99, 72);"
                      >
                        uv
                      </span>
                    </li>
                    <li
                      class="recharts-legend-item legend-item-2"
                      style="display: inline-block; margin-right: 10px;"
                    >
                      <svg
                        class="recharts-surface"
                        width="14"
                        height="14"
                        viewBox="0 0 32 32"
                        style="display: inline-block; vertical-align: middle; margin-right: 4px;"
                      >
                        <title></title>
                        <desc></desc>
                        <path
                          stroke="none"
                          fill="#9980FA"
                          d="M0,4h32v24h-32z"
                          class="recharts-legend-icon"
                        ></path>
                      </svg>
                      <span
                        class="recharts-legend-item-text"
                        style="color: rgb(153, 128, 250);"
                      >
                        uv
                      </span>
                    </li>
                  </ul>
                </div>
                <div
                  tabindex="-1"
                  class="recharts-tooltip-wrapper recharts-tooltip-wrapper-right recharts-tooltip-wrapper-bottom"
                  style="visibility: hidden; pointer-events: none; position: absolute; top: 0px; left: 0px; transform: translate(80px, 10px);"
                >
                  <div
                    class="recharts-default-tooltip"
                    style="margin: 0px; padding: 10px; background-color: rgb(255, 255, 255); border: 1px solid rgb(204, 204, 204); white-space: nowrap;"
                  >
                    <p class="recharts-tooltip-label" style="margin: 0px;"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
