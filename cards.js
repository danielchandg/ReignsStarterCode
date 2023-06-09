
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
  prompt: '',
  rightChoiceText: 'Start',
  rightChoice: () => addToTopDeck('secondCard'),
  leftChoiceText: 'Start',
  leftChoice: () => addToTopDeck('secondCard'),
  name: '',
  resultText: '',
  priority: 1,
  pack: 'none',
  left_p: false,
  left_e: false,
  left_m: false,
  right_p: false,
  right_e: false,
  right_m: false,
  image: './images/title.jpg',
  no: true
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
  "uniqueIDList" : ["secondCard"],
  
  "secondCard" : {
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
  },

}




