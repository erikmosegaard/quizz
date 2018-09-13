var fs = require("fs")


function obj(frage, ant1, ant2, ant3) {

	this.frage = frage || "none"
	this.ant2 = ant2 || "none"
	this.ant1 = ant1 || "none"
	this.ant3 = ant3 || "none"


	this.obj = {}

	this.obj = {
		"frage": this.frage,
		antwort: [
			this.ant1,
			this.ant2,
			this.ant3,
		]
	}
	return this.obj
}






var myObj = obj(
	"Anfangsfrage",
	obj(
		"stuffe2 fragen",
		obj(
			"stuffe2 fragen",
			obj(
				"stuffe3 fragen",
				"bild1",
				"bild2",
				"bild3"
			),
			obj(
				"stuffe3 fragen",
				"bild1",
				"bild2",
				"bild3"
			),
			obj(
				"stuffe3 fragen",
				"bild1",
				"bild2",
				"bild3"
			)
		),
		obj(
			"stuffe2 fragen",
			obj(
				"stuffe3 fragen",
				"bild1",
				"bild2",
				"bild3"
			),
			obj(
				"stuffe3 fragen",
				"bild1",
				"bild2",
				"bild3"
			),
			obj(
				"stuffe3 fragen",
				"bild1",
				"bild2",
				"bild3"
			)
		),
		obj(
			"stuffe2 fragen",
			obj(
				"stuffe3 fragen",
				"bild1",
				"bild2",
				"bild3"
			),
			obj(
				"stuffe3 fragen",
				"bild1",
				"bild2",
				"bild3"
			),
			obj(
				"stuffe3 fragen",
				"bild1",
				"bild2",
				"bild3"
			)
		)
	)
)


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