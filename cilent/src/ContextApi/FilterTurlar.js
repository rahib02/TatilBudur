import { createContext, useState } from "react";
export const Context = createContext();
const FilterTurlar = ({ children }) => {
  const [datas, setdatas] = useState([]);
  const [user, setuser] = useState([]);
  const data = {
    datas,
    setdatas,
    user,
    setuser,
  };
  return <Context.Provider value={data}>{children}</Context.Provider>;
};
export default FilterTurlar;
