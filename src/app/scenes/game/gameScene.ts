import Phaser from 'phaser';

export class GameScene extends Phaser.Scene {
  private tileSize = 64;
  private grid!: number[][];
  private tileSprites: Phaser.GameObjects.Sprite[][] = [];
  private roseSprites: Phaser.GameObjects.Sprite[][] = [];

  constructor() {
    super({ key: 'GameScene' });

    this.grid = [
      [1, 1, 1, 1, 1],
      [1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1],
      [1, 1, 1, 1, 1],
    ];
  }

  preload(): void {
    this.load.spritesheet('tiles', '/Assets/sprite-sheets/tiles.png', {
      frameWidth: 64, // Width of each tile frame in the sprite sheet
      frameHeight: 64, // Height of each tile frame in the sprite sheet
    });

    this.load.spritesheet('rose', '/Assets/sprite-sheets/rose.png', {
        frameWidth: 64,  // Size of each turnip frame (adjust as needed)
        frameHeight: 64  // Size of each turnip frame (adjust as needed)
      });
  }

  create(): void {
    this.createGrid();
  }

  createGrid() {
    for (let row = 0; row < this.grid.length; row++) {
      this.tileSprites[row] = [];
      this.roseSprites[row] = [];

      for (let col = 0; col < this.grid[row].length; col++) {
        const tileType = this.grid[row][col];
        const x = col * this.tileSize;
        const y = row * this.tileSize;
        const tileSprite = this.add.sprite(x, y, 'tiles', tileType).setOrigin(0, 0);

        this.tileSprites[row][col] = tileSprite;
      }
    }
    this.input.on('pointerdown', this.onTileClick, this);
  }

  onTileClick(pointer: Phaser.Input.Pointer) {
    const col = Math.floor(pointer.x / this.tileSize);
    const row = Math.floor(pointer.y / this.tileSize);

    if (row < 0 || row >= this.grid.length || col < 0 || col >= this.grid[0].length) {
        return;
      }

      if (this.grid[row][col] === 0) {
        this.plant(row , col);
        
      }else{
        this.grid[row][col] = 0
      }


      const newFrame = this.grid[row][col];
      this.tileSprites[row][col].setFrame(newFrame);
  }

  plant(row:number , col:number){
    const x = col * this.tileSize;
    const y = row * this.tileSize;

    const turnipSprite = this.add.sprite(x, y-32, 'rose', 4).setOrigin(0, 0);

    this.roseSprites[row][col] = turnipSprite;
  }
  override update(time: number, delta: number): void {}
}
