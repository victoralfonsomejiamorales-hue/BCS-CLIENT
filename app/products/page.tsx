import ProductList from "@/core/components/page/products/list";
import { productService } from "@/core/domain/services/product";

type PageProps = {
  searchParams: Promise<{
    search?: string;
    type?: string;
  }>;
};

export default async function ProductsPage({ searchParams }: PageProps) {
  const { search, type } = await searchParams;
  const products = await productService.getProducts({
    search,
    type,
  });

  return <ProductList products={products} />;
}
