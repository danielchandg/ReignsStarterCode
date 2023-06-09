let resources = [
  {key: "popularity", value: 50, image: "./images/popularity.svg", },
  {key: "education", value: 50, image: "./images/education.svg"},
  {key: "maturity", value: 50, image: "./images/maturity.svg"},
]

function addResource(key, amount){
  for (x in resources){
    if (key === resources[x].key) resources[x].value += amount;
  }
}

function ad(key, amount){
  let mp = {
    p: 'popularity',
    e: 'education',
    m: 'maturity',
  };
  for (x in resources){
    if (key === resources[x].key || mp[key] === resources[x].key){
      resources[x].value += amount;
      resources[x].value = Math.min(101, resources[x].value);
      resources[x].value = Math.max(-1, resources[x].value);
    }
  }
}


function setStatIcons () {
  let resource_bar = ""
  
  for (x in resources) {
    resource_bar += "<div class='statIconImageContainer'><div class='resourceBarFront' id='" + resources[x].key + "Bar'></div><div class='resourceBarBack'></div><image src='" + resources[x].image +"'class='statIconImage' id='" + resources[x].key +  "'> </image></div>"
  }

  io.appendIntoElement(resource_bar, "statIcons")
} 

function updateMeters() {
    for (x in resources) {
      //console.log(resources[x].key+"Bar", resources[x].value/100*75)
      document.getElementById(resources[x].key+"Bar").style.transform = "scaleY(" + resources[x].value/100 + ")";
      //console.log(resources[x].value/100*75+ "px", )
  }
  
}

function checkFail() {
  failures = []
    for (x in resources) {
      if (resources[x].value > 100) {failures.push({resource: resources[x].key, level: "high"})}
      if (resources[x].value < 0) {failures.push({resource: resources[x].key, level: "low"})}
  }
   console.log(failures)
  for (x in failures){
    let f = failures[x];
    for ( i in failCards){
      let failCard = failCards[i];
      if (failCard.resource === f.resource && failCard.level === f.level)
        addToTopDeck(failCard.card, false);
        document.getElementById('dialogBox').style.fontSize = '85%';
    }
    
  }
 
}