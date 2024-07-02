import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  incrementProduct,
  decrementProduct,
} from "../../../Redux/Freatures/User/cartSlice";
import { Custom_Food } from "../../../components/user";

const ProductAccordion = ({ category, products }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedProducts, setExpandedProducts] = useState({});
  const [isCustomFoodComp, setCustomFoodComp] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const contentRef = useRef(null);
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.products);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
      } else {
        contentRef.current.style.height = "0px";
      }
    }
  }, [isOpen]);

  const handleShowCustomFood = (product) => {
    setSelectedProduct(product);
    setCustomFoodComp(true);
  };

  const handleAddProduct = (product, options) => {
    const customizedProduct = { ...product, ...options };
    dispatch(addProduct(customizedProduct));
    setCustomFoodComp(false);
  };

  const handleIncrement = (id, size) => {
    dispatch(incrementProduct({ id, size }));
  };

  const handleDecrement = (id, size) => {
    dispatch(decrementProduct({ id, size }));
  };

  const handleToggle = (id) => {
    setExpandedProducts((prevExpandedProducts) => ({
      ...prevExpandedProducts,
      [id]: !prevExpandedProducts[id],
    }));
  };

  const getTruncatedDescription = (description) => {
    if (description.length <= 20) {
      return description;
    }
    return description.substring(0, 20) + "...";
  };

  return (
    products.length > 0 && (
      <div className="border-b border-gray-200">
        <div
          className="flex justify-between items-center py-6 cursor-pointer"
          onClick={toggleAccordion}
        >
          <h2 className="text-sm font-semibold flex gap-1 text-gray-600">
            {category}
            <div>({products.length})</div>
          </h2>
          <span>
            {isOpen ? (
              <i className="fa-solid fa-angle-up"></i>
            ) : (
              <i className="fa-solid fa-angle-down"></i>
            )}
          </span>
        </div>
        <div
          ref={contentRef}
          className="overflow-hidden transition-height duration-300 ease-in-out"
          style={{ height: "0px" }}
        >
          {products.map((item) => {
            const productInCart = cartProducts.find(
              (product) => product.id === item.id
            );
            const isExpanded = expandedProducts[item.id];

            return (
              <div key={item.id} className="flex justify-between mb-8">
                <div className="w-full mr-6">
                  <div className="border-b border-dashed border-b-gray-300 pb-4">
                    <div className="pb-1">
                      <img
                        src="https://frenzoo.qrdine-in.com/assets/images/icons/veg.svg"
                        alt="category"
                      />
                    </div>
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-[#ff8e2f] font-semibold">
                      ₹ {item.price}
                    </div>
                  </div>
                  <div className="flex flex-wrap text-[12px] mt-1 text-gray-500">
                    <div>
                      {isExpanded
                        ? item.description
                        : getTruncatedDescription(item.description)}
                    </div>
                    <button
                      onClick={() => handleToggle(item.id)}
                      className="text-[#ff8e2f] mb-2 text-sm"
                    >
                      {isExpanded ? "Show less" : "Read more"}
                    </button>
                  </div>
                </div>
                <div className="w-36 h-36 rounded-md">
                  <img
                    className="overflow-auto w-full rounded-md"
                    src={item.img}
                    alt=""
                  />
                  <div className="flex justify-center mt-2">
                    {productInCart ? (
                      <div className="border-[#ff8e2f] flex gap-4 justify-center items-center text-[#ff8e2f] rounded-md border px-4 py-2">
                        <button onClick={() => handleDecrement(item.id, item.size)}>
                          <i className="fa-solid fa-minus"></i>
                        </button>
                        <div>{productInCart.quantity}</div>
                        <button onClick={() => handleIncrement(item.id, item.size)}>
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleShowCustomFood(item)}
                        className="border-[#ff8e2f] flex gap-1 justify-center items-center text-[#ff8e2f] rounded-md border px-6 py-2"
                      >
                        <i className="fa-solid fa-plus"></i>
                        <div>Add</div>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {isCustomFoodComp && (
          <Custom_Food
            product={selectedProduct}
            setCustomFoodComp={setCustomFoodComp}
            onAddProduct={handleAddProduct}
          />
        )}
      </div>
    )
  );
};

export default ProductAccordion;
