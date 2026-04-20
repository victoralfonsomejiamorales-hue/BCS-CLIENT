export interface ProductPreview {
  _id: string;
  name: string;
  description: string;
  interestRate: number;
  minimumAmount: number;
  createdAt: string;
  updatedAt: string;
}

export interface Product extends ProductPreview {
  benefits: {
    title: string;
    description: string;
  }[];
  features: {
    title: string;
    description: string;
  }[];
  requirements: string[];
}
