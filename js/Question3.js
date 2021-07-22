let points = [40,100,1,5,25,10];
document.getElementById("man").innerHTML=points;
function reverseSort() {
    points.sort(function(a , b) {
        return a - b
    });
    //
    points.reverse();

    document.getElementById("man").innerHTML=points;
}