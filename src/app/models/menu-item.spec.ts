import { MenuItem } from './menu-item';

describe('MenuItem', () => {
  it('should create an instance', () => {
    expect(new MenuItem("tag", "link", "icon")).toBeTruthy();
  });
});
