function sum(a, b) { //eslint-disable-line
    var sumArray = [];
    var sum = a + b;
    sumArray[0] = sum;
    sumArray[1] = ("The sum of " + a +" and " + b + " is " + sum + "." )
    return sumArray;

}

function sumArray(sumArr) { //eslint-disable-line
    var sum1 = 0;
    for(var i = 0; i<sumArr.length; i++)
        var sum1 = sum(sumArr[i],sum1);
        // var sum2 = sum(sum1, sumArr[i]);
        console.log(sum1)
}