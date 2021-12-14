import { FC } from "react";
import { Header } from "../Header";
import { Main } from "../Main";

type Props = {
  id?: string;
  hideHeader?: boolean; 
  hideFooter?: boolean;
  mainClass?: string;
};

const Layout: FC<Props> = ({ children, hideHeader, mainClass}) => {
  return (
    <>
      {!hideHeader && <Header />}
      <Main id={mainClass}>{children}</Main>      
    </>
  );
};

export { Layout };
