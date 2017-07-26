import { CrudPage } from './app.po';

describe('crud App', () => {
  let page: CrudPage;

  beforeEach(() => {
    page = new CrudPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
