const obj = {
	DE_obj: {

	},
	EN_obj: {
		f1: {
			frage: "How do you feel like?",
			antworten: [{
					antwort: "I want to hug the whole world",
					next: "f2a"
				},
				{
					antwort: "I want to crawl into a hole",
					next: "f2b"
				},
				{
					antwort: "I want to float in a stream of flowing waters",
					next: "f2c"
				}
			]
		},
		f2a: {
			frage: "What do you appreciate?",
			antworten: [{
					antwort: "Pain, so non-pain becomes discernible",
					next: "f3aa"
				},
				{
					antwort: "My wealth and my privileges",
					next: "f3ab"
				},
				{
					antwort: "The fact that I am blessed by an excellent character",
					next: "f3ac"
				}
			]
		},
		f2b: {
			frage: "What do you generally think of the concept of touch?",
			antworten: [{
					antwort: "I like exploring unfamiliar terrain by my fingers",
					next: "f3ba"
				},
				{
					antwort: "Touch is superficial",
					next: "f3bb"
				},
				{
					antwort: "I want to levitate in the air",
					next: "f3bc"
				}
			]
		},
		f2c: {
			frage: "Why do conflicts exist?",
			antworten: [{
					antwort: "Because it’s fun and free / economically wise",
					next: "f3ca"
				},
				{
					antwort: "We just don’t have enough space",
					next: "f3cb"
				},
				{
					antwort: "Because we are animals",
					next: "f3cc"
				}
			]
		},
		f3aa: {
			frage: "Who should be punished most?",
			antworten: [{
					antwort: "Minarets or maybe insects or maybe stones",
					img: "red1.jpg"
				},
				{
					antwort: "People who live from money they don’t deserve",
					img: "red21.jpg"
				},
				{
					antwort: "People who invest with money they don’t deserve",
					next: "img"
				}
			]
		},
		f3ab: {
			frage: "Where do your privileges come from?",
			antworten: [{
					antwort: "From my strong muscles",
					next: "img"
				},
				{
					antwort: "From my ancestors hard work",
					next: "img"
				},
				{
					antwort: "From my neighbours hard work",
					next: "img"
				}
			]
		},
		f3ac: {
			frage: "What if there was no hierarchy?",
			antworten: [{
					antwort: "In this case, I would be on the top",
					next: "img"
				},
				{
					antwort: "Society would become a mess",
					next: "img"
				},
				{
					antwort: "We can not have no hierarchy, we can only try ",
					next: "img"
				}
			]
		},
		f3ba: {
			frage: "What is most filthy?",
			antworten: [{
					antwort: "sickness",
					next: "img"
				},
				{
					antwort: "rats",
					next: "img"
				},
				{
					antwort: "your toilet",
					next: "img"
				}
			]
		},
		f3bb: {
			frage: "Inside which of these would you rather go?",
			antworten: [{
					antwort: "into another person’s belly",
					next: "img"
				},
				{
					antwort: "on an anarchist planet",
					next: "img"
				},
				{
					antwort: "into a public tv discussion about privileges as a very privileged person amongst 10 underprivileged persons",
					next: "img"
				}
			]
		},
		f3bc: {
			frage: "Which innovation in mobility politics do you support?",
			antworten: [{
					antwort: "Mobility should be for free and everyone can fly wherever they want all the time",
					next: "img"
				},
				{
					antwort: "Mobility should be more expensive, so only very rich people can afford to fly",
					next: "img"
				},
				{
					antwort: "Mobility should be regulated, so only poor people are allowed to fly",
					next: "img"
				}
			]
		},
		f3ca: {
			frage: "What is fun and free, too?",
			antworten: [{
					antwort: "Walking over national borders",
					next: "img"
				},
				{
					antwort: "Air",
					next: "img"
				},
				{
					antwort: "No water any more",
					next: "img"
				}
			]
		},
		f3cb: {
			frage: "How many people can be put into your flat?",
			antworten: [{
					antwort: "About 2",
					next: "img"
				},
				{
					antwort: "Around 200, until up until the ceiling",
					next: "img"
				},
				{
					antwort: "All the people I like",
					next: "img"
				}
			]
		},
		f3cc: {
			frage: "Thus, do you think animals and human are / should be equal?",
			antworten: [{
					antwort: "I eat cheese but would not want to be made pregnant by a cow and have my baby killed and be milked",
					next: "img"
				},
				{
					antwort: "Animals have their own systems of intelligence but are not equal in human’ value system",
					next: "img"
				},
				{
					antwort: "I would love to be an animal, sometimes",
					next: "img"
				}
			]
		},
	},
}