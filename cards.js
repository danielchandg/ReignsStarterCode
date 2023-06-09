
// firstCard = {
//   prompt: "Isn't painting Wonderful???",
//   rightChoiceText: "I LOVE PAINTING",
//   rightChoice: function(){
//     addResource("veggies", 20)
//       addPackToDeck("bumbling")
//     addToTopDeck("VanGoghHappy")
//     },
  
//   leftChoiceText: "PAINTING SUCKS", 
//   leftChoice: function(){
//     addResource("meat", 20)
//       addPackToDeck("bumbling")
//     addToTopDeck("VanGoghBetrayed")
//     enemiesMade += 1;
//   },
//   name: "Van Gogh",
//   resultText: "",
//   image: "./images/VanGosh.png",
//   priority: 1,
//   pack : "none"
// }

firstCard = {
  prompt: 'Sweetie, are you excited for your first day of first grade?',
  rightChoiceText: 'I love school!',
  rightChoice: function(){
    ad('e', 25);
    addPackToDeck('Lunchtime');
    addPackToDeck('Circle Time');
    addPackToDeck('Learning');
    addPackToDeck('Playtime');
    addPackToDeck('Halloween');
    addPackToDeck('Home');
  },
  leftChoiceText: 'I hate school',
  leftChoice: function(){
    ad('e', -25);
    addPackToDeck('Lunchtime');
    addPackToDeck('Circle Time');
    addPackToDeck('Learning');
    addPackToDeck('Playtime');
    addPackToDeck('Halloween');
    addPackToDeck('Home');
  },
  name: 'Mom',
  resultText: '',
  image: './images/mom.jpg',
  priority: 1,
  pack: 'none',
  left_p: false,
  left_e: true,
  left_m: false,
  right_p: false,
  right_e: true,
  right_m: false
}

emptyCard = {
  prompt: '',
  rightChoiceText: '',
  rightChoice: function(){

  },
  leftChoiceText: '',
  leftChoice: function(){

  },
  name: '',
  resultText: '',
  image: './images/',
  priority: 1,
  pack: 'none'
}


cardPool = {
  "uniqueIDList" : ["VanGoghHappy", "VanGoghBetrayed"],
  
  "VanGoghHappy" : {
    prompt: "Really? Let's be friends",
    rightChoiceText: "Lol Okay",
      rightChoice: function(){
      addResource("veggies", 10)
      },
    leftChoiceText: "XD HAHA. . .No", 
    leftChoice: function(){
      addResource("meat", 20)
      addToTopDeck("VanGoghBetrayed")
    enemiesMade += 1;
    },
    name: "Van Gogh",
    resultText: "",
    image: "./images/VanGosh.png",
    priority: 2,
    pack : "none"
  },


  "VanGoghBetrayed": {
    prompt: "To Heck with you",
    rightChoiceText: ". . . ",
      rightChoice: function(){
      addResource("veggies", 20)
      },
    leftChoiceText: "Fine. . . ", 
    leftChoice: function(){
      addResource("meat", 100)
    },
    name: "Van Gogh",
    resultText: "",
    image: "./images/VanGosh.png",
    priority: 2,
    pack : "none"
  }

}




