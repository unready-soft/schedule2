   //restボタンを作成
   function show_rest(){
    const element = document.getElementById("mytext_rest");
    const input_value=element.value;
    const container=document.querySelector('.rest_container');
    const button = '<button class="rest_color" onclick="on_rest()" id=box_rest></button>';
    container.insertAdjacentHTML('afterbegin',button);
    const rest_sakusei = document.querySelector('#box_rest');
    rest_sakusei.innerHTML=input_value;
    element.value='';
  }
  function on_rest(){
    const element = document.querySelector('.keep_time');
    const element_str = document.querySelector('keep_time_str');
    const reduce_id = document.querySelector('#box_rest');
    const keep_time = element.innerHTML;
    console.log(keep_time);
    const keep_time_int = Number(keep_time);
    const input_value = reduce_id.innerHTML;
    const input_value_int = Number(input_value);
    const diff = keep_time_int-input_value_int;
    element.innerHTML=diff;
    element_str.innerHTML='秒です。'

  }
