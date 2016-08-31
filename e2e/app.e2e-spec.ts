import { RestaurantReviewerPage } from './app.po';

describe('restaurant-reviewer App', function() {
  let page: RestaurantReviewerPage;

  beforeEach(() => {
    page = new RestaurantReviewerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
