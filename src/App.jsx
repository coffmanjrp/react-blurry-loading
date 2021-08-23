import { useEffect, useState } from 'react';
import useInterval from './lib/useInterval';
import { scale } from './lib/scale';
import './App.scss';

function App() {
  const [delay] = useState(30);
  const [load, setLoad] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (load > 99) {
      setIsRunning(false);
    }
  }, [load]);

  useInterval(() => setLoad((load) => load + 1), isRunning ? delay : null);

  return (
    <div>
      <section
        className="bg"
        style={{
          filter: `blur(${scale(load, 0, 100, 30, 0)}px)`,
        }}
      />
      <div
        className="loading-text"
        style={{
          opacity: `${scale(load, 0, 100, 1, 0)}`,
        }}
      >
        {load} %
      </div>
    </div>
  );
}

export default App;
