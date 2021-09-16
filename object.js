function year_change(){
  const year_place = document.querySelector('#year_id');
  const year_com = document.querySelector('#year_com')
  year_com.classList.toggle('change');
  year_place.classList.toggle('change');
}

function year_k(){
  const text_place = document.getElementById("this_year_text");
  const text = text_place.value;
  document.getElementById('year_open').innerHTML = text;
}

function month_change(){
  const month_place = document.querySelector('#month_id');
  const year_com = document.querySelector('#month_com')
  year_com.classList.toggle('change');
  month_place.classList.toggle('change');
 }

function month_k(){
  const text_place = document.getElementById("this_month_text");
  const text = text_place.value;
  document.getElementById('month_open').innerHTML = text;
 }

function week_change(){
  const week_place = document.querySelector('#week_id');
  const year_com = document.querySelector('#week_com')
  year_com.classList.toggle('change');
  week_place.classList.toggle('change'); 
 }

function week_k(){
  const text_place = document.getElementById("this_week_text");
  const text = text_place.value;
  document.getElementById('week_open').innerHTML = text;
}
