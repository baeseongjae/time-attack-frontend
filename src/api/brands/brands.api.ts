import { AxiosInstance } from "axios";

class BrandsAPI {
  private coreClient: AxiosInstance;

  constructor(coreClient: AxiosInstance) {
    this.coreClient = coreClient;
  }

  getBrands = async () => {
    const response = await this.coreClient.get("/brands");
    console.log(response.data);
    return response.data;
  };

  getProduct = async (brandId: string) => {
    const response = await this.coreClient.get(`/brands/${brandId}`);
    return response.data;
  };
}

export default BrandsAPI;
