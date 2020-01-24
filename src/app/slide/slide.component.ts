
import { Component } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent {
  state: any = {
    flag: {
      isCollapsed: true
    },
    slide: {
      title: 'WHO ARE WE?',
      description: 'Donaki is dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      buttonTitle: 'FInd More',
    },
    partner: {
      title: 'Became a Partner',
      description: 'Promote your store through our platform',
      buttonTitle: 'Find out More',
    },
    member: {
      title: 'Became a Member',
      description: 'Browse through a large number of retailers',
      buttonTitle: 'Find out More',
    }
  }
}
