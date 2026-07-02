const variations = {
  normal:
    "border-primary-800 text-primary-300 bg-primary-900 hover:bg-primary-950",
  danger: "border-red-400 text-red-100 bg-red-700 hover:bg-red-800",
};

function Button({
  children,
  onClick,
  variation = "normal",
  additionalClasses,
}) {
  return (
    <button
      className={`border cursor-pointer uppercase text-sm font-bold px-4 py-3 ${variations[variation]} ${additionalClasses ? additionalClasses : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
