"use client";
import { ReactNode, createContext, useContext, useState } from "react";

interface SideNavContextProps {
  nav: string;
  setNav: React.Dispatch<React.SetStateAction<string>>;
}

const SideNavContext = createContext<SideNavContextProps|null >(null);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [nav, setNav] = useState<string>("Home");
  return (
    <SideNavContext.Provider value={{ nav, setNav }}>
      {children}
    </SideNavContext.Provider>
  );
};

export const useNavContext = () => {
 

  return  useContext(SideNavContext);
};
