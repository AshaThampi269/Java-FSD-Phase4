findSquare(6);
findRectangle(7,3);
findCircle(5);
findTriangle(4, 8);

function findSquare(...args)
{
    squareArea = (args[0] * args[0]);
    console.log("Area of Square is: ", squareArea);
}

function findRectangle(...args)
{
    rectangleArea = (args[0]) * (args[1]) ;
    console.log("Area of Rectangle is: ", rectangleArea);
}

function findCircle(...args)
{
    circleArea = 3.14 * (args[0]) * (args[0]) ;
    console.log("Area of Circle is: ", circleArea);
}

function findTriangle(...args)
{
    let triangleArea = 1;
    //triangleArea = (args[0] * args[1]) / 2;
    for (let arg of args) triangleArea *= arg;
    triangleArea = triangleArea / 2;
    console.log("Area of Triangle is: ", triangleArea);
}