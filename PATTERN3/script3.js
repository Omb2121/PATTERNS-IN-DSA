// PRINT THE PATTER
// 1
// 12
// 123
// 1234
// 12345

class solution{
    pattern3(n){
        for(let i=1;i<n;i++)
        {
            let str = "";
            for(let j=1;j<=i;j++)
            {
                str+=j;
            }
            console.log(str);
        }
    }
}

const sol = new solution();
sol.pattern3(6);
