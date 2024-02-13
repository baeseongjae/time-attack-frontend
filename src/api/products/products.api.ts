import { AxiosInstance } from "axios";

class ProductsAPI {
  private coreClient: AxiosInstance;

  constructor(coreClient: AxiosInstance) {
    this.coreClient = coreClient;
  }

  getProducts = async () => {
    const response = await this.coreClient.get("/products");
    return response.data;
  };
}

export default ProductsAPI;
