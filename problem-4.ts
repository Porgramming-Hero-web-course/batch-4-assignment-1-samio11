{
    //
    //Problem Solve - 04
    type Circle = {
        shape: 'circle'
        radius: number;
    }
    type Rectangle = {
        shape: 'rectangle',
        width: number;
        height: number;
    }

    const calculateShapeArea = (data: Circle | Rectangle) => {
        if ('shape' in data) {
            if (data.shape === 'circle') {
                const calculatedArea = Math.PI * data.radius * data.radius
                return parseFloat(calculatedArea.toFixed(2));
            }
            if (data.shape === 'rectangle') {
                const calculatedArea = data.width * data.height
                return parseFloat(calculatedArea.toFixed(2));
            }
        }
    }

    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    // console.log(circleArea)

    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    //   console.log(rectangleArea)


    //
}