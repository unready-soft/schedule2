//todoリストを作成
var count_todo=0;
var d;
function make_todo(){
  const element = document.getElementById("mytext_todo");  //いれた文字を取得
  const input_value=element.value;                         //いれた文字を定義
  const container=document.querySelector('.todo_container');  //表示する場所を取得
  const checkbox = `<div><input type="checkbox" id="todo_onof"><span class="todo_box todo_font">${input_value}</span>&nbsp&nbsp&nbsp達成度<input type="range" class = "myrange" min="0" max="10" value="5"></div>`; //チェックボックスを表示
  container.insertAdjacentHTML('afterbegin',checkbox);    //チェックボックスを追加、表示

  count_todo+=1;
}

//チェックボックスを消す
function all_clear(){
  const object_delete=document.querySelector('.todo_container');  //場所を取得
  object_delete.innerHTML='';             //削除という体でblankをいれる
}
