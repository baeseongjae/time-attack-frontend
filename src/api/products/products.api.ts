import { Product } from "@/types/Product.type";
import { AxiosInstance } from "axios";

class ProductsAPI {
  private coreClient: AxiosInstance;

  constructor(coreClient: AxiosInstance) {
    this.coreClient = coreClient;
  }

  getProducts = async () => {
    const response = await this.coreClient.get("/products");
    return response.data as Product[];
  };

  getProduct = async (productId: string) => {
    const response = await this.coreClient.get(`/products/${productId}`);
    return response.data as Product;
  };
}

export default ProductsAPI;
