function oceanmoji(){
  //表示する文字
var str = "出会える動物たち　シャチ  収容人数　約2000人";
　//テキストボックスの文字数
var cnt = document.timer12.oceanmoji2.value.length;
  //文字が全部表示されているか確認
if ( cnt <25){
  //現在より入り文字多く切り出して表示
document.timer12.oceanmoji2.value = str.substr(0,cnt+1);}
else{
  //すべて表示されたら、空文字に戻す
document.timer12.oceanmoji2.value = ""; }
  //setTimeout()を含む関数を呼び出す
setTimeout("oceanmoji()",1000);}

function surfmoji(){
  //表示する文字
var str = "出会える動物たち　バンドウイルカ・カマイルカ  収容人数　約1000人";
　//テキストボックスの文字数
var cnt = document.timer13.surfmoji2.value.length;
  //文字が全部表示されているか確認
if ( cnt <35){
  //現在より入り文字多く切り出して表示
document.timer13.surfmoji2.value = str.substr(0,cnt+1);}
else{
  //すべて表示されたら、空文字に戻す
document.timer13.surfmoji2.value = ""; }
  //setTimeout()を含む関数を呼び出す
setTimeout("surfmoji()",1000);}