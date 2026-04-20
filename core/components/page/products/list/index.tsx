import { ProductPreview } from "@/core/domain/entities/product";
import FullProductList from "./list";
import EmptyProductList from "./empty-list";
import SearchInput from "@/core/components/common/search-input";

interface ProducsListProps {
  products: ProductPreview[];
}

const ProductList = ({ products }: ProducsListProps) => {
  return (
    <section>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Productos Financieros</h1>
        <p className="text-muted-foreground">
          Descubre nuestras cuentas de ahorro y encuentra la que mejor se adapte
          a tus necesidades
        </p>
      </div>

      {/* TODO: Agregar filtros */}
      <div className="mb-6">
        <SearchInput />
      </div>

      {products.length === 0 ? (
        <EmptyProductList />
      ) : (
        <FullProductList products={products} />
      )}
    </section>
  );
};

export default ProductList;
