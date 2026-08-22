// PRINT THE PATTERN
// *****
// ****
// ***
// **
// *

class solution{
    pattern5(n){
        for(let i=0;i<n;i++)
        {
            let str="";
            for(let j=0;j<n-1-i;j++)
            {
                str+="*";
            }
            console.log(str);
        }
    }
}

const obj=new solution();
obj.pattern5(5);