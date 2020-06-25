import { newE2EPage } from '@stencil/core/testing';

describe('bx-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bx-button></bx-button>');

    const element = await page.find('bx-button');
    expect(element).toHaveClass('hydrated');
  });
});
