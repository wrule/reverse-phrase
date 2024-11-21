'use client';
import { useTimeNow } from '@rp/hooks';

const HookPage = () => {
  const time = useTimeNow();
  return <div>Hook: {time}</div>;
};

export default HookPage;
