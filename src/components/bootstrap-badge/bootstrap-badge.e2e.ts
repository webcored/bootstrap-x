import { newE2EPage } from '@stencil/core/testing';

describe('bootstrap-badge', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bootstrap-badge></bootstrap-badge>');

    const element = await page.find('bootstrap-badge');
    expect(element).toHaveClass('hydrated');
  });
});
