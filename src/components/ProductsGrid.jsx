import { Link, useLoaderData } from "react-router";
import { formatPrice } from "../utils";
import { Card } from "antd";

const ProductsGrid = () => {
  const { products } = useLoaderData();

  return (
    <div className="pt-12 p-3 lg:p-1 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { title, price, image } = product.attributes;
        const dollars = formatPrice(price);

        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="group"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={image}
                alt={title}
                className="w-full h-60 object-cover transform transition  duration-300 group-hover:scale-105"
              />
              {/* Soft blur effect */}
              <div className="absolute inset-0"></div>
              {/* Text */}
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="text-xl font-bold text-white">{dollars}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
