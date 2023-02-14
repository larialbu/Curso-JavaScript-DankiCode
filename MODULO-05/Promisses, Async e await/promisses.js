function testes(){
    //verificar ou rejeitar essa promisse
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            const erro = false;

            if(erro){
                reject("Error.....")
            }else{
                resolve("A promisse foi resolvida com sucesso");
            }
    
        },2000)
        
    });
};


/* testes().then(function(res){
    alert(res);
}).catch(function(err){
    alert(err);
})
 */

//ou

async function testes2(){
    //o await so sera execuldado depois que a promise for resolvida
    await testes().then(function(res){
        alert(res)
    });
    alert('ola');
}
testes2();