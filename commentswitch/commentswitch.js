
//popupの状態を検知する
var config = false;//「false」なら最初のコメント欄状態は非表示、「true」なら表示状態になる

/*以下コード*/
let elem;//コメントid用
let parentDiv;//親要素用
let Comentloading;
var intotext;
let Youtubedeta = location.href;


//コメント欄が表示されたらコメント欄を非表示にする
function cheak(){
    if(elem != null){
      //loadingを停止
      clearInterval(Comentloading);

      //コンフィグで決定した最初の状態を反映
      if(config == false){
        elem.style.display ="none";
        intotext ="コメント欄表示"
      }
      else{
        intotext ="コメント欄非表示"
      }

      buttonScript()
    }
}

function buttonScript(){
  //表示非表示ボタンを追加
  var div = document.createElement("div");
  div.setAttribute("id","adddiv"); //idを付与

  var button = document.createElement("button"); //button要素を宣言
  button.setAttribute("id","addbutton"); //idを付与

    // button要素にテキストを追加
    var buttontext = document.createTextNode(intotext);
    button.appendChild(buttontext); 

    div.appendChild(button);//YouTube上に追加


  parentDiv.insertBefore(div, elem);//YouTube上に追加

  //buttonが押された時作動
  document.getElementById("addbutton").addEventListener('click', Change, false)
}

function Change(e) {

  if(elem.style.display == "none" ){
    
    elem.style.display ="block";//コメント欄表示
    document.getElementById("addbutton").innerHTML="コメント欄非表示"

  }
  else{
    elem.style.display ="none";//コメント欄再び非表示
    document.getElementById("addbutton").innerHTML="コメント欄表示"
  }
  
}

//コメント欄取得
var acquisition = function(){
    parentDiv = document.getElementById("below");
    elem = document.getElementById("comments");
    cheak();
};

//定期的にコメント欄取得関数を実行
Comentloading = setInterval(acquisition,1000);

//別の動画に飛んだ時の操作
var Reload = function(){
  if(Youtubedeta != location.href){

    //設定した状態にする
    if(config == false){
      elem.style.display ="none";//コメント欄非表示
      document.getElementById("addbutton").innerHTML="コメント欄表示"
    }
    else{
      elem.style.display ="block";//コメント欄表示
      document.getElementById("addbutton").innerHTML="コメント欄非表示"
    }
    Youtubedeta = location.href;
  }
}
//裏で無限にロードし続ける(処理が少ないからいいかなって。)
let Youtubeloading = setInterval(Reload,1000);



