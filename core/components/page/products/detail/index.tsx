import BackLink from "@/core/components/common/back-link";
import { Product } from "@/core/domain/entities/product";
import ProductBenefits from "./benefits";
import ProductFeature from "./feature";
import ProductRequirements from "./requirements";

interface ProductDetailProps {
  product: Product;
}
const ProductDetail = ({ product }: Readonly<ProductDetailProps>) => {
  return (
    <section id="product-detail">
      <div className="mb-6">
        <BackLink href="/products" />
      </div>

      <div className="border border-gray-200 rounded-3xl shadow-sm bg-white p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-base text-gray-600">{product.description}</p>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <span className="text-sm text-gray-500">Tasa de interés:</span>
              <p className="text-lg font-semibold">
                {product.interestRate}% EA
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-sm text-gray-500">Monto mínimo:</span>
              <p className="text-lg font-semibold">
                {product.minimumAmount === 0
                  ? "Sin mínimo"
                  : `$${product.minimumAmount.toLocaleString()}`}
              </p>
            </div>
          </div>

          {product.benefits && product.benefits.length > 0 && (
            <>
              <hr className="border-gray-200" />
              <ProductBenefits benefits={product.benefits} />
            </>
          )}

          {product.features && product.features.length > 0 && (
            <>
              <hr className="border-gray-200" />
              <ProductFeature features={product.features} />
            </>
          )}

          {product.requirements && product.requirements.length > 0 && (
            <>
              <hr className="border-gray-200" />
              <ProductRequirements requirements={product.requirements} />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
