import { ProductPreview } from "@/core/domain/entities/product";
import ProductPreviewCard from "./card";

interface ProductListProps {
  products: ProductPreview[];
}

const FullProductList = ({ products }: Readonly<ProductListProps>) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductPreviewCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default FullProductList;
