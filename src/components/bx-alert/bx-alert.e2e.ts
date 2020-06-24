import { newE2EPage } from '@stencil/core/testing';

describe('bx-alert', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bx-alert></bx-alert>');

    const element = await page.find('bx-alert');
    expect(element).toHaveClass('hydrated');
  });
});
