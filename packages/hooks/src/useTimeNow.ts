import { useEffect, useState } from 'react';

const nowTimeStr = () => new Date().toLocaleString();

export
const useTimeNow = () => {
  const [timeNow, setTimeNow] = useState<string>('');

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
