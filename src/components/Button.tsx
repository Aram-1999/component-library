interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}

function Button({ text, type = "button", onClick, disabled }: ButtonProps) {
  return (
    <button className="block mt-5" type={type} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
