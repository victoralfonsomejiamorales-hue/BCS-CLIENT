import ProductDetail from "@/core/components/page/products/detail";
import { Product } from "@/core/domain/entities/product";
import { productService } from "@/core/domain/services/product";
import { notFound } from "next/navigation";
// Mock de producto
const mockProduct: Product = {
  _id: "1",
  name: "Producto 1",
  description: "Descripción del producto 1",
  interestRate: 5.5,
  minimumAmount: 1000,
  benefits: [
    { title: "Beneficio 1", description: "Descripción del beneficio 1" },
    { title: "Beneficio 2", description: "Descripción del beneficio 2" },
  ],
  features: [
    {
      title: "Característica 1",
      description: "Descripción de la característica 1",
    },
    {
      title: "Característica 2",
      description: "Descripción de la característica 2",
    },
  ],
  requirements: ["Requisito 1", "Requisito 2"],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetailPage({
  params,
}: Readonly<PageProps>) {
  const { id } = await params;
  const product = await productService.getProductById(id);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
