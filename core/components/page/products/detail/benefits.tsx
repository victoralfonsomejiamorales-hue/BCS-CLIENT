import { Product } from "@/core/domain/entities/product";

interface ProductBenefitsProps {
  benefits: Product["benefits"];
}

const ProductBenefits = ({ benefits }: Readonly<ProductBenefitsProps>) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Beneficios</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {benefits.map((benefit, index) => (
          <div
            key={`benefit-${benefit.title}-${index}`}
            className="border border-gray-200 rounded-3xl shadow-sm bg-white p-4"
          >
            <div className="flex items-center gap-4">
              <div className="shrink-0 rounded-full bg-blue-500 p-2">
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
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div className="flex-1 space-y-1">
                <h3 className="font-semibold text-base">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductBenefits;
