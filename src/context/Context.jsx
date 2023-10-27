import { createContext, useContext, useReducer } from "react";
import Reduce from "./Reduce";
import data from "./data";

const AppContext = createContext();

function AppProvider(prop) {
  const { children } = prop;

  const initalValue = {
    data: data,
    loading: false,
    Brand: "",
  };

  const [state, dispatch] = useReducer(Reduce, initalValue);

  const fetchData = async () => {
    dispatch({ type: "Loading" });
  };

  function setBrand(id) {
    dispatch({ type: "setBrand", payload: id });
  }

  const values = {
    ...state,
    fetchData,
    setBrand,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}
export const UseGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext };
