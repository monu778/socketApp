function * generatorFn() {

    console.log("this will executed first");
    yield "Hello"

    console.log("this will executed second");
    yield "How are you"

    console.log("This will end here");
    return "Its enough"
}


const obj = generatorFn();

//for(i of obj) {
   // console.log(i.value)
//}
console.log("668768768");
obj.next().value;
obj.next().value;
obj.next().value;
obj.next()
