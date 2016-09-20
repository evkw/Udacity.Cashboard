import { CashboardPage } from './app.po';

describe('cashboard App', function() {
  let page: CashboardPage;

  beforeEach(() => {
    page = new CashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
