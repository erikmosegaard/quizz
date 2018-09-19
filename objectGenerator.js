var fs = require("fs")


function obj(frage, ant1, ant2, ant3, next) {

}



var myObj = obj()


var testObj = {
	frage: "erste frage",

}




// myObj[0] = obj( "are you gay?", 12,4,6)
// myObj[1] = obj( "are you gay?", 12,4,6)
// myObj[2] = obj( "are you gay?", 12,4,6)



fs.writeFile("./test.json", JSON.stringify(myObj), err => {
	err ? console.log(err) : console.log(err)
})

console.log(JSON.stringify(myObj))