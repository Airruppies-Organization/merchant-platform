import { useState, useContext } from "react";
import { useAuthContext } from "./useAuthContext";
// import DataContext from "@/context/context";

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  // const { setOrders, setCart } = useContext(DataContext);

  const logout = () => {
    localStorage.removeItem("admin");

    dispatch({ type: "LOGOUT" });

    return true;
    // setOrders([]);
    // setCart([]);
  };

  return { logout };
};
