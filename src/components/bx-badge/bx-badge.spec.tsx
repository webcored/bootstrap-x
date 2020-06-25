import { newSpecPage } from '@stencil/core/testing';
import { BxBadge } from './bx-badge';

const specPage = async (html: string)=> {
  return await newSpecPage({
      components: [BxBadge],
      html,
    });
}

describe('bx-badge', () => {
  it('renders', async () => {
    let page = await specPage('<bx-badge></bx-badge>')
    let bageElement = page.body.querySelector('bx-badge');
    expect(bageElement).toBeTruthy(); // renders
    expect(bageElement.classList.contains('badge')).toBeTruthy(); // has badge class
  });

  it('displays the given text', async() => {
    let text: string = 'hello world';
    let page = await specPage(`<bx-badge text="${text}"></bx-badge>`);
    expect(page.root.textContent).toEqualText(text);
  });

  it('displays the given slot text', async() => {
    let text: string = 'slot text';
    let page = await specPage(`<bx-badge>${text}</bx-badge>`);
    expect(page.root.textContent).toEqualText(text);
  });

  // propery check
  it('Adds the variant classes based on the given variants', async() => {
    let text: string = 'slot text';
    let page1 = await specPage(`<bx-badge variant="danger">${text}</bx-badge>`);
    expect(page1.root.classList.contains('badge-danger')).toBeTruthy();
    let page2 = await specPage(`<bx-badge variant="success">${text}</bx-badge>`);
    expect(page2.root.classList.contains('badge-success')).toBeTruthy();
  });

  it('Adds the classes required for pill styled badges', async() => {
    let text: string = 'slot text';
    let page = await specPage(`<bx-badge variant="danger" pill>${text}</bx-badge>`);
    expect(page.root.classList.contains('badge-pill')).toBeTruthy();
  });

  it('bx-badge turn into link if link property is passed', async() => {
    let text: string = 'slot text';
    let link: string = 'http://stenciljs.com/';
    let target: string = '_new';
    let page = await specPage(`<bx-badge variant="danger" link="${link}" target="${target}">${text}</bx-badge>`);
    let linkElement: HTMLAnchorElement = page.root.querySelector('a.badge');
    expect(linkElement).toBeTruthy(); // renders as link
    expect(linkElement.href).toEqualText(link);
    expect(linkElement.attributes.getNamedItem('target')).toBeTruthy();
  });
});
