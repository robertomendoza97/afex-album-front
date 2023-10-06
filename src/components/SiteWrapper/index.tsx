import { ReactNode } from "react";
import { SiteWrapperStyle } from "./Styles";

const SiteWrapper = ({ children }: { children: ReactNode }) => {
  return <SiteWrapperStyle>{children}</SiteWrapperStyle>;
};

export default SiteWrapper;
