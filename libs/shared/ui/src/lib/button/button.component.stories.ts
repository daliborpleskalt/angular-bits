import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Basic/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['basic', 'primary', 'success', 'info', 'warning', 'danger'],
      description: 'The button status (color)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['tiny', 'small', 'medium', 'large', 'giant'],
      description: 'The button size',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    appearance: {
      control: 'select',
      options: ['filled', 'outline', 'ghost'],
      description: 'The button appearance',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'filled' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A customized button component that wraps Nebular\'s nbButton.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/example-button-design',
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'button-name',
            enabled: true,
          },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    status: 'primary',
    size: 'medium',
    appearance: 'filled',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `<ui-button [status]="status" [size]="size" [appearance]="appearance" [disabled]="disabled">Primary Button</ui-button>`,
  }),
};

export const Success: Story = {
  args: {
    status: 'success',
    size: 'medium',
    appearance: 'filled',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `<ui-button [status]="status" [size]="size" [appearance]="appearance" [disabled]="disabled">Success Button</ui-button>`,
  }),
};

export const Outline: Story = {
  args: {
    status: 'primary',
    size: 'medium',
    appearance: 'outline',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `<ui-button [status]="status" [size]="size" [appearance]="appearance" [disabled]="disabled">Outline Button</ui-button>`,
  }),
};

export const Disabled: Story = {
  args: {
    status: 'primary',
    size: 'medium',
    appearance: 'filled',
    disabled: true,
  },
  render: (args) => ({
    props: args,
    template: `<ui-button [status]="status" [size]="size" [appearance]="appearance" [disabled]="disabled">Disabled Button</ui-button>`,
  }),
}; 