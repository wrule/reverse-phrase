import { useEffect, useState } from 'react';

export
const useTimeNow = () => {
  const nowTimeStr = () => new Date().toLocaleString();

  const [timeNow, setTimeNow] = useState<string>(nowTimeStr());
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
