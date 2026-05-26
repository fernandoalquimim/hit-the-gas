function SubmitButton({ children }) {
  return (
    <button className="flex justify-center bg-accent-500 w-52 h-15 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
      {children}
    </button>
  );
}

export default SubmitButton;
