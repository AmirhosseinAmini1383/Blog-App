"use client";
import {
  editUserApi,
  getUserApi,
  logoutApi,
  signinApi,
  signupApi,
} from "@/services/authService";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { createContext, useReducer, useContext, useEffect } from "react";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "signin":
      return {
        user: action.payload,
        isAuthenticated: true,
      };
    case "signup":
      return {
        user: action.payload,
        isAuthenticated: true,
      };
    case "user/loaded":
      return {
        user: action.payload,
        isAuthenticated: true,
      };
    case "user/updated":
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
      };
    case "logout":
      return {
        user: null,
        isAuthenticated: false,
      };
    default:
      throw new Error("Unknown action!");
  }
};

export default function AuthProvider({ children }) {
  const router = useRouter();

  const [{ user, isAuthenticated, isLoading, error }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  const signin = async (values) => {
    dispatch({ type: "loading" });
    try {
      const { user, message } = await signinApi(values);
      dispatch({ type: "signin", payload: user });
      toast.success(message);
      router.push("/");
    } catch (error) {
      const errorMsg = error?.response?.data?.message;
      dispatch({ type: "rejected", payload: errorMsg });
      toast.error(errorMsg);
    }
  };

  const signup = async (values) => {
    dispatch({ type: "loading" });
    try {
      const { user, message } = await signupApi(values);
      dispatch({ type: "signup", payload: user });
      toast.success(message);
      router.push("/");
    } catch (error) {
      const errorMsg = error?.response?.data?.message;
      dispatch({ type: "rejected", payload: errorMsg });
      toast.error(errorMsg);
    }
  };

  const editUser = async (values) => {
    dispatch({ type: "loading" });
    try {
      const { message } = await editUserApi(values);
      await getUser();
      dispatch({ type: "user/updated" });
      toast.success(message);
      router.push("/profile");
    } catch (error) {
      const errorMsg = error?.response?.data?.message;
      dispatch({ type: "rejected", payload: errorMsg });
      toast.error(errorMsg);
    }
  };

  const getUser = async () => {
    dispatch({ type: "loading" });
    try {
      const { user } = await getUserApi();
      dispatch({ type: "user/loaded", payload: user });
    } catch (error) {
      const errorMsg = error?.response?.data?.message;
      dispatch({ type: "rejected", payload: errorMsg });
      // toast.error(errorMsg);
    }
  };

  async function logout() {
    try {
      await logoutApi();
      router.push("/");
      // document.location.href = "/";
      dispatch({ type: "logout" });
    } catch (error) {
      toast.error(error);
    }
  }

  useEffect(() => {
    async function fetchDate() {
      await getUser();
    }
    fetchDate();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        signin,
        signup,
        logout,
        editUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("not found Auth Context");
  return context;
};
