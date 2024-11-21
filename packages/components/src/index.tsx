'use client';
import { useTimeNow } from '@rp/hooks';

const TimeDisplay = ({ initialTime }: { initialTime: string }) => {
  const time = useTimeNow(initialTime);
  return <div>Time: {time}</div>;
};

export default TimeDisplay;
