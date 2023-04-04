import * as PIXI from "pixi.js";

//colors for texts
const black = new PIXI.Color("black").toNumber();
const blue = new PIXI.Color("blue").toNumber();

//texts
export const infoText = new PIXI.Text(
  "Walk animation: press and hold Arrow left / right \nSprint: press and hold left Shift \nSpell: press and hold Space",
  { fontFamily: "Arial", fontSize: 32, fill: black, align: "start" }
);

export const creditsAnimator = new PIXI.Text(
  "Animator: Maria K (https://www.behance.net/gallery/159918085/Druid-animation)",
  {
    fontFamily: "Arial",
    fontSize: 16,
    fill: black,
    align: "start",
  }
);

// enable interactive object in pixi
creditsAnimator.eventMode = "static";

//logic for interactive text
creditsAnimator.on("pointerover", () => {
  creditsAnimator.style.fill = blue;
});
creditsAnimator.on("pointerout", () => {
  creditsAnimator.style.fill = black;
});
creditsAnimator.on("click", () => {
  window.open(
    "https://www.behance.net/gallery/159918085/Druid-animation",
    "_blank"
  );
});

export const creditsArtist = new PIXI.Text(
  "Artist: 阿喳 L (https://www.artstation.com/artwork/2xlBNJ)",
  {
    fontFamily: "Arial",
    fontSize: 16,
    fill: black,
    align: "start",
  }
);

// enable interactive object in pixi
creditsArtist.eventMode = "static";

//logic for interactive text
creditsArtist.on("pointerover", () => {
  creditsArtist.style.fill = blue;
});
creditsArtist.on("pointerout", () => {
  creditsArtist.style.fill = black;
});
creditsArtist.on("click", () => {
  window.open("https://www.artstation.com/artwork/2xlBNJ", "_blank");
});

//position for our texts
creditsAnimator.x = 10;
creditsAnimator.y = 1;

creditsArtist.x = 10;
creditsArtist.y = 20;

infoText.x = 10;
infoText.y = window.innerHeight / 16;
