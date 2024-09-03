import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PhaserComponent } from "./components/phaser/phaser.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PhaserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'garden-quest';
}
