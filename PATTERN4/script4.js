// PRINT THE PATTERN
// 1
// 22
// 333
// 4444
// 55555

class solution{
    pattern4(n){
        for(let i=1;i<n;i++)
        {
            let str="";
            for(let j=1;j<=i;j++)
            {
                str+=i;
            }
            console.log(str);
        }
    }
}

const sol = new solution();
sol.pattern4(6);