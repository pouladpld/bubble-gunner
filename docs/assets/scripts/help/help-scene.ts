namespace BubbleGunner.Help {
    import Bitmap = createjs.Bitmap;
    import Shape = createjs.Shape;

    export class HelpScene extends SceneBase {
        private _gc: GarbageCollector = new GarbageCollector(this);

        constructor() {
            super();

            let bg = new Shape();
            bg.graphics
                .beginFill(`lightblue`)
                .drawRect(0, 0, NormalWidth, NormalHeight);
            this.addChild(bg);

            let back = new Bitmap(loader.getResult(`back`));
            back.x = 30;
            back.y = 30;
            this._gc.registerEventListener(back, `click`, this.dispatchBackToMenuEvent, this);
            back.cursor = `pointer`;
            back.scaleX = back.scaleY = 1.5;
            this.addChild(back);

            let guide = new Bitmap(loader.getResult(`help-guide`));
            guide.scaleX = guide.scaleY = .8;
            guide.x = 130;
            guide.y = 120;
            this.addChild(guide);
        }

        public start(...args: any[]): void {

        }

        private dispatchBackToMenuEvent(): void {
            playSound(SoundAsset.ButtonClick);
            this.dispatchEvent(new SceneEvent(SceneBase.EventChangeScene, SceneType.Menu));
        }
    }
}