function Star({ scale, top, left }) {
  return (
    <div
      className={`flex justify-center items-center w-8 h-8 transform ${scale} absolute ${top} ${left}`}
    >
      <div
        className={`w-8 h-0.5 bg-yellow-900 transform -rotate-45 absolute`}
      ></div>
      <div
        className={`w-8 h-0.5 bg-yellow-900 transform rotate-0 absolute`}
      ></div>
      <div
        className={`w-8 h-0.5 bg-yellow-900 transform rotate-45 absolute`}
      ></div>
      <div
        className={`w-8 h-0.5 bg-yellow-900 transform rotate-90 absolute`}
      ></div>
    </div>
  );
}

Star.defaultProps = { scale: "scale-100", top: "top-0", left: "left-0" };

export default Star;
