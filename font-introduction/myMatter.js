var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composites = Matter.Composites,
    Common = Matter.Common,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Composite = Matter.Composite,
    Bodies = Matter.Bodies;

let mainBallRadius = 50;
let canvasWidth = window.innerWidth;
let canvasHeigh = window.innerHeight;
let mainBall = []

// create engine
var engine = Engine.create(),
    world = engine.world;

// create renderer
// var render = Render.create({
//     element: document.body,
//     engine: engine,
//     options: {
//         width: window.innerWidth,
//         height: window.innerHeight,
//         showAngleIndicator: false,
//         wireframes: false
//     }
// });

// Render.run(render);

// function runTheRunner() {
//     Runner.run(runner, engine);
// }
// create runner
var runner = Runner.create();
Runner.run(runner, engine);

function init() {
    engine = Engine.create();
    render = Render.create({
        element: document.getElementById('Li71'),
        engine: engine,
        options: {
            wireframes: false,
            showIds: false,
            background: 'none', //"#bfe9f5"
            width: canvasWidth,
            height: canvasHeigh
        }
    });
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });
    Composite.add(world, mouseConstraint);
    formHiddenWall();

    Render.run(render);
    runner = Runner.create();
    Runner.run(runner, engine);
}
init();

function reInit() {
    event.preventDefault();
    Engine.clear(engine);
    Render.stop(render);
    Runner.stop(runner);
    render.canvas.remove();
    render.canvas = null;
    render.context = null;
    render.textures = {};
    init();
}



function BallHappy() {
    var mainBall = Bodies.circle(canvasWidth / 2, 0, mainBallRadius, options = {
        restitution: 1,
        render: {
            fillStyle: "#FFFFFF",
            sprite: {
                texture: './img/grinning-squinting-face_1f606.png'
            }
        }
    }, 100);
    Composite.add(engine.world, [mainBall]);
}

function BallAngry() {
    var mainBall = Bodies.circle(canvasWidth / 2, 0, mainBallRadius, options = {
        restitution: 1,
        render: {
            fillStyle: "#FFFFFF",
            sprite: {
                texture: './img/pouting-face_1f621.png'
            }
        }
    }, 100);
    Composite.add(engine.world, [mainBall]);
}

function BallCry() {
    var mainBall = Bodies.circle(canvasWidth / 2, 0, mainBallRadius, options = {
        restitution: 1,
        render: {
            fillStyle: "#FFFFFF",
            sprite: {
                texture: './img/loudly-crying-face_1f62d.png'
            }
        }
    }, 100);
    Composite.add(engine.world, [mainBall]);
}

function BallCat() {
    var mainBall = Bodies.circle(canvasWidth / 2, 0, mainBallRadius, options = {
        restitution: 1,
        render: {
            fillStyle: "#FFFFFF",
            sprite: {
                texture: './img/cat-face_1f431.png'
            }
        }
    }, 100);
    Composite.add(engine.world, [mainBall]);
}

var colorA = '#f55a3c'

function formHiddenWall() {
    var wallLeft = Bodies.rectangle(-21, canvasHeigh / 2, 40, canvasHeigh, { isStatic: true });
    var wallFloor = Bodies.rectangle(canvasWidth / 2, canvasHeigh * 0.69, canvasWidth, 30, { isStatic: true, fillStyle: colorA });
    var wallRight = Bodies.rectangle(canvasWidth + 21, canvasHeigh / 2, 40, canvasHeigh, { isStatic: true });
    Composite.add(engine.world, [wallLeft, wallRight, wallFloor]);
}
// add mouse control
var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: false
            }
        }
    });

Composite.add(world, mouseConstraint);

// keep the mouse in sync with rendering
render.mouse = mouse;

function AddHappy() {
    mainBall.push(BallHappy(300, 30, 10))
}

function AddAngry() {
    mainBall.push(BallAngry(300, 30, 10))
}

function AddCry() {
    mainBall.push(BallCry(300, 30, 10))
}

function AddCat() {
    mainBall.push(BallCat(300, 30, 10))
}

function draw() {
    Engine.update(engine);
}