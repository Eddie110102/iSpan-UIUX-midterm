
        // Global Settings / Variables
        var Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            Bodies = Matter.Bodies,
            Composite = Matter.Composite,
            Events = Matter.Events,
            BodyM = Matter.Body,
            Vertices = Matter.Vertices;
            // 搬運
            Common = Matter.Common,
            MouseConstraint = Matter.MouseConstraint,
            Mouse = Matter.Mouse;
        
        var engine;
        // world = engine.world;
        var render;
        var runner;
        let canvasWidth = window.innerWidth;
        let canvasHeigh = window.innerHeight;
        let blockSize = 50;
        let mainBallRadius = 50;
        let minimumBlockGenerateX = 50;
        let minimumBlockGenerateY = 100;
        let blockSeparateX = canvasWidth - minimumBlockGenerateX - 50;
        let blockSeparateY = canvasHeigh - minimumBlockGenerateY  - 100;
        let minimumDistanceBetweenBlocks = 300;
    

        function init()
        {
            engine = Engine.create();
            render = Render.create({
                element: document.getElementById('Li71'),
                engine: engine,
                options:{
                    wireframes:false,
                    showIds:false,
                    background: 'none', //"#bfe9f5"
                    width:canvasWidth,
                    height:canvasHeigh
                }
            });
            formHiddenWall();
            formMainBall(0);
            formRandomBlocks(10);
            formRandomBlocks2(10);
            formRandomBlocks3(10);

            Render.run(render);
            runner = Runner.create();
            // Runner.run(runner, engine);
        }
            
            // runner = Runner.create();
            // add bodies
//     var offset = 10,
//     options = { 
//         isStatic: true
//     };

// world.bodies = [];

// these static walls will not be rendered in this sprites example, see options
// Composite.add(world, [
//     Bodies.rectangle(400, -offset, 800.5 + 2 * offset, 50.5, options),
//     Bodies.rectangle(400, 600 + offset, 800.5 + 2 * offset, 50.5, options),
//     Bodies.rectangle(800 + offset, 300, 50.5, 600.5 + 2 * offset, options),
//     Bodies.rectangle(-offset, 300, 50.5, 600.5 + 2 * offset, options)
// ]);

// var stack = Composites.stack(20, 20, 10, 4, 0, 0, function(x, y) {
//     if (Common.random() > 0.35) {
//         return Bodies.rectangle(x, y, 64, 64, {
//             render: {
//                 strokeStyle: '#ffffff',
//                 sprite: {
//                     texture: './img/social-enjoyfonts.png'
//                 }
//             }
//         });
//     } else {
//         return Bodies.circle(x, y, 46, {
//             density: 0.0005,
//             frictionAir: 0.06,
//             restitution: 0.3,
//             friction: 0.01,
//             render: {
//                 sprite: {
//                     texture: './img/Group 2.png'
//                 }
//             }
//         });
//     }
// });

// Composite.add(world, stack);

// var mouse = Mouse.create(render.canvas),
// mouseConstraint = MouseConstraint.create(engine, {
//     mouse: mouse,
//     constraint: {
//         stiffness: 0.2,
//         render: {
//             visible: false
//         }
//     }
// });



// Composite.add(world, mouseConstraint);

// // keep the mouse in sync with rendering
// render.mouse = mouse;

// Render.lookAt(render, {
// min: { x: 0, y: 0 },
// max: { x: canvasWidth, y: canvasHeigh }
// });

// // context for MatterTools.Demo
// return {
// engine: engine,
// runner: runner,
// render: render,
// canvas: render.canvas,
// stop: function() {
//     Matter.Render.stop(render);
//     Matter.Runner.stop(runner);
// }
// };
        
        init();

        function reInit()
        {
            // event.preventDefault();
            Engine.clear(engine);
            Render.stop(render);
            Runner.stop(runner);
            render.canvas.remove();
            render.canvas = null;
            render.context = null;
            render.textures = {};
            init();
        }

        function formMainBall()
        {
            const mainBallInitX = minimumBlockGenerateX + blockSeparateX * Math.random();
            const mainBallInitY = minimumBlockGenerateY + blockSeparateY * Math.random();;
            
            var mainBall = Bodies.circle(mainBallInitX, mainBallInitY, mainBallRadius, options = {
                restitution: 1,
                render:{
                    fillStyle:"#FFFFFF",
                    sprite: {
                        texture: './img/pouting-face_1f621.png'
                    }
                }
            }, 100);
            Composite.add(engine.world, [mainBall]);
        }
        function formHiddenWall()
        {
            var wallLeft = Bodies.rectangle(-21, canvasHeigh/2, 40, canvasHeigh, { isStatic: true });
            var wallFloor = Bodies.rectangle(canvasWidth/2, canvasHeigh - 190, canvasWidth, 30, { isStatic: true });
            var wallRight = Bodies.rectangle(canvasWidth+21, canvasHeigh/2, 40, canvasHeigh, { isStatic: true });
            Composite.add(engine.world, [wallLeft,wallRight,wallFloor]);
        }

        function formRandomBlocks(blockCount)
        {
            var blockOptions ={
                restitution: 1,
                render : {
                    fillStyle : "#569cd8",
                    sprite: {
                        texture: './img/smiling-face-with-halo_1f607.png'
                    }
                },
                isStatic : false,
                angle : getRadiusByDegree(0)
            };
            
            var blockCoordinateList = [];
            
            for(var i=0; i<blockCount; i++)
            {
                var blockCoordinate = getRandomCoordinateForBlocks(blockCoordinateList);
                var block = Bodies.circle(blockCoordinate.x, blockCoordinate.y, blockSize, blockOptions);
                blockCoordinateList.push(blockCoordinate);
                Composite.add(engine.world, [block]);
            }            
        }

        function formRandomBlocks3(blockCount)
        {
            var blockOptions ={
                restitution: 1,
                render : {
                    fillStyle : "#569cd8",
                    sprite: {
                        texture: './img/smiling-cat-with-heart-eyes_1f63b.png'
                    }
                },
                isStatic : false,
                angle : getRadiusByDegree(0)
            };
            
            var blockCoordinateList = [];
            
            for(var i=0; i<blockCount; i++)
            {
                var blockCoordinate = getRandomCoordinateForBlocks(blockCoordinateList);
                var block = Bodies.circle(blockCoordinate.x, blockCoordinate.y, blockSize, blockOptions);
                blockCoordinateList.push(blockCoordinate);
                Composite.add(engine.world, [block]);
            }            
        }

        function formRandomBlocks2(blockCount)
        {
            var blockOptions ={
                restitution: 1,
                render : {
                    fillStyle : "#569cd8",
                    sprite: {
                        texture: './img/face-holding-back-tears_1f979.png'
                    }
                },
                isStatic : false,
                angle : getRadiusByDegree(0)
            };
            
            var blockCoordinateList = [];
            
            for(var i=0; i<blockCount; i++)
            {
                var blockCoordinate = getRandomCoordinateForBlocks(blockCoordinateList);
                var block = Bodies.circle(blockCoordinate.x, blockCoordinate.y, blockSize, blockOptions);
                blockCoordinateList.push(blockCoordinate);
                Composite.add(engine.world, [block]);
            }            
        }
        function getRandomCoordinateForBlocks(blockCoordinateList)
        {
            var x = minimumBlockGenerateX + blockSeparateX * Math.random();
            var y = minimumBlockGenerateY + blockSeparateY * Math.random();
            var fitAll = false;
            var loopCount = 0;
            while(!fitAll && loopCount < 1000)
            {
                fitAll = true;
                for(var i in blockCoordinateList)
                {
                    if(getDistanceWithPoints(blockCoordinateList[i],{x,y}) < minimumDistanceBetweenBlocks)
                    {
                        x = minimumBlockGenerateX + blockSeparateX * Math.random();
                        y = minimumBlockGenerateY + blockSeparateY * Math.random();
                        fitAll = false;
                    }
                }
                loopCount++;
            }
            return {x,y};
        }
        function getDistanceWithPoints(pointA,pointB)
        {
            return Math.sqrt(Math.pow(Math.floor(pointA.x) - Math.floor(pointB.x),2) + Math.pow(Math.floor(pointA.y) - Math.floor(pointB.y),2));
        }


        function runTheRunner()
        {
            Runner.run(runner, engine);
        }
        function stopTheRunner()
        {
            Runner.stop(runner, engine);
        }
        function getRadiusByDegree(degree)
        {
            return Math.PI / 180 * degree;
        }
        // function Hello()
        // {
            
        // }

        // -----------------------------------------------------------------

        