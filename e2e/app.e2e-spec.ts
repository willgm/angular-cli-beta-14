import { AngularCliBeta14Page } from './app.po';

describe('angular-cli-beta-14 App', function() {
  let page: AngularCliBeta14Page;

  beforeEach(() => {
    page = new AngularCliBeta14Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
