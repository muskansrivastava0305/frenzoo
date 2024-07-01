import React, { useRef } from "react";
import Home_page from "./Home_page";
import ProductAccordion from "../utils/ProductAccordion";
import { Bottom_cart_comp } from "../../../components/user";
import { useSelector } from "react-redux";
import {
  selectTotalItemCount,
  selectTotalPrice,
} from "../../../Redux/Freatures/User/cartSlice";

const products = [
  {
    id: 1,
    category: "Platters",
    name:'Veg Kebab Platter',
    price:'549',
    description: "A complete combo of Veg. Kababs this starter is made up using mixed vegetables and spices.",
    img:'https://b.zmtcdn.com/data/dish_photos/a1c/6aad3db94236d4622b69b7689bd2ba1c.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*'
  },
  {
    id: 2,
    category: "Platters",
    name:'Non Veg Kebab Platter',
    price:'640',
    description: "Assortment of artfully blended non-vegetarian kebabs, A complete combo for Non-Veg Lovers.",
    img:'https://b.zmtcdn.com/data/dish_photos/5ef/9f2bdfb40e29de058b0d394e3d7d75ef.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*'
  },
  {
    id: 3,
    category: "Soups",
    name:'Veg Talumein Soup',
    price:'225',
    description: "This vegetarian Talumein Soup is made with assorted vegetables and noodles.",
    img:'https://b.zmtcdn.com/data/dish_photos/468/1b2982934c52ee96c0c787b85b061468.jpeg?output-format=webp&fit=around|130:130&crop=130:130;*,*'
  },
  {
    id: 4,
    category: "Starters",
    name:'Dahi ke Kebab',
    price:'379',
    description: "Hung curd mixed with spices wrapped with a thin layer of bread and fried.",
    img:'https://b.zmtcdn.com/data/dish_photos/63b/d29a58fa350d0b1c5146bb164ad8763b.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*'
  },
  {
    id: 5,
    category: "Main Course",
    name:'Vegetable Manchurian Gravy',
    price:'299',
    description: "Vegetable manchurian gravy is deliciously spicy and soupy manchurian prepared with vegetables like cabbage, carrot and capsicum.",
    img:'https://b.zmtcdn.com/data/dish_photos/f32/234e484a8607263fe8264510e1cf7f32.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*'
  },
  {
    id: 6,
    category: "Breads",
    name:'Aloo Pyaz Paratha',
    price:'199',
    description: "Served with gravy/raita.",
    img:'https://b.zmtcdn.com/data/dish_photos/ca9/5a581bf586da66c997419c4741238ca9.jpg?output-format=webp&fit=around|85:85&crop=85:85;*,*'
  },
  {
    id: 7,
    category: "Rice & Biryani",
    name:'Plain Rice',
    price:'199',
    description: "Boiled rice.",
    img:'https://b.zmtcdn.com/data/dish_photos/326/69cbf493ef0d289758da2f38eca94326.jpg?output-format=webp&fit=around|85:85&crop=85:85;*,*'
  },
  {
    id: 8,
    category: "Biryani",
    name:'Subz Biryani',
    price:'379',
    description: "Served with raita/gravy.",
    img:'https://b.zmtcdn.com/data/dish_photos/91e/1b1eccd22aee08f8472cafe2b160091e.jpg?output-format=webp&fit=around|85:85&crop=85:85;*,*'
  },
  {
    id: 9,
    category: "Fried Rice & Noodles",
    name:'Vegetable Fried Rice',
    price:'379',
    description: "Vegetable fried rice recipe is made with a hearty mix of fresh veggies, green onions, seasonings.",
    img:'https://b.zmtcdn.com/data/dish_photos/91e/1b1eccd22aee08f8472cafe2b160091e.jpg?output-format=webp&fit=around|85:85&crop=85:85;*,*'
  },
 
];

function Home_page_content() {
  const price = useSelector(selectTotalPrice);
  const totolCount = useSelector(selectTotalItemCount);
  const card = useSelector(state => state.cart.products)
  console.log(price)

  return (
    <Home_page>
      <div className=" w-full flex justify-start gap-3 sm:gap-7  pb-5">
        <button className=" flex justify-center items-center border rounded-md text-[13px] sm:text-sm gap-2 px-1 sm:px-2 border-[#f5f5f5]">
          <img
            src="https://frenzoo.qrdine-in.com/public/assets/images/icons/veg.svg"
            alt="veg"
          />
          Veg
        </button>
        <button className=" flex justify-center items-center border rounded-md text-sm gap-2 p-2 border-[#f5f5f5]">
          <img
            src="https://frenzoo.qrdine-in.com/public/assets/images/svg/nonveg.svg"
            alt="veg"
          />
          Veg
        </button>
        <button className=" flex justify-center items-center border rounded-md text-sm gap-2 p-2 border-[#f5f5f5]">
          <img
            src="https://frenzoo.qrdine-in.com/public/assets/images/icons/veg.svg"
            alt="veg"
          />
          Best Seller
        </button>
      </div>
      <div className=" w-full relative">
        <div className=" flex justify-start flex-col border-t border-t-gray-200">
          <div className=" pt-6">
            <div className=" text-xl text-black font-bold">Recommended</div>
          </div>
          <div className=" pb-8">
            <div>
              {products.map((product) => (
                <ProductAccordion
                  key={product.id}
                  id={product.id}
                  category={product.category}
                  name={product.name}
                  image={product.img}
                  price={product.price}
                  content={product.description}
                />
              ))}
            </div>
          </div>
         {card.length > 0 && (
           <Bottom_cart_comp
           price={price}
           item={totolCount}
           action="View Cart"
           to="/cart_items"
         />
         )}
        </div>
      </div>

      {/*  cart  */}
      {/* <Custom_Food/> */}
    </Home_page>
  );
}

export default Home_page_content;
