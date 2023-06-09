cardsDone = 0;


function updatePlayerData(){
  
  
let dataToShow = "&nbsp;Cards: "+ cardsDone;


io.writeIntoElement(dataToShow,"playerData")

}