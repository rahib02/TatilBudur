import { createContext, useState } from "react";
export const Context = createContext();
const Admindata = ({ children }) => {
  const [serverdata, setserverdata] = useState([]);
  const [serveruser, setserveruser] = useState([]);
  const data = {
    serverdata,
    setserverdata,
    serveruser,
    setserveruser,
  };
  return <Context.Provider value={data}>{children}</Context.Provider>;
};
export default Admindata;
