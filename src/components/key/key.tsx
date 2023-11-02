import { useEffect, useState } from 'react';

export function Key() {
  const initialKey = 0;
  const [key, setKey] = useState(initialKey);

  useEffect(() => {
    console.log(key);
  }, [key]);

  const handleClick = (key: number) => {
    setKey(key);
  };

  return (
    <>
      <p>{key}</p>
      <li>
        <button className="key" onClick={() => handleClick(1)}>
          1
        </button>
      </li>
      <li>
        <button className="key">2</button>
      </li>
      <li>
        <button className="key">3</button>
      </li>
      <li>
        <button className="key">4</button>
      </li>
      <li>
        <button className="key">5</button>
      </li>
      <li>
        <button className="key">6</button>
      </li>
      <li>
        <button className="key">7</button>
      </li>
      <li>
        <button className="key">8</button>
      </li>
      <li>
        <button className="key">9</button>
      </li>
      <li>
        <button className="key">0</button>
      </li>
      <li>
        <button className="key big">delete</button>
      </li>
    </>
  );
}
