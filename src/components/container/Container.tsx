import { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`w-full max-w-[1280px] mx-auto h-full px-2 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
