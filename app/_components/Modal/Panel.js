function Panel({ children }) {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-[0_0_3.2rem_1rem_rgba(0,0,0,1)] px-14 py-16 transition-all duration-500 bg-primary-900 fade-div">
      {children}
    </div>
  );
}

export default Panel;
