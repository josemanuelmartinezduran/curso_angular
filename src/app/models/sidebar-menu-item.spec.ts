import { MenuItem } from './menu-item';
import { SidebarMenuItem } from './sidebar-menu-item';

describe('SidebarMenu', () => {
  it('should create an instance', () => {
    expect(new SidebarMenuItem("main", [new MenuItem("tag", "link", "icon")])).toBeTruthy();
  });
});
