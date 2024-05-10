import { User } from "../interfaces/User";
import Authuser from "./AuthUserService";

export default function UserService() {
  const { http2 } = Authuser();

  const MY_APP_BACKEND_URL_USER: string =
    import.meta.env.VITE_BACKEND_HOST_URL + "/user";

  const createOneUser = (user: User) => {
    return http2.post(MY_APP_BACKEND_URL_USER, user);
  };

  return {
    createUser: createOneUser,
  };
}
