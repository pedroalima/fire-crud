import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
}

export default function Button({text, ...rest} : ButtonTypes) {
  return (
    <button 
      {...rest}
      type="button"
      className={twMerge("p-2 rounded-lg block", rest.className)}
    >
      {text}
    </button>
  );
}