import ProductDetail from "@/core/components/page/products/detail";
import { productService } from "@/core/domain/services/product";
import { notFound } from "next/navigation";

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
