"use client";
import { StateContext } from "@/context/StateContext";

const Providers = ({ children }) => {
  return <StateContext>{children}</StateContext>;
};

export default Providers;
