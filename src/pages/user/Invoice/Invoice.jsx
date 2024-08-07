import React from "react";

function Invoice() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      {/* button */}
      <div className="w-full flex justify-center p-5 no-print">
        <div className="flex gap-2">
          <button
            className="w-fit bg-red-500 text-white p-2 text-sm rounded-md"
            onClick={handlePrint}
          >
            Print Invoice
          </button>
          <button
            onClick={() => (window.location.href = "/")}
            className="bg-red-500 text-white p-2 text-sm rounded-md w-fit"
          >
            Back
          </button>
        </div>
      </div>
      {/* invoice */}
      <div className="font-roboto flex w-full justify-center print-container">
        <div className="flex w-full items-center justify-center">
          <div className=" w-72 rounded bg-white px-6 pt-8">
            <div className="flex flex-col justify-center border-b border-b-gray-400 border-dashed py-4 items-center gap-2">
              <h4 className="font-semibold text-2xl text-center">
                Frenzoo Cafe & Restuarant
              </h4>
              <p className="text-base">Noida 63</p>
            </div>
            <div className="flex flex-col gap-3 py-4 text-xs">
              <p className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span>07 Aug 2024</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">Order ID:</span>
                <span>1002002</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">Table No:</span>
                <span>8</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">Invoice No:</span>
                <span>#00222</span>
              </p>
            </div>
            <div className="flex flex-col gap-3 pb-6 pt-2 text-xs">
              <table className="w-full text-left mb-4">
                <thead>
                  <tr className="flex justify-between border-b mb-4 border-b-gray-400 py-4 border-dashed ">
                    <th className="w-16 font-normal">Product</th>
                    <th className="w-12 font-normal">Price</th>
                    <th className="w-12 font-normal">QTY</th>
                    <th className="w-12 font-normal">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="flex justify-between">
                    <td className="w-16 font-semibold text-sm">Pizza</td>
                    <td className="text-start w-12">2000</td>
                    <td className="w-12">60</td>
                    <td className="w-12">120</td>
                  </tr>
                </tbody>
              </table>

              <div className="flex justify-end flex-col items-end gap-4">
                <div className="w-1/2 flex flex-col gap-4">
                  <div className="text-sm flex justify-between w-full">
                    <div>Tax / VAT:</div>
                    <div>0</div>
                  </div>
                  <div className="w-full text-sm flex justify-between">
                    <div>Addon Cost:</div>
                    <div>0</div>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="font-semibold text-base flex justify-between w-full">
                    <div>Total:</div>
                    <div>99</div>
                  </div>
                </div>
              </div>

              <div className="pt-6 justify-center items-center flex flex-col gap-2">
                <div className="uppercase font-semibold text-xs">Thank you</div>
              </div>

            </div>
            <div className="flex my-10 justify-center">
        <div className="text-center text-gray-400 text-xs">
          Copyright © qrdine-in.com Powered By TrussBiz
        </div>
      </div>
          </div>
        </div>
      </div>
      {/* footer */}
      
      <style jsx>{`
        @page {
          size: auto;  /* auto is the initial value */
          margin: 0mm; /* this affects the margin in the printer settings */
        }
        @media print {
          * {
            -webkit-print-color-adjust: exact !important; /* Chrome, Safari, Edge */
            color-adjust: exact !important; /* Firefox */
          }
          body {
            margin: 0;
            padding: 0;
          }
          .no-print {
            display: none;
          }
          .print-container {
            width: 100%;
          }
          /* Hide the page URL, date, time, and page number */
          @page {
            margin: 0;
          }
          body::after {
            content: none !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Invoice;
