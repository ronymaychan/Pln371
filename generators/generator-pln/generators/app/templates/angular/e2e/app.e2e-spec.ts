import { <%= projectName %>TemplatePage } from './app.po';

describe('<%= projectName %> App', function() {
  let page: <%= projectName %>TemplatePage;

  beforeEach(() => {
    page = new <%= projectName %>TemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
