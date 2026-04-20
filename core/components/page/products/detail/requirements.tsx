import { Product } from "@/core/domain/entities/product";

interface ProductRequirementsProps {
  requirements: Product["requirements"];
}

const ProductRequirements = ({
  requirements,
}: Readonly<ProductRequirementsProps>) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Requisitos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {requirements.map((requirement, index) => (
          <div
            key={`requirement-${requirement}-${index}`}
            className="flex items-center gap-4 p-2"
          >
            <div className="shrink-0 rounded-full bg-blue-500 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div className="flex-1 space-y-1">
              <span className="font-semibold text-base">{requirement}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductRequirements;
