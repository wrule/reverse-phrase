// TimeDisplay.stories.ts
import type { Meta, StoryObj } from '@storybook/react';
import TimeDisplay from './TimeDisplay';

const meta = {
  title: 'Components/TimeDisplay',
  component: TimeDisplay,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // 参数控制
  argTypes: {
    initialTime: {
      control: 'text',
      description: '初始时间字符串',
    }
  }
} satisfies Meta<typeof TimeDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

// 默认故事
export const Default: Story = {
  args: {
    initialTime: new Date().toLocaleString()
  }
};

// 不同时区的时间格式
export const ChineseLocale: Story = {
  args: {
    initialTime: new Date().toLocaleString('zh-CN')
  }
};

// 特定时间点
export const SpecificTime: Story = {
  args: {
    initialTime: '2024/11/21 15:30:00'
  }
};

// 带时区的时间
export const WithTimeZone: Story = {
  args: {
    initialTime: new Date().toLocaleString('en-US', { timeZone: 'UTC' })
  }
};

// 不同格式的时间
export const CustomFormat: Story = {
  args: {
    initialTime: new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  }
};
