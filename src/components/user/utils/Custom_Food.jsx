import { Skeleton } from "@mui/material";
import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ApiUrl } from "../../../Api/ApiConstants";

function Custom_Food({ setCustomFoodComp, productId, onAddProduct }) {
  const [items, setItems] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [amount, setAmount] = useState("");
  const [addons, setAddons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [checkedAddons, setCheckedAddons] = useState({});
  const [extras, setExtras] = useState([]);
  const [checkedExtras, setCheckedExtras] = useState({});

  async function getProductData() {
    setIsLoading(true);
    try {
      await axios
        .get(`${ApiUrl.addons}?product_id=${productId}`)
        .then((res) => {
          setItems(res.data);
          setIsLoading(false);
          if (res.data.variations.length > 0) {
            const defaultVariant = res.data.variations[0].values[0];
            setSelectedSize(defaultVariant.label);
            setAmount(defaultVariant.optionPrice);
          } else {
            setAmount(res.data.product.price);
          }
        });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getProductData();
  }, []);

  const handleDivClick = (size, price) => {
    setSelectedSize(size);
    setAmount(price);
  };

  const handleClose = () => {
    setCustomFoodComp(false);
  };

  const handleAddonChange = (addon, isChecked) => {
    if (isChecked) {
      setAddons([...addons, { ...addon, quantity: 1 }]);
    } else {
      setAddons(addons.filter((item) => item.price !== addon.price));
    }
    setCheckedAddons((prev) => ({ ...prev, [addon.id]: isChecked }));
  };

  const handleExtrasChange = (extra, isChecked) => {
    if (isChecked) {
      setExtras([...extras, { ...extra, quantity: 1 }]);
    } else {
      setExtras(extras.filter((item) => item.price !== extra.price));
    }
    setCheckedExtras((prev) => ({ ...prev, [extra.id]: isChecked }));
  };

  const price =
    parseFloat(amount) +
    addons.reduce((acc, curr) => acc + parseFloat(curr.price), 0) +
    extras.reduce((acc, curr) => acc + parseFloat(curr.price), 0);

  return (
    <div className="flex justify-center z-50 bg-[#000000cc] items-center w-full h-full fixed right-0 top-0">
      <div className="bg-white w-[45rem] mx-3 h-fit shadow-custom border rounded-3xl">
        <div>
          <button
            onClick={handleClose}
            className="inline-block px-7 pt-3 text-gray-700 text-2xl"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="w-full flex justify-center text-lg font-semibold text-gray-600">
            Custom Food
          </div>
        </div>
        <div className="px-8 py-8">
          {/* product info -----  */}
          <div className="flex gap-2">
            <div className="w-28 h-28 rounded-md overflow-hidden">
              {isLoading ? (
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={112}
                  height={112}
                />
              ) : (
                <img loading="lazy" src={items?.product.image_url} alt="product" />
              )}
            </div>
            <div>
              {isLoading ? (
                <Skeleton animation="wave" variant="text" width={112} />
              ) : (
                <div className="font-semibold">{items?.product.name}</div>
              )}
              {isLoading ? (
                <Skeleton animation="wave" variant="text" width={112} />
              ) : (
                <div className="text-gray-400 text-sm">
                  {items?.product.description}
                </div>
              )}
            </div>
          </div>

          {isLoading ? (
            <div className=" w-full border-b pb-3 border-dashed border-b-gray-300">
              {
                isLoading ?(
                  <Skeleton variant="text" animation="wave" width={112}/>
                ):(
                  <div className=" font-semibold">Addons</div>
                )
              }
              <button
                      className=" w-full pt-3 flex justify-between"
                    >
                  <Skeleton variant="text" animation="wave" width={112}/>
                  <div className=" flex gap-5 items-center">
                    <Skeleton  variant="text" animation="wave" width={40}/>
                    <Skeleton  variant="circular" animation="wave" width={15} height={15}/>
                  </div>
                  </button>
            </div>
          ) : (
            <>
              {/* varients ---- */}
              {items?.variations.length > 0 && (
                <div className="font-semibold mt-8 text-gray-700">
                  Choose Size
                </div>
              )}
              <div className="py-3">
                {items &&
                  items?.variations.map((item) => {
                    return item.values.map((variation) => (
                      <div
                        key={variation.label}
                        onClick={() =>
                          handleDivClick(variation.label, variation.optionPrice)
                        }
                        className="border-dashed border-b cursor-pointer border-b-gray-300 mb-4 pb-3 justify-between flex"
                      >
                        <div>{variation.label}</div>
                        <div className="flex gap-5 items-center">
                          <label htmlFor="">₹ {variation.optionPrice}</label>
                          <input
                            type="radio"
                            name="size"
                            value={variation.label}
                            checked={selectedSize === variation.label}
                            readOnly
                          />
                        </div>
                      </div>
                    ));
                  })}
              </div>
              {/* addons ------- */}
              {items?.addOns.length > 0 && (
                <div className=" w-full border-b pb-3 border-dashed border-b-gray-300">
                  <div className=" font-semibold">Addons</div>
                  {items?.addOns.map((addon) => (
                    <button
                      onClick={() =>
                        handleAddonChange(addon, !checkedAddons[addon.id])
                      }
                      key={addon.id}
                      className=" w-full pt-3 flex justify-between"
                    >
                      <div>{addon.name}</div>
                      <div className=" flex gap-5 items-center">
                        <div>₹ {addon.price}</div>
                        <div>
                          <input
                            checked={checkedAddons[addon.id] || false}
                            type="checkbox"
                            value={addon.price}
                            onChange={(e) =>
                              handleAddonChange(addon, e.target.checked)
                            }
                          />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
              {/* extrass ----- */}
              {items?.extras.length > 0 && (
                <div className=" border-b border-dashed border-b-gray-300 py-3 mb-3 w-full">
                  <div className=" font-semibold">Extras</div>
                  {items?.extras.map((extra) => (
                    <button
                      key={extra.id}
                      onClick={() =>
                        handleExtrasChange(extra, !checkedExtras[extra.id])
                      }
                      className=" w-full pt-3 flex justify-between"
                    >
                      <div>{extra.name}</div>
                      <div className=" flex gap-5 items-center">
                        <div>₹ {extra.price}</div>
                        <div>
                          <input
                            onChange={(e) =>
                              handleExtrasChange(extra, e.target.checked)
                            }
                            checked={checkedExtras[extra.id] || false}
                            type="checkbox"
                          />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
          {/* grand total ---- */}
          <div className="flex justify-between mb-7">
            {isLoading ? (
              <Skeleton variant="text" animation="wave" width={150} />
            ) : (
              <div className="font-semibold text-gray-700">Grand Total</div>
            )}
            {isLoading ? (
              <Skeleton variant="text" animation="wave" width={150} />
            ) : (
              <div className="pr-7 font-semibold text-orange-500">
                ₹ {price}
              </div>
            )}
          </div>

          {/* add product */}
          <div
            className="bg-orange-400 text-white text-center p-2 rounded-lg mt-8 cursor-pointer"
            onClick={() =>
              onAddProduct(items.product, {
                size: selectedSize,
                price: parseFloat(amount),
                addonExtras: [...addons, ...extras],
              })
            }
          >
            Apply
          </div>
        </div>
      </div>
    </div>
  );
}

export default Custom_Food;
