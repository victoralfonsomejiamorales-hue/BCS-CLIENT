import { Product, ProductPreview } from "../entities/product";

type ProductFilter = {
  search?: string;
  type?: string;
};

class ProductService {
  async getProducts(filter?: ProductFilter): Promise<ProductPreview[]> {
    try {
      const { search, type } = filter || {};

      const queryParams = new URLSearchParams();

      if (search) {
        queryParams.set("search", search);
      }

      if (type) {
        queryParams.set("type", type);
      }

      let url = `${process.env.NEXT_PUBLIC_API_URL}/products`;
      if (queryParams.size > 0) {
        url += `?${queryParams.toString()}`;
      }

      const response = await fetch(url);

      if (response.ok) {
        const res = await response.json();
        return res.data;
      }

      throw new Error("Failed to fetch products");
    } catch {
      return [];
    }
  }

  async getProductById(id: string): Promise<Product | null> {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`,
      );

      if (response.ok) {
        const res = await response.json();
        return res.data;
      }

      throw new Error("Failed to fetch product");
    } catch {
      return null;
    }
  }
}

export const productService = new ProductService();
