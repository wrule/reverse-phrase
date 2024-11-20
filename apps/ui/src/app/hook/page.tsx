'use client';

import { useEffect, useState } from 'react';

const HookPage = () => {
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

  return <div>Hook: {timeNow}</div>;
};

export default HookPage;
