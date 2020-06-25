import { newE2EPage } from '@stencil/core/testing';

describe('bx-spinner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bx-spinner></bx-spinner>');

    const element = await page.find('bx-spinner');
    expect(element).toHaveClass('hydrated');
  });
});
