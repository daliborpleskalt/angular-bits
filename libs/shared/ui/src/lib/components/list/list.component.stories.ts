import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { ListComponent } from './list.component';
import { ListItemComponent } from './list-item.component';
import { IconComponent } from '../icon/icon.component';
import { ButtonComponent } from '../button/button.component';

const meta: Meta<ListComponent> = {
  title: 'UI/List',
  component: ListComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [ListComponent, ListItemComponent, IconComponent, ButtonComponent]
    })
  ]
};

export default meta;
type Story = StoryObj<ListComponent>;

export const Basic: Story = {
  args: {
    hasHover: true,
    hasDivider: false
  },
  render: (args) => ({
    props: args,
    template: `
      <lib-ui-list [hasHover]="hasHover" [hasDivider]="hasDivider">
        <lib-ui-list-item>First Item</lib-ui-list-item>
        <lib-ui-list-item>Second Item</lib-ui-list-item>
        <lib-ui-list-item>Third Item</lib-ui-list-item>
      </lib-ui-list>
    `
  })
};

export const WithStates: Story = {
  args: {
    hasHover: true,
    hasDivider: true
  },
  render: (args) => ({
    props: args,
    template: `
      <lib-ui-list [hasHover]="hasHover" [hasDivider]="hasDivider">
        <lib-ui-list-item>Normal Item</lib-ui-list-item>
        <lib-ui-list-item [disabled]="true">Disabled Item</lib-ui-list-item>
        <lib-ui-list-item [active]="true">Active Item</lib-ui-list-item>
      </lib-ui-list>
    `
  })
};

export const WithIcons: Story = {
  args: {
    hasHover: true,
    hasDivider: true
  },
  render: (args) => ({
    props: args,
    template: `
      <lib-ui-list [hasHover]="hasHover" [hasDivider]="hasDivider">
        <lib-ui-list-item>
          <lib-ui-icon icon="checkmark-outline"></lib-ui-icon>
          Completed Task
        </lib-ui-list-item>
        <lib-ui-list-item>
          <lib-ui-icon icon="clock-outline"></lib-ui-icon>
          Pending Task
        </lib-ui-list-item>
        <lib-ui-list-item>
          <lib-ui-icon icon="close-outline"></lib-ui-icon>
          Cancelled Task
        </lib-ui-list-item>
      </lib-ui-list>
    `
  })
};

export const WithLinks: Story = {
  args: {
    hasHover: true,
    hasDivider: true
  },
  render: (args) => ({
    props: args,
    template: `
      <lib-ui-list [hasHover]="hasHover" [hasDivider]="hasDivider">
        <lib-ui-list-item>
          <a class="home__topic-link">Documentation</a>
        </lib-ui-list-item>
        <lib-ui-list-item>
          <a class="home__topic-link">Examples</a>
        </lib-ui-list-item>
        <lib-ui-list-item>
          <a class="home__topic-link">API Reference</a>
        </lib-ui-list-item>
      </lib-ui-list>
    `
  })
};

export const ComplexContent: Story = {
  args: {
    hasHover: true,
    hasDivider: true
  },
  render: (args) => ({
    props: args,
    template: `
      <lib-ui-list [hasHover]="hasHover" [hasDivider]="hasDivider">
        <lib-ui-list-item>
          <div class="lib-ui-list-item__content">
            <div>
              <h4>Task Title</h4>
              <p>Task description goes here</p>
            </div>
            <lib-ui-button status="primary" size="small">View</lib-ui-button>
          </div>
        </lib-ui-list-item>
        <lib-ui-list-item>
          <div class="lib-ui-list-item__content">
            <div>
              <h4>Another Task</h4>
              <p>With a different description</p>
            </div>
            <lib-ui-button status="primary" size="small">View</lib-ui-button>
          </div>
        </lib-ui-list-item>
      </lib-ui-list>
    `
  })
}; 