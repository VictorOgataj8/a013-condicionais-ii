const num = Number(prompt('Insira um numero'))
if(num%2===0){
   console.log('divisivel por 2')
   if(num%3===0){
    console.log('divisivel por 3')
   }else{
      console.log('nao e divisivel por 3')
   }
} else{
   console.log('nao e divisiel por 2')
}




// if(num%2===0 || num%3===0){
//     console.log('ele e divisivel por 2 ou 3')
// }