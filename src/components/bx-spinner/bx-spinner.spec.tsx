import { newSpecPage } from '@stencil/core/testing';
import { BxSpinner } from './bx-spinner';

describe('bx-spinner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BxSpinner],
      html: `<bx-spinner></bx-spinner>`,
    });
    expect(page.root).toEqualHtml(`
      <bx-spinner>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bx-spinner>
    `);
  });
});
