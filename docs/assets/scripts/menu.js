var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BubbleGunner;
(function (BubbleGunner) {
    var Menu;
    (function (Menu) {
        var Shape = createjs.Shape;
        var Text = createjs.Text;
        var SpriteSheet = createjs.SpriteSheet;
        var Sprite = createjs.Sprite;
        var Sound = createjs.Sound;
        var MenuScene = (function (_super) {
            __extends(MenuScene, _super);
            function MenuScene() {
                var _this = _super.call(this) || this;
                _this._btnStartGame = new Shape();
                _this._btnStartGame.graphics
                    .beginStroke("yellow")
                    .beginFill("#eee")
                    .drawRect(0, 0, 120, 80);
                _this._btnStartGame.x = 360;
                _this._btnStartGame.y = 100;
                var startGameText = new Text("Start Game", "10pt Calibri", "red");
                startGameText.x = 370;
                startGameText.y = 120;
                _this._btnStartGame.cursor = "pointer";
                _this._btnStartGame.on("click", _this.dispatchStartGameEvent, _this);
                _this._btnStartHelp = new Shape();
                _this._btnStartHelp.graphics
                    .beginStroke("blue")
                    .beginFill("#eee")
                    .drawRect(0, 0, 120, 80);
                _this._btnStartHelp.x = 360;
                _this._btnStartHelp.y = 200;
                var startHelpText = new Text("Help", "20pt Calibri", "blue");
                startHelpText.x = _this._btnStartHelp.x + startHelpText.getMeasuredWidth() / 2;
                startHelpText.y = _this._btnStartHelp.y + startHelpText.getMeasuredHeight() / 2;
                _this._btnStartHelp.cursor = "pointer";
                _this._btnStartHelp.on("click", _this.dispatchStartHelpEvent, _this);
                var data = {
                    "images": [BubbleGunner.loader.getResult("pig0"), BubbleGunner.loader.getResult("pig1")],
                    "frames": [
                        [2, 2, 252, 252, 0],
                        [258, 2, 252, 252, 0],
                        [514, 2, 252, 252, 0],
                        [770, 2, 252, 252, 0],
                        [1026, 2, 252, 252, 0],
                        [1282, 2, 252, 252, 0],
                        [1538, 2, 252, 252, 0],
                        [1794, 2, 252, 252, 0],
                        [2, 258, 252, 252, 0],
                        [258, 258, 252, 252, 0],
                        [514, 258, 252, 252, 0],
                        [770, 258, 252, 252, 0],
                        [1026, 258, 252, 252, 0],
                        [1282, 258, 252, 252, 0],
                        [1538, 258, 252, 252, 0],
                        [1794, 258, 252, 252, 0],
                        [2, 514, 252, 252, 0],
                        [258, 514, 252, 252, 0],
                        [514, 514, 252, 252, 0],
                        [770, 514, 252, 252, 0],
                        [1026, 514, 252, 252, 0],
                        [1282, 514, 252, 252, 0],
                        [1538, 514, 252, 252, 0],
                        [1794, 514, 252, 252, 0],
                        [2, 770, 252, 252, 0],
                        [258, 770, 252, 252, 0],
                        [514, 770, 252, 252, 0],
                        [770, 770, 252, 252, 0],
                        [1026, 770, 252, 252, 0],
                        [1282, 770, 252, 252, 0],
                        [1538, 770, 252, 252, 0],
                        [1794, 770, 252, 252, 0],
                        [2, 1026, 252, 252, 0],
                        [258, 1026, 252, 252, 0],
                        [514, 1026, 252, 252, 0],
                        [770, 1026, 252, 252, 0],
                        [1026, 1026, 252, 252, 0],
                        [1282, 1026, 252, 252, 0],
                        [1538, 1026, 252, 252, 0],
                        [1794, 1026, 252, 252, 0],
                        [2, 1282, 252, 252, 0],
                        [258, 1282, 252, 252, 0],
                        [514, 1282, 252, 252, 0],
                        [770, 1282, 252, 252, 0],
                        [1026, 1282, 252, 252, 0],
                        [1282, 1282, 252, 252, 0],
                        [1538, 1282, 252, 252, 0],
                        [1794, 1282, 252, 252, 0],
                        [2, 1538, 252, 252, 0],
                        [258, 1538, 252, 252, 0],
                        [514, 1538, 252, 252, 0],
                        [770, 1538, 252, 252, 0],
                        [1026, 1538, 252, 252, 0],
                        [1282, 1538, 252, 252, 0],
                        [1538, 1538, 252, 252, 0],
                        [1794, 1538, 252, 252, 0],
                        [2, 1794, 252, 252, 0],
                        [258, 1794, 252, 252, 0],
                        [514, 1794, 252, 252, 0],
                        [770, 1794, 252, 252, 0],
                        [1026, 1794, 252, 252, 0],
                        [1282, 1794, 252, 252, 0],
                        [1538, 1794, 252, 252, 0],
                        [1794, 1794, 252, 252, 0],
                        [2, 2, 252, 252, 1],
                        [258, 2, 252, 252, 1],
                        [514, 2, 252, 252, 1],
                        [770, 2, 252, 252, 1],
                        [1026, 2, 252, 252, 1],
                        [1282, 2, 252, 252, 1],
                        [1538, 2, 252, 252, 1],
                        [1794, 2, 252, 252, 1],
                        [2, 258, 252, 252, 1],
                        [258, 258, 252, 252, 1],
                        [514, 258, 252, 252, 1],
                        [770, 258, 252, 252, 1],
                        [1026, 258, 252, 252, 1],
                        [1282, 258, 252, 252, 1],
                        [1538, 258, 252, 252, 1],
                        [1794, 258, 252, 252, 1],
                        [2, 514, 252, 252, 1],
                        [258, 514, 252, 252, 1],
                        [514, 514, 252, 252, 1],
                        [770, 514, 252, 252, 1],
                        [1026, 514, 252, 252, 1],
                        [1282, 514, 252, 252, 1],
                        [1538, 514, 252, 252, 1],
                        [1794, 514, 252, 252, 1],
                        [2, 770, 252, 252, 1],
                        [258, 770, 252, 252, 1],
                        [514, 770, 252, 252, 1],
                        [770, 770, 252, 252, 1],
                        [1026, 770, 252, 252, 1],
                        [1282, 770, 252, 252, 1],
                        [1538, 770, 252, 252, 1],
                        [1794, 770, 252, 252, 1],
                        [2, 1026, 252, 252, 1],
                        [258, 1026, 252, 252, 1],
                        [514, 1026, 252, 252, 1],
                        [770, 1026, 252, 252, 1],
                        [1026, 1026, 252, 252, 1],
                        [1282, 1026, 252, 252, 1],
                        [1538, 1026, 252, 252, 1],
                        [1794, 1026, 252, 252, 1],
                        [2, 1282, 252, 252, 1],
                        [258, 1282, 252, 252, 1],
                        [514, 1282, 252, 252, 1],
                        [770, 1282, 252, 252, 1],
                        [1026, 1282, 252, 252, 1],
                        [1282, 1282, 252, 252, 1],
                        [1538, 1282, 252, 252, 1],
                        [1794, 1282, 252, 252, 1],
                        [2, 1538, 252, 252, 1],
                        [258, 1538, 252, 252, 1],
                        [514, 1538, 252, 252, 1],
                        [770, 1538, 252, 252, 1],
                        [1026, 1538, 252, 252, 1],
                        [1282, 1538, 252, 252, 1],
                        [1538, 1538, 252, 252, 1],
                        [1794, 1538, 252, 252, 1],
                        [2, 1794, 252, 252, 1],
                        [258, 1794, 252, 252, 1],
                        [514, 1794, 252, 252, 1],
                        [770, 1794, 252, 252, 1],
                        [1026, 1794, 252, 252, 1],
                        [1282, 1794, 252, 252, 1],
                        [1538, 1794, 252, 252, 1]
                    ],
                    "animations": {
                        "all": {
                            "frames": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126],
                            "speed": .4
                        }
                    }
                };
                var spriteSheet = new SpriteSheet(data);
                var sprite = new Sprite(spriteSheet, "all");
                sprite.x = 200;
                sprite.y = 60;
                // var sounds = [{
                //     src:"sounds/bgm.mp3", data: {
                //         audioSprite: [
                //             {id:"intro", startTime:0, duration:500},
                //             {id:"loopback", startTime:4000, duration:145000},
                //         ]}
                // }
                // ];
                Sound.on("fileload", _this.soundHandler, _this);
                //Sound.registerPlugins([createjs.WebAudioPlugin]);
                //Sound.registerSound(sounds, "bgm");
                _this._music = Sound.play("bgm");
                _this._music.volume = 0.00001;
                _this._music.pan = 0.0000001;
                _this.addChild(_this._btnStartGame, startGameText, sprite);
                _this.addChild(_this._btnStartHelp, startHelpText);
                return _this;
            }
            MenuScene.prototype.soundHandler = function (event) {
                this._music = Sound.play("bpm");
                this._music.on("complete", this.bgmLoop, this);
            };
            MenuScene.prototype.bgmLoop = function (event) {
                this._music = Sound.play("loopback");
            };
            MenuScene.prototype.start = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            };
            MenuScene.prototype.dispatchStartGameEvent = function () {
                this.dispatchEvent(new BubbleGunner.SceneEvent(BubbleGunner.Scene.EventChangeScene, BubbleGunner.SceneType.Game));
            };
            MenuScene.prototype.dispatchStartHelpEvent = function () {
                this.dispatchEvent(new BubbleGunner.SceneEvent(BubbleGunner.Scene.EventChangeScene, BubbleGunner.SceneType.Help));
            };
            return MenuScene;
        }(BubbleGunner.Scene));
        Menu.MenuScene = MenuScene;
    })(Menu = BubbleGunner.Menu || (BubbleGunner.Menu = {}));
})(BubbleGunner || (BubbleGunner = {}));
//# sourceMappingURL=menu.js.map