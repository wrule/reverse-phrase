// TimeDisplay.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import TimeDisplay from '@rp/components';

const meta: Meta<typeof TimeDisplay> = {
  title: 'Components/TimeDisplay',
  component: TimeDisplay,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  // 由于组件需要 initialTime prop
  args: {
    initialTime: new Date().toISOString(),
  },
};

export default meta;
type Story = StoryObj<typeof TimeDisplay>;

// 基础用法
export const Default: Story = {
  args: {
    initialTime: new Date().toISOString(),
  },
};

// 使用特定时间
export const SpecificTime: Story = {
  args: {
    initialTime: '2024-01-01T12:00:00.000Z',
  },
};

// 如果需要模拟不同时区
export const DifferentTimezone: Story = {
  args: {
    initialTime: new Date().toLocaleString('en-US', { timeZone: 'Asia/Tokyo' }),
  },
};
