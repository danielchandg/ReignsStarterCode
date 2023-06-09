failCards = [
{
  resource: 'popularity',
  level: 'high',
  card: {
    prompt: "Your popularity has soared to new heights. Amidst the adoration, it becomes impossible to discern genuine friendship from those seeking to bask in your popularity. You become irrecognizable to yourself.",
    rightChoiceText: '',
    rightChoice: () => location.reload(),
    leftChoiceText: '',
    leftChoice: () => location.reload(),
    name: '',
    resultText: 'Superficial Connections',
    image: './images/popularityHigh.jpg'
  }
},
{
  resource: 'popularity',
  level: 'low',
  card: {
    prompt: "Your popularity has hit rock bottom. People no longer seek your company or include you in their plans. Your voice goes unheard. Years from now, your classmates will have fond memories of first grade but forget you existed.",
    rightChoiceText: '',
    rightChoice: () => location.reload(),
    leftChoiceText: '',
    leftChoice: () => location.reload(),
    name: '',
    resultText: 'Social Isolation',
    image: './images/popularityLow.jpg'
  }
},
{
  resource: 'education',
  level: 'high',
  card: {
    prompt: "Your insatiable thirst for knowledge has led to an unprecendented level of education. You soon find it impossible to connect with your classmates who lack the same level of understanding as you.",
    rightChoiceText: '',
    rightChoice: () => location.reload(),
    leftChoiceText: '',
    leftChoice: () => location.reload(),
    name: '',
    resultText: "You're the nerd you always feared you would become",
    image: './images/educationHigh.jpg'
  }
},
{
  resource: 'education',
  level: 'low',
  card: {
    prompt: "You fall behind in your education. With limited education, you find yourself relying entirely on your classmates for information and decision-making. You lose autonomy and control over your life.",
    rightChoiceText: '',
    rightChoice: () => location.reload(),
    leftChoiceText: '',
    leftChoice: () => location.reload(),
    name: '',
    resultText: "Overdependence",
    image: './images/educationLow.jpg'
  }
},
{
  resource: 'maturity',
  level: 'high',
  card: {
    prompt: "You develop the maturity of someone double your age. You miss out on the joys of childhood as you slowly develop the lifestyle of a middle-aged dad.",
    rightChoiceText: '',
    rightChoice: () => location.reload(),
    leftChoiceText: '',
    leftChoice: () => location.reload(),
    name: '',
    resultText: 'RIP CHILDHOOD',
    image: './images/maturityHigh.jpg'
  }
},
{
  resource: 'maturity',
  level: 'low',
  card: {
    prompt: "Your maturity fails to develop as you age. The quirky habits of your youth, such as making poop jokes or eating spaghetti with your fingers, now cause you to be bullied relentlessly.",
    rightChoiceText: '',
    rightChoice: () => location.reload(),
    leftChoiceText: '',
    leftChoice: () => location.reload(),
    name: '',
    resultText: 'Diapers Forever',
    image: './images/maturityLow.jpg'
  }
}
]

defaultFailCard = {
  prompt: "I don't know what you did wrong, but it was something",
  rightChoiceText: "oops",
  rightChoice: function(){location.reload();
    },
  
  leftChoiceText: "PAINTING SUCKS", 
  leftChoice: function(){location.reload();
  },
  name: "Narrator",
  resultText: "You made a mistake",
  image: "./images/legumes.jpg"
}