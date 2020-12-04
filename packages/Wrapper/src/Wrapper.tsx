import React, { AllHTMLAttributes, ReactNode } from "react";
import classnames from "classnames";
import styles from "./Wrapper.scss";

type WrapperProps = AllHTMLAttributes<HTMLElement> & {
  color?: "white" | "gray";
  width?: "full" | "wrap" | "content" | "thin";
  noPadX?: boolean;
  bigY?: boolean;
  as?: ReactNode;
  align?: "left" | "right" | "center";
};

export const Wrapper: React.FC<WrapperProps> = (props) => {
  const {
    children,
    className = "",
    color = "white",
    width = "wrap",
    align = "left",
    as = "section",
    ...rest
  } = props;
  const Component: any = as;
  const chunkClasses = classnames({
    [styles[color]]: true,
    [styles[align]]: true,
  });
  const wrapperClasses = classnames({
    [styles[width]]: true,
    [className]: className,
  });

  return (
    <Component {...rest} className={chunkClasses}>
      <div className={wrapperClasses}>{children}</div>
    </Component>
  );
};
