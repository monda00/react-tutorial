import { useState } from "react";

export default function EventMouse({ beforeSrc, afterSrc, alt }) {
  const [current, setCurrent] = useState(beforeSrc);

  const handleEventer = () => {
    setCurrent(afterSrc);
  };

  const handleLeave = () => {
    setCurrent(beforeSrc);
  };
  return (
    <img
      src={current}
      alt={alt}
      onMouseEnter={handleEventer}
      onMouseLeave={handleLeave}
    />
  );
}
