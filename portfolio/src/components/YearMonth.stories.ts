import type { Meta, StoryObj } from '@storybook/react-vite';
import YearMonth from './YearMonth';

const meta = {
  title: 'Example/YearMonth',
  component: YearMonth,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    year: { control: 'text' },
    month: { control: 'text' },
  },
  args: {
    year: '2000',
    month: '10',
  },
} satisfies Meta<typeof YearMonth>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomDate: Story = {
  args: {
    year: '2024',
    month: '11',
  },
};
