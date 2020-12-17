alert('Welcome to classification age)');
var a = +prompt('How old are you ? ');

if(a<=18){
  alert('Teenager');
}else if(a<=50){
  alert('You must work man :( ');
}else if(a<=59){
  alert('Soon you will get pension');
}else if(a<=150){
  alert('Pensioner');
}else{
  alert('error');
}
alert('Click OK to continue the next app!');

alert('Welcome to the CLOCK)');
let b = +prompt('What time in your country ?');
switch(b){
  case 0:
    alert('12:00');
    break;
  case 1:
    alert('13:00');
    break;
  case 2:
    alert('14:00');
    break;
  case 3:
    alert('15:00');
    break;
  case 4:
    alert('16:00');
    break;
  case 5:
    alert('17:00');
    break;
  case 6:
    alert('18:00');
    break;
  case 7:
    alert('19:00');
    break;
  case 8:
    alert('20:00');
    break;
  case 9:
    alert('21:00');
    break;
  case 10:
    alert('22:00');
    break;
  case 11:
    alert('23:00');
    break;
  case 12:
    alert('00:00');
    break;
  default:
    alert('Error');
    break;
}
alert('Click OK to continue the next app)');

alert('Welcome to average value)');
let c = +prompt('First number:');
let d = +prompt('Second number:');
let e = +prompt('Third number:');

if((c>d && c<e) || (c<d && c>e)){
  alert('Average number is ' + c);
}else if ((d>c && d<e) || (d<c && d>e)){
  alert('Average number is ' + d);
}else if ((e>c && e<d) || (e<c && e>d)){
  alert('Average number is ' + e);
}else{
  alert('error');
}
alert('Thanks for joing us)');
