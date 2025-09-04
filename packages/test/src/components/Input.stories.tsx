import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text',
    value: '',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    value: '',
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    placeholder: 'Input with value',
    value: 'Hello Storybook',
    disabled: false,
  },
};