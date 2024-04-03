gsap.from(".box",{
    x:400,
    duration : 3,
    delay :1,
    rotate :360,
    // height : 100,
    opacity : 0,
    scale : 0, 
    background : "red",

    color : "red"
})
gsap.from(".box h1",{
    y : -10,

    opacity : 0,
    duration : 1,
    stagger : 1,
    
})
