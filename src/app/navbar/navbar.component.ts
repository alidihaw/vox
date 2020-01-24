import { Component } from '@angular/core';

import { faAngleRight, faList, faWindowClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  state: any = {
    icon: {
      faAngleRight: faAngleRight,
      faList: faList,
      faWindowClose: faWindowClose
    },
    flag: {
      isCollapsed: false
    }
  }
}
