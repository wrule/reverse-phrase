'use client';
import { useTimeNow } from '@rp/hooks';

export
const TimeDisplay = ({ initialTime }: { initialTime: string }) => {
  const time = useTimeNow(initialTime);
  return <div>Time: {time}</div>;
};
