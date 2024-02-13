import { AxiosInstance } from "axios";
import { LogInDto, SignUpDto } from "./auth.dto";
import { LogInData, SignUpData } from "./auth.response";

class AuthAPI {
  private coreClient: AxiosInstance;

  constructor(coreClient: AxiosInstance) {
    this.coreClient = coreClient;
  }

  logIn = async (dto: LogInDto) => {
    const response = await this.coreClient.post<LogInData>("/auth/log-in", dto);
    console.log(response); //응답 한번 살펴보기

    return response.data;
  };

  signUp = async (dto: SignUpDto) => {
    const response = await this.coreClient.post<SignUpData>(
      "/auth/sign-up",
      dto
    );

    console.log(response);
    return response.data;
  };

  refreshToken = async () => {
    const response = await this.coreClient.get("auth/refresh-token", {
      withCredentials: true,
    });
    console.log(response);
    return response;
  };
}

export default AuthAPI;
