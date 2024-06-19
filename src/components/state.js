import React, { useState, useEffect } from 'react';
import '../components/styles/state.css'; // Import the CSS file

const Counter = ({ end, interval }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = Math.ceil(end / (interval * 2)); // Adjust increment based on interval

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev + increment >= end) {
          clearInterval(timer);
          return end;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [end, interval]);

  return <span className="stat-number">{count}</span>;
};

const Stats = () => {
  return (
    <div className="stats-container">
      <div className="stat-item">
        <Counter end={30000} interval={90} />
        <div className="stat-label">LOADS BOOKED</div>
      </div>
      <div className="stat-item">
        <Counter end={10000} interval={70} />
        <div className="stat-label">WEEKLY GROSS REVENUE</div>
      </div>
      <div className="stat-item">
        <Counter end={3} interval={5} />
        <div className="stat-label">PER MILE</div>
      </div>
      <div className="stat-item">
        <Counter end={500} interval={100} />
        <div className="stat-label">CLIENTS</div>
      </div>
    </div>
  );
};

export default Stats;
