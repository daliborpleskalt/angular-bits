import type { Meta, StoryObj } from '@storybook/angular';
import { IconComponent } from './icon.component';

const meta: Meta<IconComponent> = {
  title: 'UI/Icon',
  component: IconComponent,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'text',
      description: 'The icon name from Eva Icons set'
    }
  }
};

export default meta;
type Story = StoryObj<IconComponent>;

export const Basic: Story = {
  args: {
    icon: 'star-outline'
  }
};

export const CommonIcons: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <lib-ui-icon icon="home-outline"></lib-ui-icon>
        <lib-ui-icon icon="settings-2-outline"></lib-ui-icon>
        <lib-ui-icon icon="person-outline"></lib-ui-icon>
        <lib-ui-icon icon="bell-outline"></lib-ui-icon>
        <lib-ui-icon icon="search-outline"></lib-ui-icon>
      </div>
    `
  })
};

export const FilledVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <lib-ui-icon icon="star"></lib-ui-icon>
        <lib-ui-icon icon="heart"></lib-ui-icon>
        <lib-ui-icon icon="award"></lib-ui-icon>
        <lib-ui-icon icon="checkmark-circle"></lib-ui-icon>
        <lib-ui-icon icon="alert-circle"></lib-ui-icon>
      </div>
    `
  })
}; 