import { use, Suspense } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ productPromise, carts, setCarts }) => {
  const products = use(productPromise);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-10 items-stretch">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          carts={carts}
          setCarts={setCarts}
        />
      ))}
    </div>
  );
};

const ProductsSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-10">
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="rounded-[16px] p-6 border-2 border-[#f2f2f2] bg-white animate-pulse"
      >
        <div className="w-[60px] h-[60px] rounded-full bg-gray-200 mb-4"></div>
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
        <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
        <div className="h-[52px] bg-gray-200 rounded-full w-full mt-auto"></div>
      </div>
    ))}
  </div>
);

const Products = ({ productPromise, carts, setCarts }) => {
  return (
    <section className="pb-[120px] pt-4 bg-white" id="products">
      <div className="max-w-[1200px] mx-auto px-6">

        <Suspense fallback={<ProductsSkeleton />}>
          <ProductList
            productPromise={productPromise}
            carts={carts}
            setCarts={setCarts}
          />
        </Suspense>
      </div>
    </section>
  );
};

export default Products;
