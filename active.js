var switch_color_active;
var count_active = 1;
var schedule_name;
var schedule_color;
var count_real = 0;
function show(){
  // activeボタンを作成
  const element = document.getElementById("mytext");
  var input_value=element.value;  //入力した文字を取得
  const container=document.querySelector('.active_container');
  const button = `<button class="addition" onclick="on(this)" ondblclick="get_info(this)" id=box${count_active} >${input_value}</button>`;
  container.insertAdjacentHTML('afterbegin',button);  //ボタンを表示
  const randomhue_r = Math.trunc(Math.random()*360);　//360までの整数
  switch_color_active = `hsl(${randomhue_r},100%,50%)`;　//色の設定
  const express = document.querySelector('.addition'); //cssの場所指定
  express.style.setProperty('--color',switch_color_active); //代入する
  element.value='';     //inputフォーム内の文字を消去
  const active_sakusei = document.querySelector(`#box${count_active}`);//ボタンのid
   //挿入したい文字をボタンに
  count_active += 1;
}
//activeのボタンを押したら上に表示され、時計が動き出す。
function on(ele){
 var id_active = ele.id;//idの取得
 let date = new Date();
 let old_time = Date.now();
 const start_time =  document.querySelector('.time')//開始時間の場所
 const start_name = document.querySelector('.time_show')//active名の場所
 const element = document.querySelector(`#${id_active}`);//クリックしたボタンの名前のid
 const localetime = date.toLocaleTimeString();
 let input_value = element.innerHTML; //指定したidの文を取得
 start_time.innerHTML = localetime;//active開始時間を表示
 start_name.innerHTML = input_value;//active名を表示
}
// 時間を停止させる
function stop(){
 const input = document.querySelector('.time');  //開始時間の場所
 const stop_time_show = document.querySelector('.stop_time')　//停止時間の場所
 const element = document.querySelector('.keep_time');        //活動時間の表示
 const start_time = input.innerHTML;            //開始時間の表示
 const start = start_time.split(':');           //開始時間を秒に変換する処理以下
 const date = new Date();                       //停止時間を秒に変換する処理以下
 const stop_time = date.toLocaleTimeString();
 const stop = stop_time.split(':');             
 const stop_int = stop.map(Number);             //文字列を数字に
 const start_int = start.map(Number);
 const start_sum = start_int[2] + 60 *start_int[1] + 3600*start_int[0];//秒に変換
 const stop_sum = stop_int[2] + 60 *stop_int[1] + 3600*stop_int[0];
 const diff = Math.trunc((stop_sum-start_sum)/60);               //活動時間を求める
 stop_time_show.innerHTML = stop_time;          //停止時間を表示
 element.innerHTML = `${diff} minutes`;                      //活動時間を表示
 //棒グラフを表示
 const name_place = document.querySelector('.time_show');//活動の名のclassを取得
 const name = name_place.innerHTML;　//活動の名を取得
 const diff_str = String(diff);
 const gragh_container = document.querySelector('.gragh_container');
 const gragh_button = `<button id=real${count_real} class="addition_gragh" onclick=delete_schedule(this)>${name}</button>`//ボタンの設定
 count_real+=1;
 gragh_container.insertAdjacentHTML('afterbegin',gragh_button);//ボタンの表示
 const gragh_color = document.querySelector('.addition_gragh');//cssを指定
 gragh_color.style.setProperty('--wid',`${diff}px`) ;//ランダムで出た値を幅にする。
 gragh_color.style.backgroundColor = switch_color_active;　//クリックしたボタンの色をrealに使う
}
//activeのボタン情報を取得
function get_info(ele){
  var id_active = ele.id;//idの取得
  var place_active = document.querySelector(`#${id_active}`);
  var active_color = window.getComputedStyle(place_active,'').backgroundColor;//backgroundColorの取得
  schedule_name = place_active.innerHTML;
  schedule_color = active_color;
  const sel_place = document.querySelector('#selected_schedule');
  const sel = `<div>You selected "${schedule_name}". Please click on the ending time. If you make a misstake, you can delete by double-clicking button.</div>`
  sel_place.innerHTML = sel;
}
