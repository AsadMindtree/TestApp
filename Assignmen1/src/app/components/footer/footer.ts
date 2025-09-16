import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  navItems = [
    { name: 'Home', route: '/home' },
    { name: 'Form', route: '/form' },
  ];

  showAlertEvent() {
    alert('Hey You have Click a button');
  }
}
