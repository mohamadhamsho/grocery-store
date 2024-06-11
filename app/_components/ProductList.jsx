import ProductCard from "./ProductCard";

function ProductList({ productList }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {productList.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </div>
  );
}

export default ProductList;
