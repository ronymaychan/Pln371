import { PlenumsoftTemplatePage } from './app.po';

describe('Plenumsoft App', function() {
  let page: PlenumsoftTemplatePage;

  beforeEach(() => {
    page = new PlenumsoftTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
