import { newSpecPage } from '@stencil/core/testing';
import { BxDropdown } from '../bx-dropdown';

describe('bx-dropdown', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BxDropdown],
      html: `<bx-dropdown></bx-dropdown>`,
    });
    expect(page.root).toEqualHtml(`
      <bx-dropdown>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bx-dropdown>
    `);
  });
});
