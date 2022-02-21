import { Component, OnInit } from '@angular/core';
import "@ui5/webcomponents-fiori/dist/SideNavigation.js"
import "@ui5/webcomponents-fiori/dist/ShellBar.js"
import "@ui5/webcomponents/dist/Button"
import "@ui5/webcomponents-fiori/dist/SideNavigationItem.js"
import "@ui5/webcomponents-fiori/dist/SideNavigationSubItem"
import "@ui5/webcomponents/dist/List"

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
