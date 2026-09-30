// 모듈 불러오기
var Engine = Matter.Engine,
    Render = Matter.Render,
    Bodies = Matter.Bodies,
    World = Matter.World;

// 엔진 선언
const engine = Engine.create();

//랜더(배경) 선언
const render = Render.create({   
    engine,
    //어디에 그릴것인지
    element: document.body,
    options: {
        wireframes: false,
        background: '#F7F4C8',
        width: 620,
        height: 850,
    },
});

const world = engine.world;

const leftwall = Bodies.rectangle(15,395, 30, 790, {
    isStatic: true,
    render:{fillStyle: '#E6B143'}
})

World.add(world, [leftwall]);

const rightwall = Bodies.rectangle(605,395, 30, 790, {
    isStatic: true,
    render:{fillStyle: '#E6B143'}
})

World.add(world, [rightwall]);

const ground = Bodies.rectangle(310,820, 620, 60, {
    isStatic: true,
    render:{fillStyle: '#E6B143'}
})

World.add(world, [ground]);

const topline = Bodies.rectangle(310,150, 620, 2, {
    isStatic: true,
    render:{fillStyle: '#E6B143'}
})

World.add(world, [topline]);

Render.run(render)
Render.run(engine)