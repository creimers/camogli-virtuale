function Star({ scale, top, left }) {
  const theScale = `scale-${scale}`;
  return (
    <div
      className={`flex justify-center items-center w-8 h-8 transform ${theScale} absolute top-${top} left-${left}`}
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

Star.defaultProps = { scale: 100, top: 0, left: 0 };

export default Star;
