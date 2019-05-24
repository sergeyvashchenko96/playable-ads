const app = new PIXI.Application();
document.body.appendChild(app.view);
app.loader
    .add('goblins', './assets/goblin.json')
    .load(onAssetsLoaded);

app.stage.interactive = true;
app.stage.buttonMode = true;
alert('kill him');

function onAssetsLoaded(loader, res) {
  const goblin = new PIXI.spine.Spine(res.goblins.spineData);
  goblin.skeleton.setSkinByName('goblin');
  goblin.skeleton.setSlotsToSetupPose();

  goblin.x = 400;
  goblin.y = 600;

  goblin.scale.set(1.5);

  goblin.state.setAnimation(0, 'walk', true);

  app.stage.addChild(goblin);

  app.stage.on('pointertap', () => {
    var audio = document.getElementById("audio");
    audio.play();
    setTimeout("  alert('Redirect to the AppStore')", 1500);
  });
}
