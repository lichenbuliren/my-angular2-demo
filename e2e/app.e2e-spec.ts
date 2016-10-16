import { MyAngular2DemoPage } from './app.po';

describe('my-angular2-demo App', function() {
  let page: MyAngular2DemoPage;

  beforeEach(() => {
    page = new MyAngular2DemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
