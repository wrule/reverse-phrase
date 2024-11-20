'use client';
import useTimeNow from '@/hooks/useTimeNow';

const HookPage = () => {
  const timeNow = useTimeNow();
  return <div>Hook: {timeNow}</div>;
};

export default HookPage;
