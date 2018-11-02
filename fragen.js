const titles =  {
  DE: 'Drucke deinen persönlichen Trainingsplan',
  EN: 'Print your personal workout plan'
}

const fragenKatalog = {
  DE: {
    f1: {
      frage: "Wonach fühlst du dich?",
      antworten: [{
          antwort: "Ich möchte die ganze Welt verschlingen",
          next: "f2a"
        },
        {
          antwort: "Ich möchte in ein Loch kriechen",
          next: "f2b"
        },
        {
          antwort: "Ich möchte mich in einem Fliessgewässer treiben lassen",
          next: "f2c"
        }
      ]
    },
    f2a: {
      frage: "Was schätzt du?",
      antworten: [{
          antwort: "Schmerz, damit der Nichtschmerz erkennbar wird",
          next: "f3aa"
        },
        {
          antwort: "Meinen Wohlstand und meine Privilegien",
          next: "f3ab"
        },
        {
          antwort: "Die Tatsache dass ich mit vorzüglichem Charakter ausgestattet bin",
          next: "f3ac"
        }
      ]
    },
    f2b: {
      frage: "Was hältst du von Berührung im Allgemeinen?",
      antworten: [{
          antwort: "Ich erforsche gerne mir Unbekanntes mit meinen Fingern",
          next: "f3ba"
        },
        {
          antwort: "Ich verbinde mich gerne mit einem Material von dem ich glaube, dass ich auch daraus bestehe",
          next: "f3bb"
        },
        {
          antwort: "Ich möchte in der Luft schweben in einer wohlig warmen Glaskugel",
          next: "f3bc"
        }
      ]
    },
    f2c: {
      frage: "Warum gibt es Konflikte?",
      antworten: [{
          antwort: "Weil sie Spass machen und weil sie ökonomisch sinnvoll sind",
          next: "f3ca"
        },
        {
          antwort: "Es ist zu wenig Platz für zu viel Geschehen",
          next: "f3cb"
        },
        {
          antwort: "Weil wir Tiere sind",
          next: "f3cc"
        }
      ]
    },
    f3aa: {
      frage: "Wer sollte am meisten bestraft werden?",
      antworten: [{
          antwort: "Insekten oder Steine",
          img: "z1.jpg"
        },
        {
          antwort: "Menschen die von Geld leben, das sie nicht verdienen",
          img: "z2.jpg"
        },
        {
          antwort: "Menschen die mit Geld investieren, das sie nicht verdienten",
          img: "z3.jpg"
        }
      ]
    },
    f3ab: {
      frage: "Woher kommen deine Privilegien?",
      antworten: [{
          antwort: "Aus meiner eigenen Muskelkraft",
          img: "z4.jpg"
        },
        {
          antwort: "Von der harten Arbeit meiner Vorfahr_innen",
          img: "z5.jpg"
        },
        {
          antwort: "Von der harten Arbeit meiner Nachbarn",
          img: "z6.jpg"
        }
      ]
    },
    f3ac: {
      frage: "Was wäre, wenn es keine Hierarchien gäbe?",
      antworten: [{
          antwort: "Ich wäre zuoberst",
          img: "z7.jpg"
        },
        {
          antwort: "Die Gesellschaft würde im Chaos versinken",
          img: "z8.jpg"
        },
        {
          antwort: "Wir können nicht ohne Hierachien leben, wir können es nur versuchen",
          img: "z9.jpg"
        }
      ]
    },
    f3ba: {
      frage: "Was ist am dreckigsten?",
      antworten: [{
          antwort: "Krankheit",
          img: "z10.jpg"
        },
        {
          antwort: "Ratten",
          img: "z11.jpg"
        },
        {
          antwort: "deine Toilette",
          img: "z12.jpg"
        }
      ]
    },
    f3bb: {
      frage: "Wo hinein würdest du am ehesten gehen?",
      antworten: [{
          antwort: "In den Bauch eines anderen Menschen",
          img: "z13.jpg"
        },
        {
          antwort: "Auf einem anarchistischen Planeten",
          img: "z14.jpg"
        },
        {
          antwort: "In eine öffentliche Fernseh-Diskussion über Privilegien als sehr privilegierte Person unter 10 nicht-privilegierten Personen",
          img: "z15.jpg"
        }
      ]
    },
    f3bc: {
      frage: "Welche Idee zur Mobilitätspolitik würdest du unterstützen?",
      antworten: [{
          antwort: "Mobilität sollte gratis sein und alle Menschen dürften jederzeit überallhin fliegen",
          img: "z16.jpg"
        },
        {
          antwort: "Mobilität sollte teurer sein, damit nur wohlhabende Personen fliegen könnten",
          img: "z17.jpg"
        },
        {
          antwort: "Mobilität sollte so reguliert sein, dass nur arme Menschen fliegen dürften",
          img: "z18.jpg"
        }
      ]
    },
    f3ca: {
      frage: "Was macht auch Spass, und ist aber gratis?",
      antworten: [{
          antwort: "Über Nationsgrenzen laufen",
          img: "z19.jpg"
        },
        {
          antwort: "Luft",
          img: "z20.jpg"
        },
        {
          antwort: "Wasser",
          img: "z21.jpg"
        }
      ]
    },
    f3cb: {
      frage: "Wie viele Personen passen in deine Wohnung?",
      antworten: [{
          antwort: "Etwa zwei",
          img: "z22.jpg"
        },
        {
          antwort: "Ungefähr 200, bis ganz unter die Decke",
          img: "z23.jpg"
        },
        {
          antwort: "Alle Personen, die ich gern habe",
          img: "z24.jpg"
        }
      ]
    },
    f3cc: {
      frage: "Denkst du, Menschen und Tiere sind gleich viel wert und sollten die gleichen Rechte haben?",
      antworten: [{
          antwort: "Ich esse Käse, würde aber nicht von einem Stier geschwängert und gemolken werden wollen",
          img: "z25.jpg"
        },
        {
          antwort: "Tiere haben ihre eigenen Intelligenz-Systeme, sind aber nicht gleichwertig im Wertsystem der Menschen",
          img: "z26.jpg"
        },
        {
          antwort: "Ich wäre manchmal gern ein Tier",
          img: "z27.jpg"
        }
      ]
    },
  },
  EN: {
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
          img: "z1.jpg"
        },
        {
          antwort: "People who live from money they don’t deserve",
          img: "z2.jpg"
        },
        {
          antwort: "People who invest with money they don’t deserve",
          img: "z3.jpg"
        }
      ]
    },
    f3ab: {
      frage: "Where do your privileges come from?",
      antworten: [{
          antwort: "From my strong muscles",
          img: "z4.jpg"
        },
        {
          antwort: "From my ancestors hard work",
          img: "z5.jpg"
        },
        {
          antwort: "From my neighbours hard work",
          img: "z6.jpg"
        }
      ]
    },
    f3ac: {
      frage: "What if there was no hierarchy?",
      antworten: [{
          antwort: "In this case, I would be on the top",
          img: "z7.jpg"
        },
        {
          antwort: "Society would become a mess",
          img: "z8.jpg"
        },
        {
          antwort: "We can not have no hierarchy, we can only try ",
          img: "z9.jpg"
        }
      ]
    },
    f3ba: {
      frage: "What is most filthy?",
      antworten: [{
          antwort: "sickness",
          img: "z10.jpg"
        },
        {
          antwort: "rats",
          img: "z11.jpg"
        },
        {
          antwort: "your toilet",
          img: "z12.jpg"
        }
      ]
    },
    f3bb: {
      frage: "Inside which of these would you rather go?",
      antworten: [{
          antwort: "into another person’s belly",
          img: "z13.jpg"
        },
        {
          antwort: "on an anarchist planet",
          img: "z14.jpg"
        },
        {
          antwort: "into a public tv discussion about privileges as a very privileged person amongst 10 underprivileged persons",
          img: "z15.jpg"
        }
      ]
    },
    f3bc: {
      frage: "Which innovation in mobility politics do you support?",
      antworten: [{
          antwort: "Mobility should be for free and everyone can fly wherever they want all the time",
          img: "z16.jpg"
        },
        {
          antwort: "Mobility should be more expensive, so only very rich people can afford to fly",
          img: "z17.jpg"
        },
        {
          antwort: "Mobility should be regulated, so only poor people are allowed to fly",
          img: "z18.jpg"
        }
      ]
    },
    f3ca: {
      frage: "What is fun and free, too?",
      antworten: [{
          antwort: "Walking over national borders",
          img: "z19.jpg"
        },
        {
          antwort: "Air",
          img: "z20.jpg"
        },
        {
          antwort: "No water any more",
          img: "z21.jpg"
        }
      ]
    },
    f3cb: {
      frage: "How many people can be put into your flat?",
      antworten: [{
          antwort: "About two",
          img: "z22.jpg"
        },
        {
          antwort: "Around 200, until up until the ceiling",
          img: "z23.jpg"
        },
        {
          antwort: "All the people I like",
          img: "z24.jpg"
        }
      ]
    },
    f3cc: {
      frage: "Thus, do you think animals and human are / should be equal?",
      antworten: [{
          antwort: "I eat cheese but would not want to be made pregnant by a cow and have my baby killed and be milked",
          img: "z25.jpg"
        },
        {
          antwort: "Animals have their own systems of intelligence but are not equal in human’ value system",
          img: "z26.jpg"
        },
        {
          antwort: "I would love to be an animal, sometimes",
          img: "z27.jpg"
        }
      ]
    },
  },
}
