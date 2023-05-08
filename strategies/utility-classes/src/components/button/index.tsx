import { ReactNode, SyntheticEvent } from "react";

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
      main: "bg-indigo-600 hover:bg-indigo-700 text-white border border-indigo-600 focus:outline focus:outline-4 focus:outline-indigo-100",
      disabled:
        "bg-indigo-100 text-white border border-indigo-100 cursor-not-allowed outline-none",
    },
    secondary: {
      main: "bg-white hover:bg-slate-50 border border-gray-300 text-gray-700 focus:outline focus:outline-4 focus:outline-gray-100",
      disabled:
        "bg-white text-gray-300 border border-gray-200 cursor-not-allowed outline-none",
    },
  };

  return (
    <button
      onClick={onClick}
      form={form}
      className={`${
        disabled ? typeClassnames[type].disabled : typeClassnames[type].main
      } rounded-lg transition-all ease-in-out py-2.5 px-[18px] font-semibold ${
        className ? className : ""
      } ${loading ? "flex items-center gap" : ""}`}
      type={htmlType}
    >
      {children}
    </button>
  );
}
