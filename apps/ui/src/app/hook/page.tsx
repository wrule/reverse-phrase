import TimeDisplay from '@rp/components';

const nowTimeStr = () => new Date().toLocaleString();

const HookPage = () => {
  return <div>
    <div>Hook测试页面</div>
    <div>
      <TimeDisplay initialTime={nowTimeStr()} />
    </div>
  </div>;
};

export default HookPage;
