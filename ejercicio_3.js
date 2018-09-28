function retornarTipoDe(arr = ['algo',1,true,'amama','dads',[1,2]]){
    let tipos = [];
    let canti = [];
    arr.forEach((ele)=>{
        
        if(!tipos.includes(typeof(ele))){
            tipos.push(typeof(ele));
            canti.push(0);        
        }
    }); 
    for(let i = 0; i<arr.length;i++){
        let element = typeof(arr[i]);
        for(let j = 0; j<arr.length;j++){
            if(element == tipos[j]) canti[j]+=1;
        }
    }
    return [tipos,canti];
}

console.log(retornarTipoDe());