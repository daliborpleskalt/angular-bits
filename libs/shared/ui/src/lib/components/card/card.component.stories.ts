import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  title: 'UI/Card',
  component: CardComponent,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Basic: Story = {
  render: () => ({
    template: `
      <lib-ui-card>
        <div header>Card Header</div>
        <div body>
          <p>This is the card body content.</p>
          <p>You can add any content here.</p>
        </div>
        <div footer>Card Footer</div>
      </lib-ui-card>
    `
  })
};

export const WithoutFooter: Story = {
  render: () => ({
    template: `
      <lib-ui-card>
        <div header>Card Header</div>
        <div body>
          <p>This is a card without a footer.</p>
          <p>The footer section is optional.</p>
        </div>
      </lib-ui-card>
    `
  })
};

export const OnlyBody: Story = {
  render: () => ({
    template: `
      <lib-ui-card>
        <div body>
          <p>This is a card with only body content.</p>
          <p>Both header and footer are optional.</p>
        </div>
      </lib-ui-card>
    `
  })
};

export const ComplexContent: Story = {
  render: () => ({
    template: `
      <lib-ui-card>
        <div header>
          <h3 style="margin: 0;">Featured Article</h3>
        </div>
        <div body>
          <img src="https://via.placeholder.com/400x200" alt="Placeholder" style="width: 100%; height: auto;">
          <h4>Article Title</h4>
          <p>This is a card with complex content including an image and formatted text.</p>
          <ul>
            <li>Feature point 1</li>
            <li>Feature point 2</li>
            <li>Feature point 3</li>
          </ul>
        </div>
        <div footer style="display: flex; justify-content: space-between; align-items: center;">
          <span>Author: John Doe</span>
          <button>Read More</button>
        </div>
      </lib-ui-card>
    `
  })
}; 