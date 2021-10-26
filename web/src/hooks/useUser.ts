import { useContext } from "react";
import { AuthContext } from "../contexts/auth";

export function useUser() {
  const values = useContext(AuthContext);
  return values;
}
