'use client';
import { useHook2 } from '@rp/hooks2';

const HookPage = () => {
  const time = useHook2();
  return <div>Hook: {time}</div>;
};

export default HookPage;
