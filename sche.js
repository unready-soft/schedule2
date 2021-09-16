var count = 1;
function schedule(event){
  var x = event.offsetX;                               //クリックした位置のｘ座標
  var y = event.offsetY;    //クリックした位置のy座標
  if (50 >= y && y>=0){
     const time_id=document.getElementById('schedule_time');  //入力した時間を取得に使う
     const time = time_id.value; //予定の時間
     const schedule = `<button id='schdule_make${count}' class='schedule' onclick = 'delete_schedule(this)'>${schedule_name}</button>`; //表示する内容
     const show_place = document.querySelector('.backboard_schedule');//表示場所
     show_place.insertAdjacentHTML('afterbegin',schedule);     //表示
     const schedule_css = document.querySelector('.schedule');//表示するcssのclass
     schedule_css.style.setProperty('--color',`${schedule_color}`);
     schedule_css.style.setProperty('--wid',`${time}px`);//入力した分を幅にし、cssに渡す
     schedule_css.style.setProperty('--left',`${x}px`); //クリックした位置をcssに渡す
     count += 1;
     time_id.value='';
   }
 }
function delete_schedule(ele){
    var id_schedule = ele.id; //idを取得
    var place_schedule=document.querySelector(`#${id_schedule}`); 
    place_schedule.remove();  //要素を消去
  }
