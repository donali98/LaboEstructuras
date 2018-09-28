function sumarYPromediar(arr = [1,2,3,4]){
    let sumato = 0;
    let prom = 0;
    arr.forEach((ele)=>{
        sumato+=ele;
    });
    prom = sumato / arr.length;
    //Arreglo donde el primer elemento es la sumatoria y el segundo es el promedio
    return [sumato,prom];
}
console.log(sumarYPromediar());
