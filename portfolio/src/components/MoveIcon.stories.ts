import type { Meta, StoryObj } from '@storybook/react-vite';
import MoveIcon from './MoveIcon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof MoveIcon> = {
  title: 'Example/MoveIcon',
  component: MoveIcon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    src: { control: 'text' },
    className: { table: { disable: true } },
  },
  args: {
    name: 'Profile',
    src: '/images/Profile.jpg',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const AboutMe: Story = {};

export const Skill: Story = {args: {
    name: 'Skill',
    src: '/images/skills-icon.svg',
  },};