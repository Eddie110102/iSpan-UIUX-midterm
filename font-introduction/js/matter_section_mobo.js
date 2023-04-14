        // // Global Settings / Variables
        // var Engine = Matter.Engine,
        //     Render = Matter.Render,
        //     Runner = Matter.Runner,
        //     Bodies = Matter.Bodies,
        //     Composite = Matter.Composite,
        //     Events = Matter.Events,
        //     BodyM = Matter.Body,
        //     Vertices = Matter.Vertices;
        //     // 搬運
        //     Common = Matter.Common,
        //     MouseConstraint = Matter.MouseConstraint,
        //     Mouse = Matter.Mouse;
        
        // var engine;
        // // world = engine.world;
        // var render;
        // var runner;
        const canvasWidt = 375;
        const canvasHeigh_Mobo = 667;
        const blockSize_Mobo = 60;
        const mainBallRadius_Mobo = 60;
        const minimumBlockGenerateX_Mobo = 50;
        const minimumBlockGenerateY_Mobo = 100;
        const blockSeparateX_Mobo = canvasWidt- minimumBlockGenerateX_Mobo - 50;
        const blockSeparateY_Mobo = canvasHeigh_Mobo - minimumBlockGenerateY_Mobo  - 100;
        const minimumDistanceBetweenBlocks_Mobo = 300;

        function init()
        {
            engine = Engine.create();
            render = Render.create({
                element: document.getElementById('Li71Mobo'),
                engine: engine,
                options:{
                    wireframes:false,
                    showIds:false,
                    background: 'none', 
                    width:canvasWidt,
                    height:canvasHeigh_Mobo
                }
            });
            formHiddenWall();
            formMainBall(10);
            formRandomBlocks(10);
            formRandomBlocks2(10);

            Render.run(render);
            runner = Runner.create();
            // Runner.run(runner, engine);
        }

        
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
            const mainBallInitX = minimumBlockGenerateX_Mobo + blockSeparateX_Mobo * Math.random();
            const mainBallInitY = minimumBlockGenerateY_Mobo + blockSeparateY_Mobo * Math.random();;
            
            var mainBall = Bodies.circle(mainBallInitX, mainBallInitY, mainBallRadius_Mobo, options = {
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
            var wallLeft = Bodies.rectangle(-21, canvasHeigh_Mobo/2, 40, canvasHeigh_Mobo, { isStatic: true });
            var wallFloor = Bodies.rectangle(canvasWidt/2, 653, canvasWidt, 30, { isStatic: true });
            var wallRight = Bodies.rectangle(canvasWidt+21, canvasHeigh_Mobo/2, 40, canvasHeigh_Mobo, { isStatic: true });
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
                var block = Bodies.rectangle(blockCoordinate.x, blockCoordinate.y, blockSize_Mobo, blockSize_Mobo, blockOptions);
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
                var block = Bodies.rectangle(blockCoordinate.x, blockCoordinate.y, blockSize_Mobo, blockSize_Mobo, blockOptions);
                blockCoordinateList.push(blockCoordinate);
                Composite.add(engine.world, [block]);
            }            
        }
        function getRandomCoordinateForBlocks(blockCoordinateList)
        {
            var x = minimumBlockGenerateX_Mobo + blockSeparateX_Mobo * Math.random();
            var y = minimumBlockGenerateY_Mobo + blockSeparateY_Mobo * Math.random();
            var fitAll = false;
            var loopCount = 0;
            while(!fitAll && loopCount < 1000)
            {
                fitAll = true;
                for(var i in blockCoordinateList)
                {
                    if(getDistanceWithPoints(blockCoordinateList[i],{x,y}) < minimumDistanceBetweenBlocks_Mobo)
                    {
                        x = minimumBlockGenerateX_Mobo + blockSeparateX_Mobo * Math.random();
                        y = minimumBlockGenerateY_Mobo + blockSeparateY_Mobo * Math.random();
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


        // -------------------------------------------------------------------

