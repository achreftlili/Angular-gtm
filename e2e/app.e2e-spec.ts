import { AngularGtmPage } from './app.po';

describe('angular-gtm App', () => {
  let page: AngularGtmPage;

  beforeEach(() => {
    page = new AngularGtmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
