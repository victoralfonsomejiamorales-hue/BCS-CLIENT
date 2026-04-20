import { ProductPreview } from "@/core/domain/entities/product";
import Link from "next/link";

interface ProductPreviewCardProps {
  product: ProductPreview;
}

const ProductPreviewCard = ({ product }: Readonly<ProductPreviewCardProps>) => {
  return (
    <div className="border border-gray-200 rounded-3xl shadow-sm bg-white p-6 flex flex-col">
      <div className="mb-4">
        <h3 className="mb-2 text-lg font-bold">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
      </div>
      <div className="space-y-2 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Tasa de interés:</span>
          <span className="text-sm font-medium">
            {product.interestRate}% EA
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Monto mínimo:</span>
          <span className="text-sm font-medium">
            {product.minimumAmount === 0
              ? "Sin mínimo"
              : `$${product.minimumAmount.toLocaleString()}`}
          </span>
        </div>
      </div>
      <div className="mt-auto">
        <Link
          href={`/products/${product._id}`}
          className="block w-full text-center px-4 py-2 bg-black text-white hover:bg-gray-700 rounded-3xl"
        >
          Conoce más
        </Link>
      </div>
    </div>
  );
};

export default ProductPreviewCard;
