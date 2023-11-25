let arr=[1,2,6,6,7,7,4,5]

unique =(arr)=>{
let uniquearr=[]
for(ele of arr){
if(uniquearr.indexOf(ele)==-1){
uniquearr.push(ele)
}
}
return uniquearr
}
console.log(unique(arr))
console.log(arr.indexOf(10))
//anoteher step to do
let arr2= [...new Set(arr)]
console.log(arr2)
