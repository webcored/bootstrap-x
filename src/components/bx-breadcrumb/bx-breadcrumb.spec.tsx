import { newSpecPage } from '@stencil/core/testing';
import { BxBreadcrumb } from './bx-breadcrumb';

describe('bx-breadcrumb', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BxBreadcrumb],
      html: `<bx-breadcrumb></bx-breadcrumb>`,
    });
    expect(page.root).toEqualHtml(`
      <bx-breadcrumb>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bx-breadcrumb>
    `);
  });
});
