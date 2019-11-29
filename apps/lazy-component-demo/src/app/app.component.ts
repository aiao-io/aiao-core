import { LazyComponentLoader } from '@aiao/lazy-component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'aiao-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lazy-component-demo';

  constructor(public lazyComponentLoader: LazyComponentLoader, public dialog: MatDialog) {}

  async openDialog() {
    this.dialog.open(await this.lazyComponentLoader.load('homeModule', 'app-dialog'));
  }
}
