import { useTimeNow } from '@rp/hooks';

export
const useHook2 = () => {
  const timeNow = useTimeNow();
  const randomNum = Math.random().toString();

  return `${timeNow}-${randomNum}`;
};
