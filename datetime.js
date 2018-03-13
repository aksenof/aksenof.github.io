obj_data=document.getElementById("data");
name_month=new Array("января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря");
name_day=new Array("воскресенье","понедельник","вторник","среда","четверг","пятница","суббота");
function show_data()
{
time=new Date();
time_sec=time.getSeconds();
time_min=time.getMinutes();
time_hours=time.getHours();
time_wr=((time_hours<10)?"0":"")+time_hours;
time_wr+=":";
time_wr+=((time_min<10)?"0":"")+time_min;
time_wr+=":";
time_wr+=((time_sec<10)?"0":"")+time_sec; with(time)
time_wr=name_day[getDay()]+", "+getDate()+" "+name_month[getMonth()]+" "+getFullYear()+" г. "+time_wr;
obj_data.innerHTML=time_wr;
}
show_data();
setInterval("show_data();",1000);