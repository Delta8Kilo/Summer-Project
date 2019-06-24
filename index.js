var clientw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var clienth = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var clientm = Math.min(clientw, clienth)

//Aliases
let Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;

//Create a Pixi Application
let app = new Application({
  width: (clientm * 1.00),
  height: (clientm * 1.00),
  antialias: true,
  transparent: false,
  autoDensity: true,
  backgroundColor: 0x1B4F72
});

//Add the canvas that Pixi automatically created for you to the HTML document
document.getElementById('playfield').appendChild(app.view)

//load an image and run the `setup` function when it's done
loader
  .add("images/cat.png")
  .load(setup);

//This `setup` function will run when the image has loaded
function setup() {

  //Create the cat sprite
  let cat = new Sprite(resources["images/cat.png"].texture);
  
  //Add the cat to the stage
  app.stage.addChild(cat);
}