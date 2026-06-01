function ModalOverlay({ children }) {
  return (
    <div className="fixed top-0 left-0 w-full h-screen backdrop-blur-xs z-1000 transition-all duration-500">
      {children}
    </div>
  );
}

export default ModalOverlay;
