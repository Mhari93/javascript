let lang=['hari','thm','ren']
lang.sort(
    (s1,s2)=>{
        return s2.length-s1.length
    }
)
console.log(lang)
