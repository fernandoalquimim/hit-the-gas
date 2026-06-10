function ModalPanel({ children }) {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg px-14 py-16 transition-all duration-500 fade-div">
      {children}
    </div>
  );
}

export default ModalPanel;
