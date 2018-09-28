function ocurrencias(num =1, arr = [1,2,3,1,4,1,5]){
    let contador = 0;
    arr.forEach((ele)=>{
        if(ele == num) contador++;
    });
    return contador;
}
console.log(ocurrencias());
