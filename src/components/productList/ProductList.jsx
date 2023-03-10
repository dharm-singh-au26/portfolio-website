import Product from "../product/Product";
import "./productList.css";
import { products } from "../../data";


const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire . It's Dharm</h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ea aliquam doloremque tempore doloribus nesciunt debitis ex iure molestias enim?
        </p>
      </div>
      <div className="pl-list">
       {products.map(item => (

        <Product key={item.id} img={item.img} link={item.link}/>
       ))}
      </div>
    </div>
  );
};

export default ProductList;
