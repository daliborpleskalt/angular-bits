import type { Meta, StoryObj } from '@storybook/angular';
import { TabsComponent, TabComponent } from './tabs.component';

const meta: Meta<TabsComponent> = {
  title: 'UI/Tabs',
  component: TabsComponent,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<TabsComponent>;

export const Basic: Story = {
  render: () => ({
    template: `
      <lib-ui-tabs>
        <lib-ui-tab title="First Tab">
          <p>Content of the first tab</p>
        </lib-ui-tab>
        <lib-ui-tab title="Second Tab">
          <p>Content of the second tab</p>
        </lib-ui-tab>
        <lib-ui-tab title="Third Tab">
          <p>Content of the third tab</p>
        </lib-ui-tab>
      </lib-ui-tabs>
    `
  })
};

export const WithIcons: Story = {
  render: () => ({
    template: `
      <lib-ui-tabs>
        <lib-ui-tab title="Profile">
          <div style="padding: 1rem;">
            <lib-ui-icon icon="person-outline"></lib-ui-icon>
            <h3>User Profile</h3>
            <p>Profile content goes here</p>
          </div>
        </lib-ui-tab>
        <lib-ui-tab title="Settings">
          <div style="padding: 1rem;">
            <lib-ui-icon icon="settings-2-outline"></lib-ui-icon>
            <h3>Settings</h3>
            <p>Settings content goes here</p>
          </div>
        </lib-ui-tab>
        <lib-ui-tab title="Notifications">
          <div style="padding: 1rem;">
            <lib-ui-icon icon="bell-outline"></lib-ui-icon>
            <h3>Notifications</h3>
            <p>Notifications content goes here</p>
          </div>
        </lib-ui-tab>
      </lib-ui-tabs>
    `
  })
};

export const WithComplexContent: Story = {
  render: () => ({
    template: `
      <lib-ui-tabs>
        <lib-ui-tab title="List View">
          <lib-ui-list>
            <lib-ui-list-item>Item 1</lib-ui-list-item>
            <lib-ui-list-item>Item 2</lib-ui-list-item>
            <lib-ui-list-item>Item 3</lib-ui-list-item>
          </lib-ui-list>
        </lib-ui-tab>
        <lib-ui-tab title="Card View">
          <div style="padding: 1rem;">
            <lib-ui-card>
              <div header>Card Header</div>
              <div body>Card content in tabs</div>
              <div footer>
                <lib-ui-button status="primary">Action</lib-ui-button>
              </div>
            </lib-ui-card>
          </div>
        </lib-ui-tab>
      </lib-ui-tabs>
    `
  })
}; 