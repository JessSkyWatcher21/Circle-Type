// my scripts
console.log('Loaded')
const splitter = new GraphemeSplitter();
const autum = new CircleType(
  document.getElementById("autum"),
  splitter.splitGraphemes.bind(splitter)
);

new CircleType(document.getElementById("text")).radius(384);

TweenMax.to("#autum", 20, {
  rotation: "+=360",
  repeat: -1,
  ease: Linear.easeNone,
  transformOrigin: "50% 50%"
});
//https://codepen.io/SkyWatcher12/pen/abqVYZj.js