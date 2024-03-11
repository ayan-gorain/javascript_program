const num=[21,22,23,24,25];

let lar=num[0];

for(let i=0;i<num.length;i++){
    if(num[i]>lar){
        lar = num[i]; 
        
    }
}
console.log(lar);
