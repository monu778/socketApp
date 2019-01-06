var wait1000 = new Promise(function(resolve,reject) {
	setTimeout(resolve,1000);
}).then(function() {
	console.log("Hi how r u");
});


setTimeout(function(){
  console.log('Yay!')
  setTimeout(function(){
    console.log('Wheeyee!')
  }, 1000)
}, 1000)

var wait1000 =  ()=> new Promise((resolve, reject)=> {setTimeout(resolve, 1000)})

wait1000()
  .then(function() {
    console.log('Yay!i1111')
    return wait1000()
  })
  .then(function() {
    console.log('Wheeyee!22222')
  })
