import { FC } from "react";

type Props = {
  id?: string;
  className?: string;
};

const Main: FC<Props> = ({ children, id }) => {
  return (
    <>
      <main id={id} className="main">{children}</main>
    </>
  );
};

export { Main };