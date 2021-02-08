import { useState, useEffect } from "react";

export default function useCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((v) => v + 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return count;
}
