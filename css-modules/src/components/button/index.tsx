import { ReactNode, SyntheticEvent } from "react";
import styles from "./index.module.css";

type Props = {
  children: ReactNode;
  onClick?: (e: SyntheticEvent) => void;
  type: "primary" | "secondary";
  htmlType?: "button" | "submit" | "reset";
  loading?: boolean;
  form?: string;
  className?: string;
  disabled?: boolean;
};

export function Button({
  children,
  onClick,
  form,
  htmlType,
  type,
  loading,
  className,
  disabled,
}: Props) {
  const typeClassnames = {
    primary: {
      main: styles.buttonPrimary,
      disabled: styles.buttonPrimaryDisabled,
    },
    secondary: {
      main: styles.buttonSecondary,
      disabled: styles.buttonSecondaryDisabled,
    },
  };

  return (
    <button
      onClick={onClick}
      form={form}
      className={`${
        disabled ? typeClassnames[type].disabled : typeClassnames[type].main
      } rounded-lg transition-all ease-in-out py-2.5 px-[18px] font-semibold ${className} ${
        loading && "flex items-center gap"
      }`}
      type={htmlType}
    >
      {children}
    </button>
  );
}
