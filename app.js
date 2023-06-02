let content = document.getElementById('content')
let is_shop_open = true;
let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 function orderme(){

let order = ( time, work ) => {

    return new Promise( ( resolve, reject )=>{
  
      if( is_shop_open ){
  
        setTimeout(()=>{
          resolve( work() )
  
         }, 2000)
  
      }
  
      else{
        reject( console.log("Our shop is closed") )
      }
  
    })
  }
 

  order(2000,()=>content.innerHTML = `${stocks.Fruits[0]} was selected`)

  .then(()=>{
    return order(0000,()=>content.innerHTML ='production has started')
  })
  
  .then(()=>{
    return order(2000, ()=>content.innerHTML ="Fruit has been chopped")
  })
  
  .then(()=>{
    return order(1000, ()=>content.innerHTML =`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
  })
  
  .then(()=>{
    return order(1000, ()=>content.innerHTML ="start the machine")
  })
  
  .then(()=>{
    return order(2000, ()=>content.innerHTML =`ice cream placed on ${stocks.holder[1]}`)
  })
  
  .then(()=>{
    return order(3000, ()=>content.innerHTML =`${stocks.toppings[0]} as toppings`)
  })
  
  .then(()=>{
    return order(2000, ()=>content.innerHTML ="Serve Ice Cream")
  })
  .finally(()=>{
    console.log("Thank you")
  },1000)
}