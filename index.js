function  distanceFromHqInBlocks(pickLoc){
    let hq = 42
        if (pickLoc>hq)
            return pickLoc-hq
            else return hq-pickLoc
}

function distanceFromHqInFeet(pickLocInFt) {
    let block = 264
   return distanceFromHqInBlocks(pickLocInFt) * block 
}

function distanceTravelledInFeet(start, end){
    let blockInFt = 264
    if(end>start)
    return (end - start) * blockInFt
        else return (start - end) * blockInFt
}

function calculatesFarePrice(start, end){
    let feet = distanceTravelledInFeet(start, end)

    if (feet<400)
        return 0

        else if (feet<2000)
        return ((feet-400) * 2)/100

            else if(feet<2500)
            return 25

                else if(feet > 2500)
                return 'cannot travel that far'
                

}

