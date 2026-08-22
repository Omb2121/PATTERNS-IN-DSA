//PRINT THE PATTER 2
// *
// **
// ***
// ****
// *****

class solution2{
    pattern2(n){
        for(let i=1;i<=n;i++){
            let str="";
            for(let j=1;j<=i;j++){
                str+="*";
            }
            console.log(str);
        }
    }
}
const sol = new solution2();
sol.pattern2(4);