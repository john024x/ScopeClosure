const fruits = () =>{
    if(true){
        var fruits1 = 'apple'
        let fruits2 = 'banana'
        const fruits3 = 'kiwi'
        console.log(fruits2)
        console.log(fruits3)
    }
    //en este caso con la palabra reservada "var" si se puede hacer el console log, dado que la varriable es accesible a nivel
    //funcion, mientras que con let y const, estas variabels son accesibles en ese bloque de codigo
    console.group("frutas")
    console.log(fruits1)
    // console.log(fruits2)
    // console.log(fruits3)
    console.groupEnd()
}

const anotherFunction = () =>{
    for (var i = 0; i<10; i++){
        setTimeout(() =>{
            console.log(i)
        },1000)
    }
}
anotherFunction()