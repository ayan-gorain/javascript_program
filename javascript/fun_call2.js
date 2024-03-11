function calAri(a,b,finalarithmaticall){
    const ans=finalarithmaticall(a,b)
    return ans;
}
function sum(a,b){
    return a+b;

}
function minus(a,b){
    return a-b;

}
const val=calAri( 1,3,minus)

console.log(val)