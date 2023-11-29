let arr=[1,2,3,4,5]
let n=8
missing =(arr,n)=>{
    let obj={}
    let miss=[]
    for(num of arr){
        obj[num]=num
        
    }
    for(i=1;i<=n;i++){
        if(obj[i]==undefined)
        miss.push(i)
    }return miss
    
}
console.log(missing(arr,n))
