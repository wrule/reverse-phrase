import { useEffect, useState } from 'react';

const nowTimeStr = () => new Date().toLocaleString();

export
const useTimeNow = (initialTime = '') => {
  const [timeNow, setTimeNow] = useState<string>(initialTime);

  const updateTimeNow = () => {
    setTimeNow(nowTimeStr());
  };

  useEffect(() => {
    updateTimeNow();
    const timer = setInterval(() => {
      updateTimeNow();
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return timeNow;
};
