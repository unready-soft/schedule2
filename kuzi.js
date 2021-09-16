function kuzi(){
  const show = document.querySelector('#kuzi_show');
  const random_value = Math.floor(Math.random() * 100);
  console.log(random_value);
  if (random_value >= 1 && random_value <= 5){
    show.innerHTML= '5%';
  }
  else if (random_value <= 25 && random_value >= 6){
   show.innerHTML= '20%';
  }
  else if (random_value >= 26 && random_value <= 99){
    show.innerHTML= '74%';
  }
  else {
    show.innerHTML='1%'
  }
}
