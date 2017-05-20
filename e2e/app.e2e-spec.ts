import { ExoDiatomicPage } from './app.po';

describe('exo-diatomic App', () => {
  let page: ExoDiatomicPage;

  beforeEach(() => {
    page = new ExoDiatomicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
