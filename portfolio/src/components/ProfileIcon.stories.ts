import type { Meta, StoryObj } from '@storybook/react-vite';
import ProfileIcon from './ProfileIcon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/ProfileIcon',
  component: ProfileIcon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    className: { table: { disable: true } },
  },
  args: {
    name: 'Profile',
  },
} satisfies Meta<typeof ProfileIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const MainProfileIcon: Story = {};
