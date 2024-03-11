const allusers=[{
    firstname:"harkirat",
    gender:"male"
},{
    firstname:"ramen",
    gender:"male",
    
},{
    firstname:"priya",
    gender:"female"
}]

for(let i=0;i<allusers.length;i++){
    if(allusers[i]["gender"]=="male"){
        console.log(allusers[i]["firstname"])

    }
}