let arr=[1,0,1,,1,0,0]
let length=arr.length
let z = 0;
for(ele of arr)
{
    if(ele==0){
        z++
    }
}
for(i=0;i<z;i++){
    arr[i]=0
}
for(i=z;i<length;i++){
    arr[i]=1
    
}
console.log(...arr)
