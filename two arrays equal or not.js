let arr1=[1,7,3]
let arr2=[1,2,3]
compare=(arr1,arr2)=>{
    if(arr1.length!=arr2.length){
    return false
        
    }
    else{
        for(i=0;i<arr1.length;i++){
            if(arr1[i]!=arr2[i]){
                return false
           }
            
        }
    return true
        
    }
    
}
if(compare(arr1,arr2)){
    console.log("equal")
}
else{
console.log("not equal")
}
let x=JSON.stringify(arr1)
let y=JSON.stringify(arr2)
console.log(x==y)
