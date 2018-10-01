global_address = 'g'

function autocomplete(address){
  console.log(`we will evaluate the address: ${address}`)
  setTimeout(() => {
    if(global_address == address){
      console.log(`the autocomplete was executed: ${address}`)
    }else{
      console.log(`address: ${address}`)
      console.log(`global_address: ${global_address}`)
    }
  },100);
}

global_address = 'ga'
autocomplete(global_address)
global_address = 'gal'
autocomplete(global_address)
global_address = 'gall'
autocomplete(global_address)
global_address = 'galla'
autocomplete(global_address)
global_address = 'gallar'
autocomplete(global_address)