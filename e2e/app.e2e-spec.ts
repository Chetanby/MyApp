import { NgMyAppPage } from './app.po';

describe('ng-my-app App', () => {
  let page: NgMyAppPage;

  beforeEach(() => {
    page = new NgMyAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
