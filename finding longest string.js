let lang=['html','cse','js','react','webdg']
let maxlength=lang[0].length

for(i=1;i<lang.length;i++){
           let cl=lang[i].length
   if (maxlength<cl){

        //longest = lang[i]
        maxlength=cl
    }
}
let max=[]
for(ele of lang)
{
    if(ele.length==maxlength){
        max.push(ele)
    }
}
console.log(max)
