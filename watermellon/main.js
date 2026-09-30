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

Render.run(render)
Render.run(engine)