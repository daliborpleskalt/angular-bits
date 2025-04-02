import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'UI/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['primary', 'info', 'success', 'warning', 'danger']
    },
    size: {
      control: 'select',
      options: ['tiny', 'small', 'medium', 'large', 'giant']
    },
    appearance: {
      control: 'select',
      options: ['filled', 'outline', 'ghost']
    },
    disabled: {
      control: 'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    status: 'primary',
    size: 'medium',
    appearance: 'filled'
  },
  render: (args) => ({
    props: args,
    template: `
      <lib-ui-button [status]="status" [size]="size" [appearance]="appearance" [disabled]="disabled">
        Click me
      </lib-ui-button>
    `
  })
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <lib-ui-button status="primary">Primary</lib-ui-button>
        <lib-ui-button status="info">Info</lib-ui-button>
        <lib-ui-button status="success">Success</lib-ui-button>
        <lib-ui-button status="warning">Warning</lib-ui-button>
        <lib-ui-button status="danger">Danger</lib-ui-button>
      </div>
    `
  })
};

export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <lib-ui-button size="tiny">Tiny</lib-ui-button>
        <lib-ui-button size="small">Small</lib-ui-button>
        <lib-ui-button size="medium">Medium</lib-ui-button>
        <lib-ui-button size="large">Large</lib-ui-button>
        <lib-ui-button size="giant">Giant</lib-ui-button>
      </div>
    `
  })
};

export const Appearances: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 1rem;">
        <lib-ui-button appearance="filled">Filled</lib-ui-button>
        <lib-ui-button appearance="outline">Outline</lib-ui-button>
        <lib-ui-button appearance="ghost">Ghost</lib-ui-button>
      </div>
    `
  })
}; 