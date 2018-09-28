function retornarArregloTipos(arr = [1,'algo','s',[1,2]],tipo = 'boolean'){
    let nuevo = [];
    arr.forEach((ele)=>{
        if(typeof(ele) == tipo) nuevo.push(ele);
    }); 

    if(nuevo.length!=0)return nuevo;
    else return "No hay elementos del tipo especificado";
}

console.log(retornarArregloTipos());
