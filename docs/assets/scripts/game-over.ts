namespace BubbleGunner.GameOver {
    import Bitmap = createjs.Bitmap;
    import Tween = createjs.Tween;
    import Text = createjs.Text;

    export class GameOverScene extends Scene {
        private _refreshButton: Bitmap;
        private _pulseIntervalHandle: number;
        private _pulseCount: number = 0;

        constructor() {
            super();

            let text = new Text(`GAME OVER`, `bold 80px Arial`, `#f57`);
            const textSize = text.getBounds();
            text.x = NormalWidth / 2 - textSize.width / 2;
            text.y = 30;
            this.addChild(text);

            this._refreshButton = new Bitmap(loader.getResult(`refresh`));
            this._refreshButton.regX = this._refreshButton.getBounds().width / 2;
            this._refreshButton.regY = this._refreshButton.getBounds().height / 2;
            this._refreshButton.x = NormalWidth / 2;
            this._refreshButton.y = NormalHeight / 2;
            this._refreshButton.on(`click`, this.dispatchPlayGameEvent, this);
            this._refreshButton.cursor = `pointer`;
            this.addChild(this._refreshButton);
        }

        public start(...args: any[]): void {
            this._pulseIntervalHandle = setInterval(this.pulse.bind(this), 60);
        }

        private dispatchPlayGameEvent(): void {
            clearInterval(this._pulseIntervalHandle);
            this.dispatchEvent(new SceneEvent(Scene.EventChangeScene, SceneType.Game));
        }

        private pulse(): void {
            let scale = Math.cos(this._pulseCount++ * .1) * 0.4 + 2;
            Tween.get(this._refreshButton)
                .to({
                    scaleX: scale,
                    scaleY: scale,
                    rotation: -this._pulseCount * 5
                }, 30);
            this._pulseCount++;
        }
    }
}