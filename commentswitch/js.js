
var config = false;


let elem;
let parentDiv;
let Comentloading;
var intotext;
let Youtubedeta = location.href;


function cheak(){
    if(elem != null){
      clearInterval(Comentloading);

      if(config == false){
        elem.style.display ="none";
        intotext ="yes"
      }
      else{
        intotext ="no"
      }

      buttonScript()
    }
}

function buttonScript(){

  var div = document.createElement("div");
  div.setAttribute("id","adddiv"); 
  var button = document.createElement("button"); 
  button.setAttribute("id","addbutton"); 

    var buttontext = document.createTextNode(intotext);
    button.appendChild(buttontext); 

    div.appendChild(button);


  parentDiv.insertBefore(div, elem);

  document.getElementById("addbutton").addEventListener('click', Change, false)
}

function Change(e) {

  if(elem.style.display == "none" ){
    
    elem.style.display ="block";
    document.getElementById("addbutton").innerHTML="コメント欄非表示"

  }
  else{
    elem.style.display ="none";
    document.getElementById("addbutton").innerHTML="コメント欄表示"
  }
  
}

var acquisition = function(){
    parentDiv = document.getElementById("below");
    elem = document.getElementById("comments");
    cheak();
};

Comentloading = setInterval(acquisition,1000);

var Reload = function(){
  if(Youtubedeta != location.href){

    if(config == false){
      elem.style.display ="none";
      document.getElementById("addbutton").innerHTML="コメント欄表示"
    }
    else{
      elem.style.display ="block";
      document.getElementById("addbutton").innerHTML="コメント欄非表示"
    }
    Youtubedeta = location.href;
  }
}

let Youtubeloading = setInterval(Reload,1000);



