import { createContext, useState } from "react";
export const Context = createContext();

const FilterTurlar = ({ children }) => {
  const [datas, setdatas] = useState(0);
  const data = {
    datas,
    setdatas,
  };
  return <Context.Provider value={data}>{children}</Context.Provider>;
};
export default FilterTurlar;
