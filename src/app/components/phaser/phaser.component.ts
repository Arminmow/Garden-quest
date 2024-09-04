import { AfterViewInit, Component, OnInit } from '@angular/core';
import Phaser from 'phaser';
import { GameScene } from '../../scenes/game/gameScene';

@Component({
  selector: 'app-phaser',
  standalone: true,
  imports: [],
  templateUrl: './phaser.component.html',
  styleUrl: './phaser.component.scss',
})
export class PhaserComponent implements OnInit, AfterViewInit {
  private gameCanvas: HTMLCanvasElement | null = null;
  private game: Phaser.Game | undefined;
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.gameCanvas = document.getElementById(
      'gameCanvas'
    ) as HTMLCanvasElement;

    if (this.gameCanvas) {
      const config: Phaser.Types.Core.GameConfig = {
        type: Phaser.WEBGL  , 
        width: window.innerWidth,
        height: window.innerHeight,
        canvas: this.gameCanvas,
        scene: GameScene
      };

      this.game = new Phaser.Game(config);
    }
   
    
  }
}
