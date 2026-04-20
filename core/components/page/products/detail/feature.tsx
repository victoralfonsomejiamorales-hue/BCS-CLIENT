import { Product } from "@/core/domain/entities/product";

interface ProductFeaturesProps {
  features: Product["features"];
}

const ProductFeature = ({ features }: Readonly<ProductFeaturesProps>) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Características</h2>
      <div className="space-y-4">
        {features.map((feature, index) => (
          <div
            key={`feature-${feature.title}-${index}`}
            className="border border-gray-200 rounded-3xl shadow-sm bg-white p-4"
          >
            <div className="flex items-center gap-4">
              <div className="shrink-0 rounded-full bg-black p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <div className="flex-1 space-y-1">
                <h3 className="font-semibold text-base">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFeature;
