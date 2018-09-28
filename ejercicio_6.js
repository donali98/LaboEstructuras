function encriptar(cadena ='murcielago'){
    let nueva = '';
    cadena= cadena.split('');    
    let caracteres = ['m','u','r','c','i','e','l','a','g','o'];
    let numeros  = [0,1,2,3,4,5,6,7,8,9];
    for(let i = 0; i<cadena.length;i++){
        let pivote = cadena[i];
        for(let j = 0; j<caracteres.length;j++){
            if(pivote == caracteres[j])  nueva = nueva+caracteres.indexOf(pivote);
        }
    }
    return nueva;   
}
console.log(encriptar());
