namespace BubbleGunner {
    import Sound = createjs.Sound;
    import AbstractSoundInstance = createjs.AbstractSoundInstance;
    import PlayPropsConfig = createjs.PlayPropsConfig;

    export enum ImageAsset {

    }

    export enum SoundAsset {
        ButtonClick,
        LavaPieceFall,
        BubbleShoot,
        GameBgMusic,
    }

    const soundMappings: [SoundAsset, string][] = [
        [SoundAsset.ButtonClick, `menu-button`],
        [SoundAsset.LavaPieceFall, `game-lava-fall`],
        [SoundAsset.BubbleShoot, `game-bubble-shoot`],
        [SoundAsset.GameBgMusic, `game-bgm`],
    ];

    export function getImage(id: ImageAsset): Object {
        let img: Object;

        switch (id) {

        }

        return img;
    }

    export function playSound(soundAsset: SoundAsset): AbstractSoundInstance {
        let soundId = soundMappings
            .filter(mapping => mapping[0] === soundAsset)[0][1];

        const ppcData = getSoundOffsetDuration(soundId);

        return Sound.play(`s:audiosprite`, new PlayPropsConfig().set({
            startTime: ppcData[0],
            duration: ppcData[1]
        }));
    }

    let audioSpriteData: any;

    function getSoundOffsetDuration(id: string): [number, number] {
        if (audioSpriteData == undefined)
            audioSpriteData = loader.getResult(`j:audiosprite`);

        return audioSpriteData.data.audioSprite
            .filter(audSpr => audSpr.id === id)
            .map(aud => [aud.startTime, aud.duration])[0];
    }
}