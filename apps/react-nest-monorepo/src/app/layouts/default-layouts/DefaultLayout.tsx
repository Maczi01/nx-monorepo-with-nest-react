import {ReactNode} from "react";
import {Header} from "./components";

interface DefaultLayoutProps {
  children: ReactNode;
}

export const DefaultLayout = ({children}: DefaultLayoutProps) => {
  return (<div>
    <Header/>
    {children}
    <h1>DefaultLayouts</h1>
  </div>);
}
