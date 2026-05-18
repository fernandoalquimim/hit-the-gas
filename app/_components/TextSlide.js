import slidingMessages from "../_vars/slidingMessages";

function TextSlide() {
  return (
    <div className="messages-scroller">
      <div className="messages-scroller-inner text-primary-1150 smooth-shadow">
        {slidingMessages.map((m, i) => (
          <span key={i}>{m}</span>
        ))}
      </div>
    </div>
  );
}

export default TextSlide;
