const helloWorld = () => {
    const hello = "Hello world";
    console.log(hello);
}
helloWorld()

var scope ="Im global";
const functionScope = () =>{
    var scope ="Im just local";
    const func = () =>{
        return scope
    }
    console.log(func())
}
functionScope();
console.log(scope)