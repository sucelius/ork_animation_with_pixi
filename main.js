import "pixi-spine";
import * as PIXI from "pixi.js";
import { Spine } from "pixi-spine";
import { creditsAnimator, creditsArtist, infoText } from "./src/text";

// Create the application
const app = new PIXI.Application({
  width: window.innerWidth - 10,
  height: window.innerHeight - 20,
  backgroundColor: new PIXI.Color("gray").toNumber(),
});

document.body.appendChild(app.view);
const black = new PIXI.Color("black").toNumber();

//added text to page
app.stage.addChild(infoText);
app.stage.addChild(creditsAnimator);
app.stage.addChild(creditsArtist);

//added asets and some logic
PIXI.Assets.load("../assets/ogr.json").then((onAssetsLoaded) => {
  let isAnimationPlaying = { animation: false, event: 0 };
  let animationX = app.screen.width / 1.5;

  const ork = new Spine(onAssetsLoaded.spineData);

  app.stage.addChild(ork);
  ork.x = app.screen.width / 1.5;
  ork.y = app.screen.height / 1.5;
  // default animation
  ork.state.setAnimation(0, "idle_animation", true);

  // our key listeners
  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);

  // some magic where we are listen animation for moving
  app.ticker.add(handleAnimationUpdate);

  // when we are press to button do some logic
  function handleKeyDown(event) {
    event.preventDefault(); //disable base logic for key in browser
    if (
      (!isAnimationPlaying.animation && event.keyCode === 39) ||
      (!isAnimationPlaying.animation && event.keyCode === 37)
    ) {
      isAnimationPlaying.animation = true;
      isAnimationPlaying.event = event.keyCode;
      ork.state.setAnimation(0, "walk_animation", true);
    }
    if (!isAnimationPlaying.animation && event.keyCode === 16) {
      isAnimationPlaying.animation = true;
      isAnimationPlaying.event = event.keyCode;
      ork.state.setAnimation(0, "run_animation", true);
    }
    if (!isAnimationPlaying.animation && event.keyCode === 32) {
      isAnimationPlaying.animation = true;
      isAnimationPlaying.event = event.keyCode;
      ork.state.setAnimation(0, "1attacknew2!", true);
    }
  }

  // when key is up we are do some logic
  function handleKeyUp(event) {
    if (
      (isAnimationPlaying.animation && event.keyCode === 39) ||
      (isAnimationPlaying.animation && event.keyCode === 37) ||
      (isAnimationPlaying.animation && event.keyCode === 16) ||
      (isAnimationPlaying.animation && event.keyCode === 32)
    ) {
      isAnimationPlaying.animation = false;
      isAnimationPlaying.event = 0;
      ork.state.clearTrack(0);
      ork.state.setAnimation(0, "idle_animation", true);
    }
  }
  // when animation start we can change position for our hero
  function handleAnimationUpdate() {
    if (isAnimationPlaying.animation && isAnimationPlaying.event === 37) {
      ork.scale.x = 1;

      animationX -= 1;

      ork.x = animationX;
    }

    if (isAnimationPlaying && isAnimationPlaying.event === 39) {
      ork.scale.x = -1;

      animationX += 1;

      ork.x = animationX;
    }

    if (isAnimationPlaying && isAnimationPlaying.event === 16) {
      ork.scale._x === 1 ? (animationX -= 3) : (animationX += 3);

      ork.x = animationX;
    }
  }
});
