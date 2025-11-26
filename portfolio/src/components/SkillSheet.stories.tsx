import type { Meta, StoryObj } from '@storybook/react-vite';
import SkillSheet from './SkillSheet';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/SkillSheet',
  component: SkillSheet,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    level: { control: 'number' },
    className: { table: { disable: true } },
  },
  args: {
    name: 'React',
    level: 0,
  },
} satisfies Meta<typeof SkillSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const star5: Story = { args: { level: 5 } };
export const star4: Story = { args: { level: 4 } };
export const star3: Story = { args: { level: 3 } };
export const star2: Story = { args: { level: 2 } };
export const star1: Story = { args: { level: 1 } };
export const star0: Story = { args: { level: 0 } };