const getAreaPointsForConvex = points => {
    //This function calc the angle bettween two points
    const calcAng = (point,p) => Math.atan2(point.y - p.y, point.x - p.x) * 180 / Math.PI + 180;
    //we copy  the array.
    let pointsList = [...points];
    //We need to set the first point, at one extreme be can sorting the array to lower or to highest.
    pointsList.sort((a,b)=> a.x<b.x ? 1:-1)
    //Creates a new empty array.
    let orderedPoints = [];
    // The point that we use to analize.
    let point = pointsList[0];
    //We push this to output.
    orderedPoints.push(point)
    //And removes from the array points to analize.
    pointsList.splice(0,1) 
    //Starts the loop
    while ( pointsList.length ) {
        //We search the Min Angle bettween all the points
        let minAngle = pointsList.reduce( (min,p) => calcAng(point,p) < min ? calcAng(point,p) : min, 361);
        //If we find a min.
        if (minAngle < 361) {
            //we get the index of the new point o "Next" point.
            let indNewPoint = pointsList.findIndex(p => calcAng(point,p) === minAngle);
            //Actualize the actual point
            point = pointsList[indNewPoint]
            //Push him to Output
            orderedPoints.push(point)
            //And removes from the array of point to analize
            pointsList.splice(indNewPoint,1)           
        }else{
            //Else We break and Log this situation.
            console.log('We havent found a min angle');
            
            break
        }
    }
    //Later We add the first to complete the cicle of points --Only if Nesesary
    orderedPoints.push(orderedPoints[0])
    //Return the Ordered Points
    return orderedPoints
}