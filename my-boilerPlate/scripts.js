// my scripts
const splitter = new GraphemeSplitter();
const leaves = new CircleType(document.getElementById("leaves"),
  splitter.splitGraphemes.bind(splitter)
);

const text = new CircleType(document.getElementById("text")).radius(384);

TweenMax.to("#leaves", 20, {
  rotation: "+=360",
  repeat: -1,
  ease: Linear.easeNone,
  transformOrigin: "50% 50%"
});
//https://codepen.io/SkyWatcher12/pen/abqVYZj
// GreenSock spin effect found by: https://codepen.io/MAW/pen/ZbVWwN
