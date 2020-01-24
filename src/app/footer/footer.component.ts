import { Component } from '@angular/core';

import { faPhone, faBlog, faComment, faAddressBook, faMapMarked } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  state: any = {
    icon: {
      faPhone: faPhone,
      faBlog: faBlog,
      faComment: faComment,
      faAddressBook: faAddressBook,
      faMarker: faMapMarked
    },
  }
}
