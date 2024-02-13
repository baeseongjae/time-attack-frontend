import axios from "axios";
import AuthAPI from "./auth/auth.api";
import ProductsAPI from "./products/products.api";

const coreClient = axios.create({
  baseURL: "https://port-0-express-server-17xco2nlsidlckv.sel5.cloudtype.app",
});

class API {
  static auth = new AuthAPI(coreClient);
  static products = new ProductsAPI(coreClient);

  static setAccessToken(accessToken: string) {
    coreClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  }

  static removeAccessToken() {
    coreClient.defaults.headers.common.Authorization = ``;
  }
}

export default API;
