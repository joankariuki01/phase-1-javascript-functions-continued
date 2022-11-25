// code your solution here

function saturdayFun(action = "roller-skate")  {
    return "This Saturday, I want to " + action + "!"
}
console.log(saturdayFun())
console.log(saturdayFun("bathe my dog"))


function mondayWork(action = "go to the office") {
    return `This Monday, I will ${action}.`
}
console.log(mondayWork());
console.log(mondayWork("work from home"));


function wrapAdjective(sym){
    return function wrapper(adj){
        return `You are ${sym }${ adj}${sym}!`
    }
    //return wrapper(" a dedicated programmer")
}
console.log(wrapAdjective("||"));