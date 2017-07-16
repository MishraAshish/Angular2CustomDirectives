import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
        <div class="open-button" (click)='openDialogBox()'>Open dialog box</div>
        <nav>
          <a routerLink="/editor" routerLinkActive="active" >Go To Editor</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  openDialogBox() {
        // TODO: Open up a dialog box
    }
}
