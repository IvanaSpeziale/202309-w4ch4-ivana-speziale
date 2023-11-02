import { useState, useEffect } from 'react';

export function Info() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [isVisible]);

  return <p className={`message ${isVisible ? '' : 'off'}`}>Llamando...</p>;
}
