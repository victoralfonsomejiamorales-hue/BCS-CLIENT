export interface ButtonProps {
  type?: "submit" | "reset" | "button";
  className?: string;
  value?: string;
  children?: React.ReactNode;
  form?: string;
  disabled?: boolean;
}

export function Button(props: Readonly<ButtonProps>) {
  return (
    <button
      type={props.type || "button"}
      className={props.className || "bg-blue-500 text-white px-4 py-2 rounded"}
      {...props}
    >
      {props.children || props.value}
    </button>
  );
}
