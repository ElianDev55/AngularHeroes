import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent {
  public sidebarItems = [
    {
      label: 'List',
      icon: 'list',
      url: './list'
    },
    {
      label: 'Add',
      icon: 'add',
      url: './new-hero'
    },
    {
      label: 'search',
      icon: 'search',
      url: './search'
    },
  ]
}
