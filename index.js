// const { reporters } = require("mocha")

// code your solution here
function saturdayFun(a, b='roller-skate'){
    if (a){
return "This Saturday, I want to " + a+"!"
}else {
    return "This Saturday, I want to " + b+"!"
}
}
function mondayWork(a, b="go to the office"){
    if (a){
        return "This Monday, I will " + a+"."
    }
    else{
        return "This Monday, I will " + b+"."
    }
}

function wrapAdjective(a ="*"){
    return function(b ="inner"){
        return `You are ${a}${b}${a}!`

}}