import ProductCard from "./ProductCard";

function ProductList({ productList }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {productList.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </div>
  );
}

export default ProductList;
