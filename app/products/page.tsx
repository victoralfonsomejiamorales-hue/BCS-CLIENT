import ProductList from "@/core/components/page/products/list";
import { ProductPreview } from "@/core/domain/entities/product";
import { productService } from "@/core/domain/services/product";

const mockProducts: ProductPreview[] = [
  {
    _id: "1",
    name: "Cuenta de Ahorros Premium",
    description:
      "Ahorra con las mejores tasas del mercado y accede a beneficios exclusivos.",
    interestRate: 4.5,
    minimumAmount: 1000,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "2",
    name: "CDT Digital",
    description:
      "Certificado de Depósito a Término con tasas competitivas y retiro flexible.",
    interestRate: 6.2,
    minimumAmount: 50000,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "3",
    name: "Crédito de Consumo",
    description:
      "Financia tus proyectos con tasas bajas y plazos hasta 60 meses.",
    interestRate: 12.5,
    minimumAmount: 100000,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "4",
    name: "Tarjeta de Crédito Gold",
    description:
      "Disfruta de beneficios globales y sin anualidad el primer año.",
    interestRate: 18.9,
    minimumAmount: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "5",
    name: "Fondo de Inversión",
    description:
      "Diversifica tu portafolio con expertos en gestión financiera.",
    interestRate: 8.3,
    minimumAmount: 25000,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "6",
    name: "Préstamo Hipotecario",
    description: "La casa de tus sueños con la mejor tasa del mercado.",
    interestRate: 9.1,
    minimumAmount: 500000,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

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
