add = async (a,b) => {
    return a+b+c;
}

check_error = async (a,b) => {
    
    try {
        result = await add(a,b)
        return result;
    } catch(e) {
        throw new Error("Some thing went wron with parameteters")
    }
}

check_error(3,4).then(data => { console.log(data)})
.catch((e) => { console.log(e.message)});

console.log("jhgjh");