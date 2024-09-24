function saturdayFun (activity ='roller-skate') { 
return `This Saturday, I want to ${activity}!`
} console.log (saturdayFun())

function mondayWork (activity ="work from home." ) {
    return "This Monday , I will ${activity}"
}console.log (mondayWork())


function mondayWork (activity ='go to the office') {
    return `This Monday, I will ${activity}.`;
}console.log (mondayWork())

function wrapAdjective(skip = "*") {
    return function(adjective = "special") {
        return `You are ${skip}${adjective}${skip}!`;
    };
}