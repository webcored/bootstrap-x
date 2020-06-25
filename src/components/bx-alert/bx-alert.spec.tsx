import { newSpecPage } from '@stencil/core/testing';
import { BxAlert } from './bx-alert';

describe('bx-alert', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BxAlert],
      html: `<bx-alert></bx-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <bx-alert>
      </bx-alert>
    `);
  });
});
