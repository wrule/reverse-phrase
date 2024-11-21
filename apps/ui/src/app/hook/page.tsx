'use client';
import { useTimeNow } from '@rp/hooks';

const HookPage = () => {
  const time = useTimeNow('服务端时间');
  return <div>Hook: {time}</div>;
};

export default HookPage;
