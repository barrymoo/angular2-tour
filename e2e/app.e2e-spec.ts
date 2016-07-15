import { Angular2TourPage } from './app.po';

describe('angular2-tour App', function() {
  let page: Angular2TourPage;

  beforeEach(() => {
    page = new Angular2TourPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
